import React, { Component } from "react";

export const withAuthenticate = PostsPage => Login => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      let token = localStorage.getItem("token");
      return this.setState({ loggedIn: token !== null });
    }

    render() {
      if (this.state.loggedIn === true) {
        return <PostsPage {...this.props} />;
      } else {
        return <Login />;
      }
    }
  };
};
