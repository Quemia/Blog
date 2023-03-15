import React from "react";
import {
  Container,
  NavbarDivTitle,
  NavbarDivOption,
  NavbarTitle,
  NavbarButtonOptions,
} from "./styled";

function Navbar() {
  return (
    <Container>
      <NavbarDivTitle>
        <NavbarTitle>Persona</NavbarTitle>
      </NavbarDivTitle>
      <NavbarDivOption>
        <NavbarButtonOptions>Contact</NavbarButtonOptions>
        <NavbarButtonOptions>Works</NavbarButtonOptions>
        <NavbarButtonOptions>Sair</NavbarButtonOptions>
      </NavbarDivOption>
    </Container>
  );
}

export default Navbar;
