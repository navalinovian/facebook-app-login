import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Other from "../pages/Other";
import Halaman from "../pages/Halaman";
import Sukai from "../pages/Sukai";

export default class routes extends Component {
  // componentDidMount() {
  //   const script = document.createElement("script");

  //   script.src = "./script/fbScript.js";
  //   script.async = true;

  //   document.body.appendChild(script);
  // }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/home" component={Home}>
              <Home />
            </Route>
            <Route path="/other" component={Other}>
              <Other />
            </Route>
            <Route exact path="/halaman" component={Halaman}>
              <Halaman />
            </Route>
            <Route exact path="/sukai" component={Sukai}>
              <Sukai />
            </Route>
            <Route exact path="/" component={Login}>
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
