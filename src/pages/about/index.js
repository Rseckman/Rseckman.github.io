import React from "react";
import Picture from "../../assets/Ryan-Headshot.jpg"
import Header from "../../components/Header"
import { Container, Card } from "react-bootstrap"


const About = () => (
  <>
    <Header title="About"/>
    <Container className="my-5 pb-5">
      <Card>
        <Card.Img variant="top" src={Picture} />
        <Card.Body>
          <Card.Text>
            <h4 className="card-title">Ryan Seckman</h4>
              <p>
                I was born in Beaver, Pennsylvania; grew up in Germantown,
                Maryland; attended Eastern University in St. Davids, PA for a
                Bachelors in Youth Ministry and ended up in Phoenixville, PA where
                I have been employed as a full time Youth Director at Royersford
                Baptist Church. I currently live with two cats (Nacho and Fanta)
                and one dog (Koda).
              </p>
              <p>
                A number of years ago I started looking into the idea of a career
                change as I did not see myself being a Youth Director forever, and
                I became very excited at the prospect of doing something in the
                field of computers and web development. I knew at this day in age,
                one can not go wrong in chosing a career in technology. Through a
                thoughtful process and the extra time granted by Covid-19's social
                distancing, I found Upenn's Coding and Web Development Bootcamp
                course, and decided now was the time!
              </p>
              <p>
                Through my strong network of friends and family, and the resources
                I have, not only through them but what is offered in Upenn's
                Bootcamp course, I am set up for success. I am eager to learn new
                things and take what I learn now and continue to grow as a
                Developer and in my career.
              </p>
          </Card.Text>
        </Card.Body>
      </Card>



        
        
      </Container>
    </>
);

export default About;
