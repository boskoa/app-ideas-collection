const YearInput = ({ year, setYear }) => {
  return (
    <input
      type="number"
      step="1"
      value={year}
      placeholder="Enter year"
      onChange={(e) => setYear(e.target.value)}
    />
  );
};

export default YearInput;
