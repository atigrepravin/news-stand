import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "../components/header/header";
import { Home } from "../pages/home/home";
import Search from "../pages/search/search";

const Routes = () => (
  <Router>
    <React.Fragment>
      <Header />
      <div className="app-container">
        <Route exact path="/" component={Home} />
        <Route exact={true} path="/Search" component={Search} />
      </div>
    </React.Fragment>
  </Router>
)

export default Routes;
