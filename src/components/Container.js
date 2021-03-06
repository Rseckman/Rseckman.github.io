import React from "react";
import Navigation from "./Nav";
import Portfolio from "../pages/portfolio";
import About from "../pages/about";
import Contact from "../pages/contact";
import { HashRouter as Router, Route } from "react-router-dom";
import Footer from "./Footer"


function Container() {
    return (
      <Router>
        <div>
          <Navigation />
          <div>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </div>
          <br />
          <br />
          <Footer />
        </div>
      </Router>
    );
  }

export default Container;
