import React, { Component } from "react";
import {Carousel} from "react-bootstrap";

class Sliders extends Component {
  state = {};
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <a href="#s3">
            <img
              className="d-block w-100"
              src="/Images/Slide/slide4.png"
              height="500px"
              alt="Fourth slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="#s1">
            <img
              className="d-block w-100"
              src="/Images/Slide/slide1.jpg"
              alt="First slide"
              height="500px"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="#s2">
            <img
              className="d-block w-100"
              src="/Images/Slide/slide2.jpg"
              height="500px"
              alt="Second slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="#s3">
            <img
              className="d-block w-100"
              src="/Images/Slide/slide3.jpg"
              height="500px"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Sliders;
