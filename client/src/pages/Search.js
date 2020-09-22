import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import Info from "../components/Info/info";

class Search extends Component {
  state = {
    region: "",
    active_cases: "",
    error: "",
    info: []
  };

  // When the component mounts, get a result of active cases
  componentDidMount() {
    this.loadInfo()
    if (this.state.region) {
      API.getRegion()
        .then(res => this.setState({ region: res.data.data.summary.active_cases }))
        .catch(err => console.log(err));
    }


  }
  loadInfo = () => {
    API.getAll()
      .then(res => this.setState({ info: res.data }))
      .catch(err => console.log(err));
  };

  updateRegion = () => {
    let region = this.state.region;
    console.log(region);

    let regionResults = this.state.info.map((destination) => {
      console.log(region);
      console.log(destination.stateinfo);
      if (region === destination.stateinfo) {
        return (
          <Info key={destination._id}
            stateinfo={destination.stateinfo}
            restrictions={destination.restrictions}
            masks={destination.masks}
            href={destination.href}
          >

          </Info>

        )
      }
    });

    this.setState({ 
      results: regionResults
    })
  }

  handleInputChange = event => {


    this.setState(({ region: event.target.value }), () => console.log(this.state));

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
    API.getAll()
      .then(res => {
        this.setState({ info: res.data })
        this.updateRegion();

        console.log(res.data)
      })



  };


  render() {
    return (
      <div>
        <Hero backgroundImage="https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/26314/4376/heroimage0.747074001507133347.jpg">

          <h1 className="text-center">Enter the State you are traveling to!</h1>

          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            region={this.state.region}
          />

        </Hero>
        <Container style={{ minHeight: "80%" }}>
          <Wrapper>
            <Alert
              type="danger"
              style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
            >
              {this.state.error}
            </Alert>

            <SearchResults active_cases={this.state.active_cases}></SearchResults>

           {this.state.results}
          </Wrapper>
        </Container>
      </div>
    );
  }
}
export default Search;