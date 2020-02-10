import React from "react";
import "../../../../App.css";

const SurveyRow = props => {
  let patientName;
  switch (props.index) {
    case 0:
      patientName = <input type="text" placeholder={"Control Low"}></input>;
      break;
    case 1:
      patientName = <input type="text" placeholder={"Control High"}></input>;
      break;
    default:
      patientName = <input type="text" placeholder={"ID pacjenta"}></input>;
      break;
  }
  return (
    <tr className="inputRow">
      <td>{patientName}</td>
      <td>
        <input
          type="text"
          value={props.survey.p1}
          onChange={e => props.handleP1Change(props.index, e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          value={props.survey.p2}
          onChange={e => props.handleP2Change(props.index, e.target.value)}
        ></input>
      </td>
      <td>
        <input type="text" disabled value={props.survey.psr}></input>
      </td>
      <td>
        <input type="text" value={props.survey.pPercentage} disabled></input>
      </td>
      <td>
        {props.index > 1 ? (
          <button onClick={() => props.removePatient(props.index)}>Usuń</button>
        ) : null}
      </td>
    </tr>
  );
};

export default SurveyRow;
