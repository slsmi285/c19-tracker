import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./pages/About";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import Information from "./pages/Information";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
 
    return (
      < Router >
        < div className="App" >
        
            <Navbar />
            <Wrapper>

              <Route exact path="/" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/information" components={Information} />


            </Wrapper>
            <Footer />
        
        </div >
      </Router >
    );
  }


export default App;
