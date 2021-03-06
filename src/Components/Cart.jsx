import React, { Component } from "react";
import { Card, Container, Col, Row, Button } from "react-bootstrap";
import { Router } from "react-router";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div style={{ backgroundColor: "whitesmoke" }}>
        <h1 align="center">My Cart</h1>
        <Container fluid>
          <Row>
            <Col style={{ paddingLeft: "2%" }}>
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
                <hr color="black" />
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
                      <h5>Name: Laptop</h5>
                      <h6>Brand: ASUS</h6>
                      <h6>
                        Qty: &nbsp;
                        <select name="Qty">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                        </select>
                      </h6>
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
                      <br></br>
                      <a href="#view">View Item</a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="#delete">Delete Item</a>
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
                      <h6>
                        Qty: &nbsp;
                        <select name="Qty">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                        </select>
                      </h6>
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
                      <br></br>
                      <a href="#view">View Item</a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="#delete">Delete Item</a>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col xs={3} style={{ paddingRight: "2%" }}>
              <Container
                style={{
                  marginLeft: "0.5%",
                  backgroundColor: "Wheat",
                }}
              >
                <Card.Body>
                  <h3 align="center">Price Details</h3>
                  <hr color="black" />
                  <Row>
                    <Col align="Left">
                      <p> Price of Items</p>
                      <p> Discounts</p>
                      <p> Delivery Charges</p>
                    </Col>
                    <Col align="Right">
                      <p>₹ 3,50,000/-</p>
                      <p style={{ color: "Green" }}>- ₹ 32,000/-</p>
                      <p style={{ color: "Green" }}>Free &nbsp;&nbsp;</p>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col align="Left">
                      <b>Total Price:</b>
                    </Col>
                    <Col align="Right">
                      <b>₹ 3,10,800/-</b>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <p align="center" style={{ color: "Green" }}>
                      You'll save <b>₹ 32,800/-</b> on this order.
                    </p>
                  </Row>
                </Card.Body>
              </Container>
              <br />
              <Button variant="secondary" size="lg" block>
                Place Order
              </Button>
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    );
  }
}

export default Cart;
