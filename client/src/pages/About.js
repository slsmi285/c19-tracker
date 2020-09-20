import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";



function About() {
    return (
        <div>
          <Hero backgroundImage="https://www.lonelyplanet.com/news/wp-content/uploads/2018/03/Dog-with-Plane-850x567.jpg">
            <h1>C-19 Travel Tracker</h1>
            <h2>Get the latest information on covid-19 levels for your destination area.</h2>
          </Hero>
          <Container style={{ marginTop: 40 }}>
            <Row>
              <Col size="md-12">
                <h3 className="about-text">Welcome!</h3>
              <p>
                As our lives begin to get back to a new normal, feel confident in knowing the most up to-date information. 
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    export default About;