import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";

export default function CounterBtn(params) {
  const [counter, setCounter] = useState(0);
  const incrementClick = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <header className="App-header">
      <p>
        <Button onClickFunction={incrementClick} increment={1} /> &nbsp;
        <Button onClickFunction={incrementClick} increment={5} />
        <br />
        <Display message={counter} />
      </p>
    </header>
  );
}
