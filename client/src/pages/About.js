import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


function About() {
    return (
        <div>
          <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
            <h1>C19 Tracker</h1>
            <h2>Get the latest information on covid-19 levels for your destination area.</h2>
          </Hero>
          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col size="md-12">
                <h1>Welcome To C19 Tracker!</h1>
                <p>How this app works....
                  choose the "Search" link,
                  and enter the state you are traveling to in the US.
                </p>
                
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    export default About;