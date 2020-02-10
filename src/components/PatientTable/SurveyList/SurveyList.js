import React from "react";
import SurveyRow from "./SurveyRow/SurveyRow";

const SurveyList = props => {
  const listOfRows = props.controlSurvey.map((survey, id) => {
    return (
      <SurveyRow
        key={id}
        index={id}
        survey={survey}
        removeRow={props.removeRow}
        handleP1Change={props.handleP1Change}
        handleP2Change={props.handleP2Change}
        handlePPercentageChange={props.handlePercentageChange}
        removePatient={props.removePatient}
      />
    );
  });

  return listOfRows;
};

export default SurveyList;
