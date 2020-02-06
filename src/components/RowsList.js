import React from "react";
import InputsRow from "./InputsRow";

const RowsList = props => {
  const listOfRows = props.rows.map((row, id) => {
    return (
      <InputsRow
        key={id}
        index={id}
        row={row}
        removeRow={props.removeRow}
        handleC1Change={props.handleC1Change}
        handleC2Change={props.handleC2Change}
        handlePercentageChange={props.handlePercentageChange}
      />
    );
  });

  return listOfRows;
};

export default RowsList;
