import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import infostate from "../../../models";

const db = require(models);



class Saved extends Component {
  state = {
    infostate: [
        {
            state: "",
            restrictions: "",
            masks: "",
            href: ""
        }
    ],
  };
  componentDidMount() {
    this.loadInfostate();
  }
  loadInfostate = () => {
    db.getInfostate()
      .then(res =>
        this.setState({ infostate: res.data })
      )
      .catch(err => console.log(err));
  };
  deleteInfostate = id => {
    db.deleteInfostate(id)
      .then(res => this.loadinfostate())
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
      <Hero>
      <h1>States On My List</h1>
    </Hero>
    <Container style={{ minHeight: "80%" }}>
   
      </Container>
      </div>
    );
  }
}
export default Saved;