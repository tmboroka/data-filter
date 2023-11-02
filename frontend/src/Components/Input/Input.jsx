import "./Input.css";
const Input = ({ filterName, filterVat, filterValue }) => {
  const vatOptions = [
    {
      label: "5",
      value: 5,
    },
    {
      label: "15",
      value: 15,
    },
    {
      label: "27",
      value: 27,
    },
  ];

  const valueOptions = [
    {
      label: "under 10$",
      value: 10,
    },
    {
      label: "10-20$",
      value: 20,
    },
    {
      label: "20-30$",
      value: 30,
    },
    {
      label: "30-40$",
      value: 40,
    },
    {
      label: "over 40$",
      value: 50,
    },
  ];

  return (
    <div className="input-container">
      <input
        className="input"
        onChange={(e) => filterName(e.target.value)}
        placeholder="Filter by item name"
      ></input>
      <select
        className="input"
        name="vat"
        id="vat"
        onChange={(e) => filterValue(e.target.value)}
      >
        <option value="All">Filter by net value</option>
        {valueOptions.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select
        className="input"
        name="vat"
        id="vat"
        onChange={(e) => filterVat(e.target.value)}
      >
        <option value="All">Filter by VAT</option>
        {vatOptions.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}%
          </option>
        ))}
      </select>
    </div>
  );
};
export default Input;
