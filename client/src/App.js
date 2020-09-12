import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import About from "./pages/About";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Mandates from "./components/Travel";

function App() {
  return (
    < Router >
      < div className="App" >
        <div>
          <Navbar />
          <Wrapper>

            <Route exact path="/" component={About} />

            <Route exact path="/about" component={About} />
            <Route exact path="/signin" components={SignIn} />
            <Route exact path="/search" component={Search} />

            <Route exact path="/Mandates" components={Mandates} />
          </Wrapper>
          <Footer />
        </div>
      </div >
    </Router >
  );
}

export default App;
