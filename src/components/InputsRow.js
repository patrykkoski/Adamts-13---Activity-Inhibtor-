import React from "react";
import "../App.css";

const InputRow = props => {
  return (
    <tr className="inputRow">
      <td>1</td>
      <td>
        <input type="text" placeholder="c1"></input>
      </td>
      <td>
        <input type="text" placeholder="c2"></input>
      </td>
      <td>
        <input type="text" placeholder="cŚr" disabled defaultValue="23"></input>
      </td>
      <td>
        <input type="text" placeholder="Procent"></input>
      </td>
      <td>
        <button>Usuń</button>
      </td>
    </tr>
  );
};

export default InputRow;
