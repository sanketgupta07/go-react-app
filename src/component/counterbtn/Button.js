import React from "react";
/**
 * Buuton Component to increase the display for every click
 * @param {*} props
 */
function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}

export default Button;
