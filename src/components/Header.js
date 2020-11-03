import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const Header = (props) => (
    <Jumbotron fluid>
        <Container>
            <h1 className="display-4 justify-content-center">{props.title}</h1>
        </Container>
    </Jumbotron>
  );
  
  export default Header;
  