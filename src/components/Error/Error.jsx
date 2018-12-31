import React from "react";
import "./Error.css";
import brokenImage from "./../../img/error_1229153.png";

export default function Error(props) {
  return (
    <div className="modal">
      <img id='broken-image' src={brokenImage} alt="broken logo" />
      <h3 className="modal-heading">Error !</h3>
      <p className="modal-body">{props.message}</p>
    </div>
  );
}
