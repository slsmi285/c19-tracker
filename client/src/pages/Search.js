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

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
        
          <h1 className="text-center">Enter the State you are traveling to!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            region={this.state.region}
          />
         <SearchResults active_cases={this.state.active_cases}></SearchResults>
        </Container>
      </div>
    );
  }
}
export default Search;