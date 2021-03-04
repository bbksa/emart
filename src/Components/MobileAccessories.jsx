import React, { Component } from "react";
import {Carousel} from "react-bootstrap";
import { Container, Row, Card, Col, Button, Form, Dropdown, Pagination } from "react-bootstrap";

class MobileAccessories extends Component {
  state = {};
  render() {
    return (
      <div style={{backgroundColor:"whitesmoke"}}>
        <h1 align="center">Mobile &amp; Accessories</h1>
        <Carousel>
            <Carousel.Item>
                <a href="#s3">
                    <img className="d-block w-100" src="/Images/Slide/Ms1.jpg" height="300px" alt="Fourth slide"/>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="#s1">
                    <img className="d-block w-100" src="/Images/Slide/Ms2.png" alt="First slide" height="300px"/>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="#s3">
                    <img className="d-block w-100" src="/Images/Slide/Ms4.png" height="300px" alt="Third slide"/>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="#s3">
                    <img className="d-block w-100" src="/Images/Slide/slide1.jpg" height="300px" alt="Third slide"/>
                </a>
            </Carousel.Item>
        </Carousel>
        
        <br/>

        <Container fluid>
            <Row>
                <Col xs={2.5} >
                    <Container style={{marginLeft: "10%", backgroundColor: "white", height:"100%", width:"100%"}} >
                        <Card.Body>
                            <h6 align={"center"}><b>Filters</b><hr color="black"/></h6>
                            <Card.Text>
                                    <Form>
                                        <Form.Group controlId="formBasicRange">
                                            <b>Price</b>
                                            <Form.Control type="range" />
                                            <Dropdown inline>
                                                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">Min</Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">500</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">1000</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">1500</Dropdown.Item>
                                                </Dropdown.Menu>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; to &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">Max</Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">1000</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">5000</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">10000</Dropdown.Item>
                                                    </Dropdown.Menu>
                                            </Dropdown>
                                                
                                        </Form.Group>
                                    </Form>
                                    <hr color="black"/>

                                    <Form.Group id="formGridCheckbox">
                                    <b>Brand</b>
                                        <Form.Check type="checkbox" label="Samsung"/>
                                        <Form.Check type="checkbox" label="Apple"/>
                                        <Form.Check type="checkbox" label="Google"/>
                                        <Form.Check type="checkbox" label="Vivo"/>
                                        <Form.Check type="checkbox" label="One+"/>
                                        <Form.Check type="checkbox" label="Xaumi"/>
                                        <Form.Check type="checkbox" label="Oppo"/>
                                    </Form.Group>
                            </Card.Text>
                            
                        </Card.Body>
                    </Container>
                </Col>
                
                <Col xs={9.8}>
                    <Container style={{ marginLeft: "5%", backgroundColor:"whitesmoke" }}>
                        <Row style={{backgroundColor:"white", paddingTop:"2%", paddingBottom:"2%", paddingLeft:"2.5%"}}>
                            <h6 inline style={{ paddingLeft:"25%"}}><b>Sort By:</b> &nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="#sort" style={{textDecoration:"none", color:"Black"}}>Price - Low to High</a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="#sort" style={{textDecoration:"none", color:"Black"}}>Price - High to Low</a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="#sort" style={{textDecoration:"none", color:"Black"}}>New Product</a>
                                <hr color="black"/>
                            </h6>
                            <Col style={{ paddingBottom:"2%"}}>
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
                                                <img className="d-block w-100" src="/Images/Slide/Ms4.png" height="250px" alt="Second slide"/>
                                            </a>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Card.Body>
                                        <Card.Title align={"center"}>Samsung Level U2</Card.Title>
                                        <Card.Text align={"center"}>
                                            <b>₹ 1,899</b> &nbsp;&nbsp;
                                            <strike style={{ color: "red" }}>₹ 2,499</strike>&nbsp;&nbsp;
                                            <b style={{ color: "green" }}>12% off</b>
                                        </Card.Text>
                                        <Button variant="primary">Buy Now</Button>
                                        <Button variant="primary" style={{ float: "right" }}>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col style={{ paddingBottom:"2%"}}>
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
                                                <img className="d-block w-100" src="/Images/Slide/Ms4.png" height="250px" alt="Second slide"/>
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
                            <Col style={{ paddingBottom:"2%"}}>
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
                                                <img className="d-block w-100" src="/Images/Slide/Ms4.png" height="250px" alt="Second slide"/>
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
                            <Col style={{ paddingBottom:"2%"}}>
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
                                                <img className="d-block w-100" src="/Images/Slide/Ms4.png" height="250px" alt="Second slide"/>
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
                            <Col style={{ paddingBottom:"2%"}}>
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
                                                <img className="d-block w-100" src="/Images/Slide/Ms4.png" height="250px" alt="Second slide"/>
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
                            <Col style={{ paddingBottom:"2%"}}>
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
                                                <img className="d-block w-100" src="/Images/Slide/Ms4.png" height="250px" alt="Second slide"/>
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
                            <Col style={{ paddingBottom:"2%"}}>
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
                                                <img className="d-block w-100" src="/Images/Slide/Ms4.png" height="250px" alt="Second slide"/>
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
                            <Col style={{ paddingBottom:"2%"}}>
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
                                                <img className="d-block w-100" src="/Images/Slide/Ms4.png" height="250px" alt="Second slide"/>
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
                            <Col style={{ paddingBottom:"2%"}}>
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
                                                <img className="d-block w-100" src="/Images/Slide/Ms4.png" height="250px" alt="Second slide"/>
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
                            <Col style={{ paddingBottom:"2%"}}>
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
                                                <img className="d-block w-100" src="/Images/Slide/Ms4.png" height="250px" alt="Second slide"/>
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
                            <Col style={{ paddingBottom:"2%"}}>
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
                                                <img className="d-block w-100" src="/Images/Slide/Ms4.png" height="250px" alt="Second slide"/>
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
                            <Col style={{ paddingBottom:"2%"}}>
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
                                                <img className="d-block w-100" src="/Images/Slide/Ms4.png" height="250px" alt="Second slide"/>
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
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
      </div>
    );
  }
}

export default MobileAccessories;
