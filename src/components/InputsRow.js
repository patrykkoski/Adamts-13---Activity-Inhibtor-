import React, { useState } from "react";
import "../App.css";

const InputsRow = props => {
  return (
    <tr className="inputRow">
      <td>{props.index + 1}</td>
      <td>
        <input
          type="text"
          placeholder="c1"
          value={props.row.c1}
          onChange={e => props.handleC1Change(props.index, e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="c2"
          value={props.row.c2}
          onChange={e => props.handleC2Change(props.index, e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="cŚr"
          disabled
          value={props.row.csr}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Procent"
          value={props.row.percentage}
          onChange={e =>
            props.handlePercentageChange(props.index, e.target.value)
          }
        ></input>
      </td>
      <td>
        <button onClick={() => props.removeRow(props.index)}>Usuń</button>
      </td>
    </tr>
  );
};

export default InputsRow;
