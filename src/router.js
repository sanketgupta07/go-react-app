import React from "react"
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router";
import AboutUs from "./component/about/aboutus";
import AppNav from "./component/nav/nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardApp from "./component/card/cardapp";
import Home from "./component/home/home";
import "./App.css"
import AppFooter from "./footer";

function AppRouter(params) {
    const browserHistory = createBrowserHistory();
    return (
        <>
        <Router history={browserHistory}>
      <div>
      <AppNav/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/card-app">
            <CardApp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    <AppFooter/>
    </>
    );
}

export default AppRouter;