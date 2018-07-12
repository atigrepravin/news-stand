import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "../components/header/header";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";

const Routes = () => (
  <Router>
    <React.Fragment>
      <Header />
      <div className="app-container">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </div>
    </React.Fragment>
  </Router>
)

export default Routes;
