import React from "react";
import "./style.css";

import Container from "../Container";
import Row from "../Row";

function InfoState(props) {
  return (
    <Container>
      <Row>
        <Col size="xs-4 sm-3"></Col>
        <Col size="xs-8 sm-9">
          <h3>{state}</h3>
          <h5>{restrictions}</h5>
          <p>{masks}</p>
          <p>{href}</p>
          <button className="btn">
            <a id="btn" rel="noreferrer noopener" target="_blank" href={href}>
              View Info
            </a>
          </button>
          <button className="btn" id="btn" onClick={() => deleteInfostate()}>
            Delete Info
          </button>
        </Col>
      </Row>
    </Container>
  );
}

/*
      <p>State: { props.infostate_state }</p>
       <p>Restrictions: { props.infostate_restrictions }</p>
       <p>Masks ?: { props.infostate_masks }</p>
       <p>Further Info of this State: { props.infostate_href }</p>*/

export default InfoState;
