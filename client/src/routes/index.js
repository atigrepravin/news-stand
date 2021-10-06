import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "../components/header/header";
// import Home from "../pages/home/home";
// import Search from "../pages/search/search";
import s from "./routes.module.css";

const Home = React.lazy(() =>
  import(/* webpackChunkName: "home" */ "../pages/home/home")
);
const Search = React.lazy(() =>
  import(/* webpackChunkName: "search" */ "../pages/search/search")
);

const Routes = () => (
  <Router>
    <React.Fragment>
      <Header />
      <div className={s.appContainer}>
        <Suspense fallback={<h2>News are being loaded...</h2>}>
          <Route exact path="/" component={Home} />
          <Route exact={true} path="/Search" component={Search} />
        </Suspense>
      </div>
    </React.Fragment>
  </Router>
);

export default Routes;
