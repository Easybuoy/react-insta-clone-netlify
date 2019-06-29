import React, { Component } from "react";

import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";

import { withAuthenticate } from "./components/authentication/WithAuthenticate";
const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

export default class App extends Component {
  render() {
    return (
      <ComponentFromWithAuthenticate exact path="/" component={PostsPage} />
    );
  }
}
