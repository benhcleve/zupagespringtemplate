import React, { Component } from "react";
import zupage from "zupage";
import BlogCarousel from "./components/Carousel";
import "./App.css";
import bubbles from "./templatebubbles.png";

export default class App extends Component {
  state = {
    post: {}
  };

  async componentDidMount() {
    const response = await zupage.getCurrentPost();

    this.setState({
      post: response
    });

    console.log("state props... \n", this.state);
  }

  render() {
    return (
      <div className="body">
        <h1 className="container">{this.state.post.title}</h1>

        <div className="carousel">
          <BlogCarousel images={this.state.post.images || []} />
        </div>

        <br />
        <div className="container postbody">
          <p>{this.state.post.body}</p>
        </div>
        <img className="footer" src={bubbles} alt="grass" />
      </div>
    );
  }
}
