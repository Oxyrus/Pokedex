import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarToggler, NavbarBrand } from "reactstrap";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/pokemons">
        Pokedex
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
    </Navbar>
  );
};

export default Example;
