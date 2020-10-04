import React, { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

function UserInput(params) {
  const [login, setLogin] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    params.onSubmit(login);
    setLogin("");
  };
  return (
    <Form>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Github Username"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          required
        />
        <InputGroup.Append>
          <Button variant="outline-primary" onClick={handleSubmit}>
            {params.text}
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}

export default UserInput;
