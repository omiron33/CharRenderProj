import React from "react";
import "./ValidationComponent.css";

const ValidationComponent = props => {

  let validationMessage = 'Word length is appropriate length.';
  let validationColor = 'validLength';

  if (props.wordLength < 5) {
      validationMessage = 'Word length is too short (Less than 5 chars)';
      validationColor = 'invalidLength';
  }

return (
      <div>
            <p className={validationColor}> {validationMessage} </p>
      </div>
    );
};

export default ValidationComponent;
