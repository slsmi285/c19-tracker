import React, { Component } from "react";
import API from "../components/utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
    state = {
      region: "",
      active_cases: "",
      error: ""
    };

     // When the component mounts, get a result of active cases
  componentDidMount() {
    API.getRegion()
      .then(res => this.setState({ region: res.data.data.summary.active_cases }))
      .catch(err => console.log(err));
  }
  handleInputChange = event => {
    this.setState({ region: event.target.value });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    API.getRegion(this.state.region)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ active_cases: res.data.data.summary.active_cases, error: "" });
        console.log(res.data.data.summary.active_cases)
      })
      .catch(err => this.setState({ error: err.message }));
  };