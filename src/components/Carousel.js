import React from "react";
import { Carousel } from "react-bootstrap";
import "../App.css";

export const BlogCarousel = props => (
  <Carousel>
    {props.images.map(image => (
      <Carousel.Item key={image.id}>
        <img className="carousel" src={image.url} alt="Loading..." />
      </Carousel.Item>
    ))}
  </Carousel>
);

export default BlogCarousel;
