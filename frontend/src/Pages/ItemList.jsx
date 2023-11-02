import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import ItemTable from "../Components/ItemTable";
import Input from "../Components/Input";
import jsPDF from "jspdf";
import "jspdf-autotable";
import './ItemList.css'

const fetchItems = (signal) => {
  return fetch("/data", { signal }).then((res) => res.json());
};

const ItemList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState("");
  const [filteredColumn, setFilteredColumn] = useState([]);
 

  useEffect(() => {
    const controller = new AbortController();

    fetchItems(controller.signal)
      .then((items) => {
        setLoading(false);
        setData(items);
        setFilteredData(items);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setData(null);
          throw error;
        }
      });
    return () => controller.abort();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const compare = (a, b, field, direction) => {
    if (direction === "asc") {
      return a[field] <= b[field] ? -1 : 1;
    } else {
      return a[field] > b[field] ? -1 : 1;
    }
  };

  const sort = (field, direction) => {
    let temp = "";
    data === filteredData
      ? (temp = data.sort((a, b) => compare(a, b, field, direction)))
      : (temp = filteredData.sort((a, b) => compare(a, b, field, direction)));
    setFilteredData([...temp]);
  };

  const filterByName = (value) => {
    if (value == "") {
      setFilteredData(data);
      setFilteredColumn([])
      ;
    } else {
      let temp = "";
      data === filteredData
        ? (temp = data.filter((item) =>
            item.item.toLowerCase().startsWith(value.toLowerCase())
          ))
        : (temp = filteredData.filter((item) =>
            item.item.toLowerCase().startsWith(value.toLowerCase())
          ));
      setFilteredData([...temp]);
      setFilteredColumn([...filteredColumn,'item']);
    }
  };

  const filterByVat = (value) => {
    if (value === "All") {
      setFilteredData(data);
      setFilteredColumn([]);
    } else {
      let temp = "";
      data === filteredData
        ? (temp = data.filter((item) => item.vat == value))
        : (temp = filteredData.filter((item) => item.vat == value));
      setFilteredData([...temp]);
      setFilteredColumn([...filteredColumn,'vat']);
    }
  };

  const filterByValue = (value) => {
    if (value === "All") {
      setFilteredData(data);
      setFilteredColumn([])
    } else {
      let temp = "";
      data === filteredData
        ? (temp = data.filter(
            (item) => item.netValue <= value && item.netValue > value - 10
          ))
        : (temp = filteredData.filter(
            (item) => item.netValue <= value && item.netValue > value - 10
          ));
      console.log(temp);
      setFilteredData([...temp]);
      setFilteredColumn([...filteredColumn,'net-value'])
    }
  };

  const clearFilters = () => {
    setFilteredData(data);
    setFilteredColumn([]);
  }

  


  const exportPDF = () => {
    const unit = "pt";
    const size = "A4";
    const orientation = "portrait";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Report";

    const data = filteredData;

    let content = {
      startY: 50,

      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };

  return (
    <div>
      <div>
        <Input
          filterName={filterByName}
          filterVat={filterByVat}
          filterValue={filterByValue}
        />
        <div className="clear-button-container">
           <button className='clear-button' onClick={clearFilters}>Clear filters</button> 
        </div>
        <div className="export-button-container">
           <button className='export-button' onClick={exportPDF}>Generate PDF</button> 
        </div>
      </div>
      <ItemTable items={filteredData} sort={sort} filteredColumn={filteredColumn}/>
    </div>
  );
};

export default ItemList;
