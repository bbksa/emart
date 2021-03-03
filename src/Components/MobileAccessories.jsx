import React, { Component } from "react";
import {Carousel} from "react-bootstrap";
import { Container, Row, Card, Col, Button } from "react-bootstrap";


class MobileAccessories extends Component {
  state = {};
  render() {
    return (
      <div style={{backgroundColor:"whitesmoke"}}>
        <h1 align="center">Mobile &amp; Accessories</h1>
        <Carousel>
            <Carousel.Item>
                <a href="#s3">
                    <img
                    className="d-block w-100"
                    src="/Images/Slide/Ms1.jpg"
                    height="300px"
                    alt="Fourth slide"
                    />
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="#s1">
                    <img
                    className="d-block w-100"
                    src="/Images/Slide/Ms2.png"
                    alt="First slide"
                    height="300px"
                    />
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="#s2">
                    <img
                    className="d-block w-100"
                    src="/Images/Slide/Ms3.jpg"
                    height="300px"
                    alt="Second slide"
                    />
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="#s3">
                    <img
                    className="d-block w-100"
                    src="/Images/Slide/Ms4.png"
                    height="300px"
                    alt="Third slide"
                    />
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="#s2">
                    <img
                    className="d-block w-100"
                    src="/Images/Slide/Ms5.png"
                    height="300px"
                    alt="Second slide"
                    />
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="#s3">
                    <img
                    className="d-block w-100"
                    src="/Images/Slide/slide1.jpg"
                    height="300px"
                    alt="Third slide"
                    />
                </a>
            </Carousel.Item>
        </Carousel>

        <hr/>
        <h6 inline align="center"><b>Sort By:</b> &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#sort" style={{textDecoration:"none"}}>Price - Low to High</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#sort" style={{textDecoration:"none"}}>Price - High to Low</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#sort" style={{textDecoration:"none"}}>New Product</a>
        </h6>
        <hr/>

        <Container fluid>
            <Row>
                <Col>
                    <Container>
                        <div style={{backgroundColor:"red"}}>
                            Hello
                        </div>
                    </Container>
                </Col>
                
                <Col>
                    <Container style={{backgroundColor:"whitesmoke"}}>
                        <Row>
                            <Col>
                                <Card style={{ width: "18rem"}}>
                                    <Carousel variant="top" controls={false}>
                                        <Carousel.Item>
                                            <a href="#s3">
                                                <img className="d-block w-100" src="/Images/Slide/Ms1.jpg" height="250px" alt="Fourth slide"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s1">
                                                <img className="d-block w-100" src="/Images/Slide/Ms2.png" alt="First slide" height="250px"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s2">
                                                <img className="d-block w-100" src="/Images/Slide/Ms3.jpg" height="250px" alt="Second slide"/>
                                            </a>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Card.Body>
                                        <Card.Title align={"center"}>Samsung Level U2</Card.Title>
                                        <Card.Text align={"center"}>
                                            <b>₹ 18,99</b> &nbsp;&nbsp;
                                            <strike style={{ color: "red" }}>₹ 24,99</strike>&nbsp;&nbsp;
                                            <b style={{ color: "green" }}>12% off</b>
                                        </Card.Text>
                                        <Button variant="primary">Buy Now</Button>
                                        <Button variant="primary" style={{ float: "right" }}>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: "18rem" }}>
                                    <Carousel variant="top" controls={false}>
                                        <Carousel.Item>
                                            <a href="#s3">
                                                <img className="d-block w-100" src="/Images/Slide/Ms1.jpg" height="250px" alt="Fourth slide"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s1">
                                                <img className="d-block w-100" src="/Images/Slide/Ms2.png" alt="First slide" height="250px"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s2">
                                                <img className="d-block w-100" src="/Images/Slide/Ms3.jpg" height="250px" alt="Second slide"/>
                                            </a>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Card.Body>
                                        <Card.Title align={"center"}>Samsung Galaxy Fold 2</Card.Title>
                                        <Card.Text align={"center"}>
                                            <b>₹ 1,49,999</b>&nbsp;&nbsp;
                                            <strike style={{ color: "red" }}>₹ 1,89,999</strike>&nbsp;&nbsp;
                                            <b style={{ color: "green" }}>50% off</b>
                                        </Card.Text>
                                        <Button variant="primary">Buy Now</Button>
                                        <Button variant="primary" style={{ float: "right" }}>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: "18rem" }}>
                                    <Carousel variant="top" controls={false}>
                                        <Carousel.Item>
                                            <a href="#s3">
                                                <img className="d-block w-100" src="/Images/Slide/Ms1.jpg" height="250px" alt="Fourth slide"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s1">
                                                <img className="d-block w-100" src="/Images/Slide/Ms2.png" alt="First slide" height="250px"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s2">
                                                <img className="d-block w-100" src="/Images/Slide/Ms3.jpg" height="250px" alt="Second slide"/>
                                            </a>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Card.Body>
                                        <Card.Title align={"center"}>Apple Watch Series 6</Card.Title>
                                        <Card.Text align={"center"}>
                                            <b>₹ 39,900</b>&nbsp;&nbsp;
                                            <strike style={{ color: "red" }}>₹ 49,999</strike>&nbsp;&nbsp;
                                            <b style={{ color: "green" }}>20% off</b>
                                        </Card.Text>
                                        <Button variant="primary">Buy Now</Button>
                                        <Button variant="primary" style={{ float: "right" }}>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                                <br/>
                        <Row>
                            <Col>
                                <Card style={{ width: "18rem"}}>
                                    <Carousel variant="top" controls={false}>
                                        <Carousel.Item>
                                            <a href="#s3">
                                                <img className="d-block w-100" src="/Images/Slide/Ms1.jpg" height="250px" alt="Fourth slide"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s1">
                                                <img className="d-block w-100" src="/Images/Slide/Ms2.png" alt="First slide" height="250px"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s2">
                                                <img className="d-block w-100" src="/Images/Slide/Ms3.jpg" height="250px" alt="Second slide"/>
                                            </a>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Card.Body>
                                        <Card.Title align={"center"}>iPhone 12 Pro Max</Card.Title>
                                        <Card.Text align={"center"}>
                                            <b>₹ 1,39,999</b> &nbsp;&nbsp;
                                            <strike style={{ color: "red" }}>₹ 1,59,999</strike>&nbsp;&nbsp;
                                            <b style={{ color: "green" }}>12% off</b>
                                        </Card.Text>
                                        <Button variant="primary">Buy Now</Button>
                                        <Button variant="primary" style={{ float: "right" }}>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: "18rem" }}>
                                    <Carousel variant="top" controls={false}>
                                        <Carousel.Item>
                                            <a href="#s3">
                                                <img className="d-block w-100" src="/Images/Slide/Ms1.jpg" height="250px" alt="Fourth slide"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s1">
                                                <img className="d-block w-100" src="/Images/Slide/Ms2.png" alt="First slide" height="250px"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s2">
                                                <img className="d-block w-100" src="/Images/Slide/Ms3.jpg" height="250px" alt="Second slide"/>
                                            </a>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Card.Body>
                                        <Card.Title align={"center"}>Galaxy Note 20 Ultra</Card.Title>
                                        <Card.Text align={"center"}>
                                            <b>₹ 1,24,999</b>&nbsp;&nbsp;
                                            <strike style={{ color: "red" }}>₹ 2,49,999</strike>&nbsp;&nbsp;
                                            <b style={{ color: "green" }}>50% off</b>
                                        </Card.Text>
                                        <Button variant="primary">Buy Now</Button>
                                        <Button variant="primary" style={{ float: "right" }}>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: "18rem" }}>
                                    <Carousel variant="top" controls={false}>
                                        <Carousel.Item>
                                            <a href="#s3">
                                                <img className="d-block w-100" src="/Images/Slide/Ms1.jpg" height="250px" alt="Fourth slide"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s1">
                                                <img className="d-block w-100" src="/Images/Slide/Ms2.png" alt="First slide" height="250px"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s2">
                                                <img className="d-block w-100" src="/Images/Slide/Ms3.jpg" height="250px" alt="Second slide"/>
                                            </a>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Card.Body>
                                        <Card.Title align={"center"}>Samsung Full HD Smart TV</Card.Title>
                                        <Card.Text align={"center"}>
                                            <b>₹ 39,900</b>&nbsp;&nbsp;
                                            <strike style={{ color: "red" }}>₹ 49,999</strike>&nbsp;&nbsp;
                                            <b style={{ color: "green" }}>20% off</b>
                                        </Card.Text>
                                        <Button variant="primary">Buy Now</Button>
                                        <Button variant="primary" style={{ float: "right" }}>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                            <br/>
                        <Row>
                            <Col>
                                <Card style={{ width: "18rem"}}>
                                    <Carousel variant="top" controls={false}>
                                        <Carousel.Item>
                                            <a href="#s3">
                                                <img className="d-block w-100" src="/Images/Slide/Ms1.jpg" height="250px" alt="Fourth slide"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s1">
                                                <img className="d-block w-100" src="/Images/Slide/Ms2.png" alt="First slide" height="250px"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s2">
                                                <img className="d-block w-100" src="/Images/Slide/Ms3.jpg" height="250px" alt="Second slide"/>
                                            </a>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Card.Body>
                                        <Card.Title align={"center"}>iPhone 12 Pro Max</Card.Title>
                                        <Card.Text align={"center"}>
                                            <b>₹ 1,39,999</b> &nbsp;&nbsp;
                                            <strike style={{ color: "red" }}>₹ 1,59,999</strike>&nbsp;&nbsp;
                                            <b style={{ color: "green" }}>12% off</b>
                                        </Card.Text>
                                        <Button variant="primary">Buy Now</Button>
                                        <Button variant="primary" style={{ float: "right" }}>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: "18rem" }}>
                                    <Carousel variant="top" controls={false}>
                                        <Carousel.Item>
                                            <a href="#s3">
                                                <img className="d-block w-100" src="/Images/Slide/Ms1.jpg" height="250px" alt="Fourth slide"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s1">
                                                <img className="d-block w-100" src="/Images/Slide/Ms2.png" alt="First slide" height="250px"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s2">
                                                <img className="d-block w-100" src="/Images/Slide/Ms3.jpg" height="250px" alt="Second slide"/>
                                            </a>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Card.Body>
                                        <Card.Title align={"center"}>Microsoft Surface Book 3</Card.Title>
                                        <Card.Text align={"center"}>
                                            <b>₹ 1,24,999</b>&nbsp;&nbsp;
                                            <strike style={{ color: "red" }}>₹ 2,49,999</strike>&nbsp;&nbsp;
                                            <b style={{ color: "green" }}>50% off</b>
                                        </Card.Text>
                                        <Button variant="primary">Buy Now</Button>
                                        <Button variant="primary" style={{ float: "right" }}>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: "18rem" }}>
                                    <Carousel variant="top" controls={false}>
                                        <Carousel.Item>
                                            <a href="#s3">
                                                <img className="d-block w-100" src="/Images/Slide/Ms1.jpg" height="250px" alt="Fourth slide"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s1">
                                                <img className="d-block w-100" src="/Images/Slide/Ms2.png" alt="First slide" height="250px"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s2">
                                                <img className="d-block w-100" src="/Images/Slide/Ms3.jpg" height="250px" alt="Second slide"/>
                                            </a>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Card.Body>
                                        <Card.Title align={"center"}>Samsung Full HD Smart TV</Card.Title>
                                        <Card.Text align={"center"}>
                                            <b>₹ 39,900</b>&nbsp;&nbsp;
                                            <strike style={{ color: "red" }}>₹ 49,999</strike>&nbsp;&nbsp;
                                            <b style={{ color: "green" }}>20% off</b>
                                        </Card.Text>
                                        <Button variant="primary">Buy Now</Button>
                                        <Button variant="primary" style={{ float: "right" }}>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                            <br/>
                        <Row>
                            <Col>
                                <Card style={{ width: "18rem"}}>
                                    <Carousel variant="top" controls={false}>
                                        <Carousel.Item>
                                            <a href="#s3">
                                                <img className="d-block w-100" src="/Images/Slide/Ms1.jpg" height="250px" alt="Fourth slide"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s1">
                                                <img className="d-block w-100" src="/Images/Slide/Ms2.png" alt="First slide" height="250px"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s2">
                                                <img className="d-block w-100" src="/Images/Slide/Ms3.jpg" height="250px" alt="Second slide"/>
                                            </a>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Card.Body>
                                        <Card.Title align={"center"}>iPhone 12 Pro Max</Card.Title>
                                        <Card.Text align={"center"}>
                                            <b>₹ 1,39,999</b> &nbsp;&nbsp;
                                            <strike style={{ color: "red" }}>₹ 1,59,999</strike>&nbsp;&nbsp;
                                            <b style={{ color: "green" }}>12% off</b>
                                        </Card.Text>
                                        <Button variant="primary">Buy Now</Button>
                                        <Button variant="primary" style={{ float: "right" }}>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: "18rem" }}>
                                    <Carousel variant="top" controls={false}>
                                        <Carousel.Item>
                                            <a href="#s3">
                                                <img className="d-block w-100" src="/Images/Slide/Ms1.jpg" height="250px" alt="Fourth slide"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s1">
                                                <img className="d-block w-100" src="/Images/Slide/Ms2.png" alt="First slide" height="250px"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s2">
                                                <img className="d-block w-100" src="/Images/Slide/Ms3.jpg" height="250px" alt="Second slide"/>
                                            </a>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Card.Body>
                                        <Card.Title align={"center"}>Microsoft Surface Book 3</Card.Title>
                                        <Card.Text align={"center"}>
                                            <b>₹ 1,24,999</b>&nbsp;&nbsp;
                                            <strike style={{ color: "red" }}>₹ 2,49,999</strike>&nbsp;&nbsp;
                                            <b style={{ color: "green" }}>50% off</b>
                                        </Card.Text>
                                        <Button variant="primary">Buy Now</Button>
                                        <Button variant="primary" style={{ float: "right" }}>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: "18rem" }}>
                                    <Carousel variant="top" controls={false}>
                                        <Carousel.Item>
                                            <a href="#s3">
                                                <img className="d-block w-100" src="/Images/Slide/Ms1.jpg" height="250px" alt="Fourth slide"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s1">
                                                <img className="d-block w-100" src="/Images/Slide/Ms2.png" alt="First slide" height="250px"/>
                                            </a>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <a href="#s2">
                                                <img className="d-block w-100" src="/Images/Slide/Ms3.jpg" height="250px" alt="Second slide"/>
                                            </a>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Card.Body>
                                        <Card.Title align={"center"}>Samsung Full HD Smart TV</Card.Title>
                                        <Card.Text align={"center"}>
                                            <b>₹ 39,900</b>&nbsp;&nbsp;
                                            <strike style={{ color: "red" }}>₹ 49,999</strike>&nbsp;&nbsp;
                                            <b style={{ color: "green" }}>20% off</b>
                                        </Card.Text>
                                        <Button variant="primary">Buy Now</Button>
                                        <Button variant="primary" style={{ float: "right" }}>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
        <br/>
      </div>
    );
  }
}

export default MobileAccessories;
