import React, { Component } from "react";
import { Triple } from "react-preloading-component";

import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

import dummyData from "../../dummy-data";

export default class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false
    };
  }

  getPostsData = () => {
    return JSON.parse(localStorage.getItem("posts"));
  };

  setPostData = data => {
    return localStorage.setItem("posts", JSON.stringify(data));
  };

  componentDidMount() {
    if (localStorage.getItem("posts") === null) {
      localStorage.setItem("posts", JSON.stringify(dummyData));
    }
    this.setState({ data: this.getPostsData(), loading: false });
  }

  handleLike = index => {
    let { data } = this.state;
    if (data[index].isLiked === false || data[index].isLiked === undefined) {
      data[index].likes++;
      data[index].isLiked = true;
      this.setPostData(data);
      return this.setState({ data });
    }

    if (data[index].isLiked === true) {
      data[index].likes--;
      data[index].isLiked = false;
      this.setPostData(data);
      return this.setState({ data });
    }
  };

  handleClick = (e, index) => {
    if (e.key === "Enter") {
      let newComment = {
        username: localStorage.getItem("token") || "anonymous",
        text: e.target.value
      };
      let { data } = this.state;
      data[index].comments = data[index].comments.concat(newComment);
      this.setPostData(data);
      this.setState({ data });
    }
  };

  handleSearch = e => {
    this.setState({ data: this.getPostsData(), loading: true });
    let searchData = e.target.value;

    setTimeout(() => {
      if (searchData.length > 0) {
        let newData = this.state.data.filter(post => {
          if (post.username.includes(searchData)) {
            return post;
          }
          return null;
        });
        this.setState({ data: newData, loading: false });
      }
      this.setState({ loading: false });
    }, 100);
  };

  render() {
    let data = (
      <div className="preloader">
        <Triple color="#a7a9ac" size={80} />
      </div>
    );

    if (this.state.data.length > 0) {
      data = (
        <div>
          {this.state.data.map((data, i) => {
            return (
              <PostContainer
                key={data.username}
                data={data}
                handleLike={this.handleLike}
                index={i}
                setPostData={this.setPostData}
                handleClick={this.handleClick}
              />
            );
          })}
        </div>
      );
    }

    if (this.state.data.length === 0) {
      data = (
        <div className="preloader">
          <p>No Post Found</p>
        </div>
      );
    }

    if (this.state.loading) {
      data = (
        <div className="preloader">
          <Triple color="#a7a9ac" size={80} />
        </div>
      );
    }

    return (
      <>
        <SearchBar handleSearch={this.handleSearch} />
        {data}
      </>
    );
  }
}
