import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Row from "../components/Row";
import Col from "../components/Col";


function Information() {
  return (
    <div>
      <Hero id="bpimage" backgroundImage="https://i.imgur.com/P3oqALW.jpeg">

        <h2 className="best-text-heder">Best Practices:</h2>
        <h5 className="best-practice"><ol>
          <li>Avoid close contact. </li>
          <li>Keep a distance of 6 feet or more.</li>
          <li>Wash your hands often:
                <p>a. Avoid touching your face before washing your hands.</p>
            <p>b. Avoid touching your your loved ones before washing your hands.</p>
          </li>
          <li>Cover your mouth and nose with a mask when around others.</li>
          <li>Cover coughs and sneezes.</li>
          <li>Mask should be cleaned after each use, if not disposable mask.</li>

        </ol>
        </h5>

      </Hero>


      <Container style={{ marginTop: 40 }}>
        <Wrapper>
          <Row>
            <Col size="md-12">

              <h1>Allergies or Covid-19??</h1>
              <h2>Symptoms of Covid-19:</h2>
              <p>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
              <h4>Most Common:</h4>
              {/* <h5 className="best-practice"></h5> */}
              <ul>
                <li>Fever, dry cough, and or tiredness</li>
              </ul>
              <h4>Less Common Symptoms</h4>
              <ul>
                <li>Aches and pains, sore throat, diarrhea, conjunctivitis, headache, loss of taste or smell, and/or a rash on skin or discoloration of fingers and toes.</li>
              </ul>
              <h4>Serious Symptoms</h4>
              <ul>
                <li>Difficulty breathing or shortness of breath, chest pain or pressure, and or loss of speech of movement.</li>

              </ul>
              <h4>What Should You Do?</h4>
              <ul>
                <li>Cover your mouth and nose with a mask when around others.</li>
                <li>Seek immediate medical attention if you have <strong>serious symptoms</strong>.  Always call before visiting your doctor or health facility.</li>
                <li>Know this: On average it takes 5-6 days from when someone is infected with the virus for symptoms to show, however, it can take up to 14 days.</li>
              </ul>
              <p className="google" style={{ fontsize: 4 }}> Information Sources: Google - Coronavirus (COVID-19) symptoms.</p>

            </Col>
          </Row>
        </Wrapper>
      </Container>
    </div>
  );
}
export default Information;