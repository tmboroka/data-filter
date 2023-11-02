import "./ItemTable.css";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const ItemTable = ({items, sort, filteredColumn}) => {
  return (
    <div className="ItemTable">
      <table>
        <TableHead sort={sort}/>
        <TableBody items={items}  filteredColumn={filteredColumn}/>
      </table>
    </div>
  );
};

export default ItemTable;
