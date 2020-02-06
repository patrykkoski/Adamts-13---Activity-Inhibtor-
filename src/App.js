import React, { useState } from "react";
import "./App.css";
import RowsList from "./components/RowsList";
import ChartComponent from "./components/ChartComponent";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

function App() {
  const [rows, setRows] = useState([
    { c1: "", c2: "", csr: "", percentage: "" }
  ]);

  const [chartData, setChartData] = useState([]);

  const addRow = e => {
    const newRows = [...rows, { c1: "", c2: "", csr: "", percentage: "" }];
    setRows(newRows);
  };

  const removeRow = index => {
    console.log(index);
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleC1Change = (index, value) => {
    const newRow = rows[index];
    newRow.c1 = value;
    newRow.csr = ((parseFloat(value) + parseFloat(newRow.c2)) / 2).toFixed(2);
    setRows([...rows], newRow);
  };

  const handleC2Change = (index, value) => {
    const newRow = rows[index];
    newRow.c2 = value;
    newRow.csr = ((parseFloat(value) + parseFloat(newRow.c1)) / 2).toFixed(2);
    setRows([...rows], newRow);
  };

  const handlePercentageChange = (index, value) => {
    const newRow = rows[index];
    newRow.percentage = value;
    setRows([...rows], newRow);
  };

  const generateChart = () => {
    const d = rows.map(row => {
      return { x: row.percentage, y: row.csr };
    });
    setChartData(d);
  };

  return (
    <div className="App">
      <div className="chart"></div>
      <div className="form-wrapper">
        <div className="form-wrapper__header">
          <h3>ADAMTS13</h3>
        </div>

        <table className="main-table" border="1" frame="hsides" rules="rows">
          <thead>
            <tr>
              <th>Numer pomiaru</th>
              <th>1</th>
              <th>2</th>
              <th>Cśr</th>
              <th>%</th>
              <th>Usuń pomiar</th>
            </tr>
          </thead>
          <tbody>
            <RowsList
              rows={rows}
              removeRow={removeRow}
              handleC1Change={handleC1Change}
              handleC2Change={handleC2Change}
              handlePercentageChange={handlePercentageChange}
            />
          </tbody>
        </table>
        <div className="form-wrapper__footer">
          <button onClick={addRow}>Dodaj pomiar</button>
          <button onClick={generateChart}>Generuj wykres</button>
        </div>
      </div>
      <ChartComponent data={chartData} />
    </div>
  );
}

export default App;
