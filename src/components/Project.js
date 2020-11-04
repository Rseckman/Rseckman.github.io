import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import Picture from "../assets/images/simpleResume.png"



function Project (props) {

    return (
        <>
            <Col>
                <Card className="my-3" style={{ width: '24rem' }}>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="info" target="_blank" href={props.deployed}>Deployed Site</Button>
                        <Button className="ml-3" variant="outline-dark" target="_blank" href={props.github}>Github</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>

    );
}

export default Project;