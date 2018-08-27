import React from "react";
import "./CharComponent.css";

const CharComponent = props => {
  return (
    <div className="charBox" onClick={props.click}>
      <p> {props.letter}</p>
    </div>
  );
};

export default CharComponent;
