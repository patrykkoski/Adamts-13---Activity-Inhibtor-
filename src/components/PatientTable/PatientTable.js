import React from "react";
import SurveyList from "./SurveyList/SurveyList";

const PatientTable = props => {
  return (
    <div className="form-wrapper">
      <div className="form-wrapper__header">
        <h3>Tabela wyników</h3>
      </div>
      <table className="main-table" border="1" frame="hsides" rules="rows">
        <thead>
          <tr>
            <th>Pomiar</th>
            <th>1</th>
            <th>2</th>
            <th>Cśr</th>
            <th>%</th>
            <th>Usuń pomiar</th>
          </tr>
        </thead>
        <tbody>
          <SurveyList
            controlSurvey={props.controlSurvey}
            handleP1Change={props.handleP1Change}
            handleP2Change={props.handleP2Change}
            removePatient={props.removePatient}
          />
        </tbody>
      </table>
      <div className="form-wrapper__footer">
        <button onClick={props.addPatient}>Dodaj pacjenta</button>
        {props.canGenerateData ? (
          <button onClick={props.solvePatient}>Generuj wynik</button>
        ) : null}
      </div>
    </div>
  );
};

export default PatientTable;
