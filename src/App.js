import React, { useState } from "react";
import InputRow from "./components/InputsRow";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="chart"></div>
      <div className="form-wrapper">
        <div className="form-wrapper__header">
          <h3>Adamts13</h3>
        </div>
        <form className="main-form">
          <table className="main-table" border="1" frame="hsides" rules="rows">
            <thead>
              <tr>
                <th>Numer pomiaru</th>
                <th>C1</th>
                <th>C2</th>
                <th>CŚr</th>
                <th>Procent</th>
                <th>Usuń pomiar</th>
              </tr>
            </thead>
            <tbody>
              <InputRow />
              <InputRow />
              <InputRow />
              <InputRow />
            </tbody>
          </table>
          <div className="form-wrapper__footer">
            <button>Dodaj pomiar</button>
            <button>Generuj wykres</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
