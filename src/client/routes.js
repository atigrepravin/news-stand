import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)

export default Routes;
