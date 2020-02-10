import React from "react";
import RowsList from "./RowsList";
import "../App.css";

const MainTable = props => {
  return (
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
            rows={props.rows}
            removeRow={props.removeRow}
            handleC1Change={props.handleC1Change}
            handleC2Change={props.handleC2Change}
            handlePercentageChange={props.handlePercentageChange}
          />
        </tbody>
      </table>
      <div className="form-wrapper__footer">
        <button onClick={props.addRow}>Dodaj pomiar</button>
        {props.rows.length > 2 ? (
          <button onClick={props.generateChart}>Generuj wykres</button>
        ) : null}
      </div>
    </div>
  );
};
export default MainTable;
