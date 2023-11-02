const TableHead = ({ sort }) => {
  return (
    <thead>
      <tr>
        <th>
          <div className="column-head">
            <div>Item number</div>
            <div className="button-container">
              <button onClick={() => sort("itemNumber", "asc")}>▲</button>
              <button onClick={() => sort("itemNumber", "desc")}>▼</button>
            </div>
          </div>
        </th>
        <th>
          <div className="column-head">
            <div>Item</div>
            <div className="button-container">
              <button onClick={() => sort("item", "asc")}>▲</button>
              <button onClick={() => sort("item", "desc")}>▼</button>
            </div>
          </div>
        </th>
        <th>
          <div className="column-head">
            <div>Net value ($)</div>
            <div className="button-container">
              <button onClick={() => sort("netValue", "asc")}>▲</button>
              <button onClick={() => sort("netValue", "desc")}>▼</button>
            </div>
          </div>
        </th>
        <th>
          <div className="column-head">
            <div>VAT (%)</div>
            <div className="button-container">
              <button onClick={() => sort("vat", "asc")}>▲</button>
              <button onClick={() => sort("vat", "desc")}>▼</button>
            </div>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
