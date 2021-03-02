import React, { Component } from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";

class ItemOnHome extends Component {
  state = {};
  render() {
    return (
      <div style={{backgroundColor:"whitesmoke"}}>
        <br/>
        <h2 align={"center"}>Today's Deals</h2>

        <hr/>
        <Container style={{backgroundColor:"whitesmoke"}}>
          <Row>
            <Col xs>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="/Images/Product/product1.png"
                  height="250"
                />
                <Card.Body>
                  <Card.Title align={"center"}>iPhone 12 Pro Max</Card.Title>
                  <Card.Text align={"center"}>
                    <b>₹ 1,39,999 </b>{" "}
                    <strike style={{ color: "red" }}>₹ 1,59,999</strike>{" "}
                    <b style={{ color: "green" }}>12% off</b>
                  </Card.Text>
                  <Button variant="primary">Buy Now</Button>
                  <Button variant="primary" style={{ float: "right" }}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={{ order: 1 }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="/Images/Product/product2.png"
                  height="250"
                  style={{paddingBottom:30,paddingTop:30}}
                />
                <Card.Body>
                  <Card.Title align={"center"}>Microsoft Surface Book 3</Card.Title>
                  <Card.Text align={"center"}>
                    <b>₹ 1,24,999 </b>{" "}
                    <strike style={{ color: "red" }}>₹ 2,49,999</strike>{" "}
                    <b style={{ color: "green" }}>50% off</b>
                  </Card.Text>
                  <Button variant="primary">Buy Now</Button>
                  <Button variant="primary" style={{ float: "right" }}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={{ order: 12 }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="/Images/Product/product3.jpg"
                  height="250"
                  style={{paddingBottom:25,paddingTop:25}}
                />
                <Card.Body>
                  <Card.Title align={"center"}>Samsung Full HD Smart TV</Card.Title>
                  <Card.Text align={"center"}>
                    <b>₹ 39,900 </b>{" "}
                    <strike style={{ color: "red" }}>₹ 49,999</strike>{" "}
                    <b style={{ color: "green" }}>20% off</b>
                  </Card.Text>
                  <Button variant="primary">Buy Now</Button>
                  <Button variant="primary" style={{ float: "right" }}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <br></br>
      </div>
    );
  }
}

export default ItemOnHome;
