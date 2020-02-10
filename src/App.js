import React, { useState } from "react";
import "./App.css";
import MainTable from "./components/MainTable";
import ChartComponent from "./components/ChartComponent";
import PatientTable from "./components/PatientTable/PatientTable";
import { twoNearestPoints } from "./utils/solveAbsorbationUtil";

function App() {
  const [rows, setRows] = useState([
    { c1: "", c2: "", csr: "", percentage: "" }
  ]);

  const [controlSurvey, setControlSurvey] = useState([
    { p1: "", p2: "", psr: "", pPercentage: "" },
    { p1: "", p2: "", psr: "", pPercentage: "" },
    { p1: "", p2: "", psr: "", pPercentage: "" }
  ]);

  const [chartData, setChartData] = useState([]);

  const [canGenerateData, setCanGenerateData] = useState(false);

  const addRow = e => {
    const newRows = [...rows, { c1: "", c2: "", csr: "", percentage: "" }];
    setRows(newRows);
  };

  const removeRow = index => {
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

  const handleP1Change = (index, value) => {
    const newRow = controlSurvey[index];
    newRow.p1 = value;
    newRow.psr = ((parseFloat(value) + parseFloat(newRow.p2)) / 2).toFixed(2);
    setControlSurvey([...controlSurvey], newRow);
  };

  const handleP2Change = (index, value) => {
    const newRow = controlSurvey[index];
    newRow.p2 = value;
    newRow.psr = ((parseFloat(value) + parseFloat(newRow.p1)) / 2).toFixed(2);
    setControlSurvey([...controlSurvey], newRow);
  };

  const generateChart = () => {
    if (rows.length > 2) {
      const d = rows.map(row => {
        return { x: row.percentage, y: row.csr };
      });
      setChartData(
        d.sort((a, b) => (parseFloat(a.x) > parseFloat(b.x) ? 1 : -1))
      );
      setCanGenerateData(true);
    }
  };

  const addPatient = () => {
    const newControlSurvey = [
      ...controlSurvey,
      { p1: "", p2: "", psr: "", pPercentage: "" }
    ];
    setControlSurvey(newControlSurvey);
  };

  const removePatient = index => {
    const newControlSurvey = [...controlSurvey];
    newControlSurvey.splice(index, 1);
    setControlSurvey(newControlSurvey);
  };

  const solvePatient = () => {
    let newData = [];
    newData = controlSurvey.map(survey => {
      const s = survey.psr;
      if (s !== "") {
        return twoNearestPoints(chartData, s);
      }
      return null;
    });
    for (let i = 0; i < newData.length; i++) {
      const newRow = controlSurvey[i];
      newRow.pPercentage = parseFloat(newData[i]).toFixed(4);
      setControlSurvey([...controlSurvey], newRow);
    }
  };

  return (
    <div className="App">
      <MainTable
        rows={rows}
        addRow={addRow}
        removeRow={removeRow}
        handleC1Change={handleC1Change}
        handleC2Change={handleC2Change}
        handlePercentageChange={handlePercentageChange}
        generateChart={generateChart}
      />
      <PatientTable
        controlSurvey={controlSurvey}
        handleP1Change={handleP1Change}
        handleP2Change={handleP2Change}
        canGenerateData={canGenerateData}
        solvePatient={solvePatient}
        addPatient={addPatient}
        removePatient={removePatient}
      />
      <ChartComponent data={chartData} />
    </div>
  );
}

export default App;
