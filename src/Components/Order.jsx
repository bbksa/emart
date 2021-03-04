import React, { Component } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";

class Order extends Component{
    state ={};
    render(){
        return(
            <div style={{backgroundColor:"whitesmoke"}}>
                <h1 align="center">My Orders</h1>
            <Container style={{  paddingBottom:"2%"}}>
                <Row style={{backgroundColor:"White", paddingTop:"2%", paddingBottom:"2%", paddingLeft:"2%", paddingRight:"2%"}} fluid> 
                    <Col xs={2.5}>
                        <Card bsPrefix height="100px" width="200">
                            <img src="/eMart.png" alt="product1" height="100px" width="200" />
                        </Card>
                    </Col>
                    <Col xs={5}>
                        <Card bsPrefix>
                            <h3>Product Name</h3>
                            <h6>Logo</h6>
                            <h6>Brand: eMart</h6>
                        </Card>
                    </Col>
                    <Col xs={2}>
                        <Card bsPrefix>
                            <h3>Price</h3>
                            <h6>18,000/-</h6>
                        </Card>
                    </Col>
                    <Col xs={2.5}>
                        <Card bsPrefix>
                        <h3>Delivered Date</h3>
                        <h6>Mar-12-1999</h6>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <Row style={{backgroundColor:"White", paddingTop:"2%", paddingBottom:"2%", paddingLeft:"2%", paddingRight:"2%"}} fluid> 
                    <Col xs={2.5}>
                        <Card bsPrefix height="100px" width="200">
                            <img src="/Images/Product/product2.png" alt="product" height="100px" width="200" />
                        </Card>
                    </Col>
                    <Col xs={5}>
                        <Card bsPrefix>
                            <h3>Product Name</h3>
                            <h6>Laptop</h6>
                            <h6>Brand: ASUS</h6>
                        </Card>
                    </Col>
                    <Col xs={2}>
                        <Card bsPrefix>
                            <h3>Price</h3>
                            <h6>2,50,000/-</h6>
                        </Card>
                    </Col>
                    <Col xs={2.5}>
                        <Card bsPrefix>
                        <h3>Delivered Date</h3>
                        <h6>Mar-12-2020</h6>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <Row style={{backgroundColor:"White", paddingTop:"2%", paddingBottom:"2%", paddingLeft:"2%", paddingRight:"2%"}} fluid> 
                    <Col xs={2.5}>
                        <Card bsPrefix height="100px" width="200">
                            <img src="/Images/Product/product3.jpg" alt="product" height="100px" width="200" />
                        </Card>
                    </Col>
                    <Col xs={5}>
                        <Card bsPrefix>
                            <h3>Product Name</h3>
                            <h6>Smart LED</h6>
                            <h6>Brand: Samsung</h6>
                        </Card>
                    </Col>
                    <Col xs={2}>
                        <Card bsPrefix>
                            <h3>Price</h3>
                            <h6>1,00,000/-</h6>
                        </Card>
                    </Col>
                    <Col xs={2.5}>
                        <Card bsPrefix>
                        <h3>Delivered Date</h3>
                        <h6>Mar-10-2020</h6>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Order;