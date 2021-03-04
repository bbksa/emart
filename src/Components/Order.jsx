import React, { Component } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";

class Order extends Component{
    state ={};
    render(){
        return(
            <div style={{backgroundColor:"whitesmoke"}}>
            <Container style={{ paddingTop:"2%", paddingBottom:"2%"}}>
                <Row style={{backgroundColor:"White", paddingTop:"2%", paddingBottom:"2%", paddingLeft:"2%", paddingRight:"2%"}} fluid> 
                    <Col >
                        <Card bsPrefix>
                            <img src="/eMart.png"/>
                        </Card>
                    </Col>
                    <Col>
                        <Card bsPrefix>
                            <h3>Product Name</h3>
                            <h6>Logo</h6>
                        </Card>
                    </Col>
                    <Col>
                        <Card bsPrefix>
                            <h3>Price</h3>
                            <h6>18,000/-</h6>
                        </Card>
                    </Col>
                    <Col>
                        <Card bsPrefix>
                        <h3>Deliver Date</h3>
                        <h6>Mar-12-1999</h6>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <Row style={{backgroundColor:"White", paddingTop:"2%", paddingBottom:"2%", paddingLeft:"2%", paddingRight:"2%"}} fluid> 
                    <Col >
                        <Card bsPrefix>
                            <img src="/eMart.png"/>
                        </Card>
                    </Col>
                    <Col>
                        <Card bsPrefix>
                            <h3>Product Name</h3>
                            <h6>Logo</h6>
                        </Card>
                    </Col>
                    <Col>
                        <Card bsPrefix>
                            <h3>Price</h3>
                            <h6>18,000/-</h6>
                        </Card>
                    </Col>
                    <Col>
                        <Card bsPrefix>
                        <h3>Deliver Date</h3>
                        <h6>Mar-12-1999</h6>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Order;