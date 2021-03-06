import React, { Component } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";

class Order extends Component {
  state = {};
  render() {
    return (
      <div style={{ backgroundColor: "whitesmoke" }}>
        <h1 align="center">My Orders</h1>
        <Container style={{ paddingBottom: "2%" }}>
          <Row
            style={{
              backgroundColor: "White",
              paddingTop: "1%",
              paddingBottom: "1%",
              paddingLeft: "8%",
            }}
            fluid
          >
            <Col xs={2.5}>
              <Card bsPrefix>
                <h3>Image</h3>
              </Card>
            </Col>
            <Col xs={5} style={{ paddingLeft: "5.5%" }}>
              <Card bsPrefix>
                <h3>Product Name</h3>
              </Card>
            </Col>
            <Col xs={2} style={{ paddingLeft: "7%" }}>
              <Card bsPrefix>
                <h3>Price</h3>
              </Card>
            </Col>
            <Col xs={2.5} style={{ paddingLeft: "6.5%" }}>
              <Card bsPrefix>
                <h3>Delivery Details</h3>
              </Card>
            </Col>
          </Row>
          <hr />
          <Row
            style={{
              backgroundColor: "White",
              paddingTop: "2%",
              paddingBottom: "2%",
              paddingLeft: "2%",
              paddingRight: "2%",
            }}
          >
            <Col xs={2.5}>
              <Card bsPrefix height="100px" width="200">
                <img
                  src="/Images/Product/product2.png"
                  alt="product1"
                  height="100px"
                  width="200"
                />
              </Card>
            </Col>
            <Col xs={5}>
              <Card bsPrefix>
                <h5>Laptop</h5>
                <h6>Brand: ASUS</h6>
                <h6>Qty: &nbsp; 1</h6>
              </Card>
            </Col>
            <Col xs={2}>
              <Card bsPrefix>
                <strike style={{ color: "red" }}>₹ 2,50,000/-</strike>
                <h6>₹ 2,30,000/-</h6>
                <h6 style={{ color: "Green" }}>₹ 20,000/- Off</h6>
              </Card>
            </Col>
            <Col xs={2.5}>
              <Card bsPrefix>
                <h6>Date: Mar-12-2020</h6>
                <h6>Day: Thursday</h6>
              </Card>
            </Col>
          </Row>
          <br />
          <Row
            style={{
              backgroundColor: "White",
              paddingTop: "2%",
              paddingBottom: "2%",
              paddingLeft: "2%",
              paddingRight: "2%",
            }}
            fluid
          >
            <Col xs={2.5}>
              <Card bsPrefix height="100px" width="200">
                <img
                  src="/Images/Product/product3.jpg"
                  alt="product1"
                  height="100px"
                  width="200"
                />
              </Card>
            </Col>
            <Col xs={5}>
              <Card bsPrefix>
                <h5>Name: Smart LED</h5>
                <h6>Brand: Samsung</h6>
                <h6>Qty: &nbsp; 1</h6>
              </Card>
            </Col>
            <Col xs={2}>
              <Card bsPrefix>
                <strike style={{ color: "red" }}>₹ 1,00,000/-</strike>
                <h6>₹ 88,000/-</h6>
                <h6 style={{ color: "Green" }}>₹ 12,000/- Off</h6>
              </Card>
            </Col>
            <Col xs={2.5}>
              <Card bsPrefix>
                <h6>Date: Feb-28-2021</h6>
                <h6>Day: Thursday</h6>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Order;
