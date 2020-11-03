import React from "react";
import Navigation from "./Nav";
import Portfolio from "../pages/portfolio";
import About from "../pages/about";
import Contact from "../pages/contact";
import { BrowserRouter as Router, Route } from "react-router-dom";


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
        </div>
      </Router>
    );
  }

export default Container;
