import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidepane from "../components/sidepane/sidepane";
import FilterPole from "../components/filter-pole/filter-pole";
import { Header } from "../components/header/header";
import { Home } from "../pages/home/home";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import Search from "../pages/search/search";

const Routes = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Sidepane />
      <div className="app-container">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact={true} path="/Search" component={Search} />
    </div>
    {/*<FilterPole />*/}
    </React.Fragment>
  </Router>
)

export default Routes;
