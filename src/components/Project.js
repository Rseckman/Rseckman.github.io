import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import Picture from "../assets/images/simpleResume.png"



function Project (props) {

    return (
        <>
            <Col>
                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={Picture} />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" target="_blank" href={props.deployed}>Deployed Site</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>

    );
}

export default Project;