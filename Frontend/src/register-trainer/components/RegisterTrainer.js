import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import RegisterTrainerForm from "./RegisterTrainerForm";

const RegisterTrainer = () => {
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h1 className="text-center">Register a new trainer!</h1>
          <RegisterTrainerForm />
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterTrainer;
