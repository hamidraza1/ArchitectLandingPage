import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class slider extends Component {
  render() {
    return (
      <Carousel style={{ position: "absolute" }}>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCp1bZdGieJahKnTjowaOsfN9WdpjEIZzHeA&usqp=CAU"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCp1bZdGieJahKnTjowaOsfN9WdpjEIZzHeA&usqp=CAU"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCp1bZdGieJahKnTjowaOsfN9WdpjEIZzHeA&usqp=CAU"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default slider;
