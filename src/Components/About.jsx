import React, { Component } from "react";
import { Card, Container, Col, Row, Button, Image } from "react-bootstrap";

class About extends Component {
  state = {};
  render() {
    return (
      <Container>
        <h1 align="Center">About Us</h1>
        <hr />
        <Container>
          {/* <Card> */}
          <Row>
            <Col>
              <img src="/eMart.png" />
            </Col>
            <Col>
              <h1>Lunched in March 2021</h1>
            </Col>
          </Row>
          {/* </Card> */}
          <br />
          <Row>
            <Col>
              <h3>We're Trusted</h3>
              <h5>
                Customer believes in eMart. We work to make shopping easy.
              </h5>
            </Col>
            <Col>
              <h3>We're Professional</h3>
              <h5>We are working Professionally in this field since 24/7.</h5>
            </Col>
            <Col>
              <h3>We're Expert</h3>
              <h5>We are export in providing best deal for our customers.</h5>
            </Col>
          </Row>
          <br />
          <Row>
            <Row>
              <h1>Meet Our Team</h1>
            </Row>
            <Row>
              <Col>
                <Card style={{ width: "14rem" }}>
                  <Card.Img
                    variant="top"
                    src="/Images/About/bibek.png"
                    width="200"
                    style={{ paddingBottom: 25 }}
                  />
                  <Card.Body>
                    <h5>Bibek Kumar Sah</h5>
                    <hr />
                    <h6>Frontend Developer</h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "14rem" }}>
                  <Card.Img
                    variant="top"
                    src="/Images/About/bipin.jpg"
                    width="200"
                    style={{ paddingBottom: 25 }}
                  />
                  <Card.Body>
                    <h5>Bipin Singh</h5>
                    <hr />
                    <h6>Backend Developer</h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "14rem" }}>
                  <Card.Img
                    variant="top"
                    src="/Images/About/pranav.jpeg"
                    width="200"
                    style={{ paddingBottom: 25 }}
                  />
                  <Card.Body>
                    <h5>Pranav Sharma</h5>
                    <hr />
                    <h6>UI/UX Designer</h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "14rem" }}>
                  <Card.Img
                    variant="top"
                    src="/Images/About/shubham.jpeg"
                    width="200"
                    style={{ paddingBottom: 25 }}
                  />
                  <Card.Body>
                    <h5>Shubham Sharma</h5>
                    <hr />
                    <h6>Documentation</h6>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>
          <br />
        </Container>
      </Container>
    );
  }
}

export default About;
