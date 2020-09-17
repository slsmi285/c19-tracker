import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";



function Information() {
    return (
        <div>
          <Hero backgroundImage="https://splashanddashfordogs.com/wp-content/uploads/2016/07/july-4b-720x321.jpg">
            <h1>C19 Tracker</h1>
            <h2>Get the latest information on covid-19 levels for your destination area.</h2>
          </Hero>
          <Container style={{ marginTop: 40 }}>
            <Row>
              <Col size="md-12">
                <h1>Allergies or Covid-19 ?</h1>
                
                
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    export default Information;