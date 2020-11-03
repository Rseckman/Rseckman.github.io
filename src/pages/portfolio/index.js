import React from "react";
import Header from "../../components/Header";
import Project from "../../components/Project";
import projectList from "../../projects.json"
import { Container, CardGroup } from "react-bootstrap"

const Portfolio = () => (
  <>
    <Header title="Portfolio"/>
      <Container >
        <CardGroup>
          {projectList.map(project => 
            <Project 
            name={project.name}
            github={project.github}
            deployed={project.github}
            image={project.image}
            />
          )}
        </CardGroup>
      </Container>
  </>
);

export default Portfolio;
