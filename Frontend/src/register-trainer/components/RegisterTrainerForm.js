import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const RegisterTrainerForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const trainer = {
      name,
      email,
    };

    const response = await fetch("https://localhost:44323/api/Trainers", {
      method: "POST",
      body: JSON.stringify(trainer),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 201) {
      setError(
        "There was an error, please verify the credentials and try again."
      );
    } else {
      setError("");
      history.push("/pokemons");
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <p>{error}</p>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default RegisterTrainerForm;
