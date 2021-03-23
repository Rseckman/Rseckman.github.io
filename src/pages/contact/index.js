import React from "react";
import Header from "../../components/Header"
import { Container, Card, ListGroup} from "react-bootstrap"



const Contact = () => (
  <>
    <Header title="Contact"/>
    <Container>
      <Card>
        <ListGroup >
            <ListGroup.Item variant="secondary"><strong>Email: </strong>rseckman@hotmail.com</ListGroup.Item>
            <ListGroup.Item variant="secondary"><strong>Phone: </strong>301-335-2301</ListGroup.Item>
            <ListGroup.Item action variant="info" target="_blank" href="https://github.com/Rseckman">
              <strong>GitHub</strong>
            </ListGroup.Item>
            <ListGroup.Item action variant="info" target="_blank" href="https://www.linkedin.com/in/ryan-seckman">
              <strong>LinkedIn</strong>
            </ListGroup.Item>
            <ListGroup.Item action variant="info" target="_blank" href="https://drive.google.com/file/d/1nd4nxEWWzxPlB6EicSWqGq1K4aTnIkIA/view?usp=sharing">
              <strong>My Resume</strong>
            </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  </>
);

export default Contact;
