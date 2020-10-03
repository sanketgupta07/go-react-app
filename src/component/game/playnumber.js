import React from "react";
import colors from "./color";

export default function PlayNumber(props) {
  return (
    <button
      className="number"
      style={{ backgroundColor: colors[props.status] }}
      onClick={() => props.onClick(props.number, props.status)}
    >
      {props.number}
    </button>
  );
}
