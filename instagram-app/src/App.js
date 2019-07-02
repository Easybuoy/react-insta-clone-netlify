import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";

import { withAuthenticate } from "./components/authentication/WithAuthenticate";
const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/loginuser" component={Login} />
        <ComponentFromWithAuthenticate exact path="/" component={PostsPage} />
      </Router>
    );
  }
}
