const TableBody = ({ items, filteredColumn }) => {
    console.log(filteredColumn)
  return (
    <tbody>
      {items.map((item) => (
        <tr key={item.itemNumber}>
          <td>{item.itemNumber}</td>
          <td className={filteredColumn.includes('item')?'filtered': 'default'}>{item.item}</td>
          <td className={filteredColumn.includes('net-value')?'filtered': 'default'}>{item.netValue}</td>
          <td className={filteredColumn.includes('vat')?'filtered': 'default'}>{item.vat}</td>
        </tr>
      ))}
    </tbody>
  );
};
export default TableBody;
