import React, { Component }  from "react";
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { MdEmail, MdLocationOn, MdCall } from "react-icons/md";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaPinterestSquare, FaWhatsappSquare, FaGooglePlusSquare, FaRssSquare } from "react-icons/fa";
import { FcShop, FcAbout } from "react-icons/fc";

class Footer extends Component {
 state = {};
 render() {
 return (
  <div style={{ backgroundColor: "black", color:"white"}}>
    <br/>
      <Container>
          <Row style={{ display: "flex"}}>
              <Col>
                  <div> 
                    <h3>Payment</h3>
                    <hr color ="Yellow"/>
                        <a href="https://www.facebook.com/bbksa" style={{decoration:"none"}}><FaFacebookSquare color="white" size= "25px"/></a>{" "}
                        <a href="https://twitter.com/bibekkrsah"><FaTwitterSquare color="white" size= "25px"/></a>{" "}
                        <a href="https://www.linkedin.com/in/bbksa"><FaLinkedin color="white" size= "25px"/></a>{" "}
                        <a href="https://www.pinterest.com/bbk_sa"><FaPinterestSquare color="white" size= "25px"/></a>{" "}
                        <a href="https://wa.me/917497044831"><FaWhatsappSquare color="white" size= "25px"/></a>{" "}
                        <a href="#googleplus"><FaGooglePlusSquare color="white" size= "25px"/></a>{" "}
                        <a href="#rss"><FaRssSquare color="white" size= "25px"/></a>
                  </div>
              </Col>
              <Col>
                  <div>
                    <div>
                      <h3>Newsletter</h3>
                      <hr color ="Yellow"/>
                      <Form>
                        <div align="center">
                        <h5>Always be the first to know.</h5>
                        <p>Sign up for our newsletter!</p>
                        <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><MdEmail size= "25px"/></InputGroup.Text>
                          </InputGroup.Prepend>
                            <FormControl placeholder="Example@gmail.com"/>
                            <InputGroup.Append>
                              <Button variant="primary">Submit</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        </div>
                      </Form>
                    </div>
                  </div>
              </Col>
              <Col>
                  <div>
                    <div>
                      <h3>Social Media</h3>
                      <hr color ="Yellow"/>
                      <div align="center">
                        <h5>Also visit our social Profiles.</h5>
                        <p>Feel free to contact there!</p>
                        <a href="https://www.facebook.com/bbksa" style={{decoration:"none"}}><FaFacebookSquare color="white" size= "30px"/></a>{" "}
                        <a href="https://twitter.com/bibekkrsah"><FaTwitterSquare color="white" size= "30px"/></a>{" "}
                        <a href="https://www.linkedin.com/in/bbksa"><FaLinkedin color="white" size= "30px"/></a>{" "}
                        <a href="https://www.pinterest.com/bbk_sa"><FaPinterestSquare color="white" size= "30px"/></a>{" "}
                        <a href="https://wa.me/917497044831"><FaWhatsappSquare color="white" size= "30px"/></a>{" "}
                        <a href="#googleplus"><FaGooglePlusSquare color="white" size= "30px"/></a>{" "}
                        <a href="#rss"><FaRssSquare color="white" size= "30px"/></a>
                      </div>
                    </div>
                  </div>
              </Col>
          </Row>

<br/>

          <Row style={{ display: "flex"}}>
              <Col>
                  <div>
                    <div>
                      <h4>About eMart</h4>
                      <hr color ="Yellow"/>
                      <p>eMart is the Simple shopping Solution. It's a full-featured website with all 
                         product details and a shopping cart system that bends over backward to give 
                         you the flexibility you need to run your online store.
                      </p>
                    </div>
                  </div>
              </Col>
              <Col>
                  <div>
                    <h4>Information</h4>
                    <hr color ="Yellow"/>
                      <FcAbout size= "20px"/> {"  "} <a href="about.html" style={{textDecoration:"none", color:"white"}}>About Us</a><br/>
                      <FcShop size= "20px"/> {"  "} <a href="Product.html" style={{textDecoration:"none", color:"white"}}> Shop</a><br/>
                      <a href="#" style={{textDecoration:"none", color:"white"}}>Privacy Policy</a><br/>
                      <a href="#" style={{textDecoration:"none", color:"white"}}>Terms &amp; Conditions</a>
                  </div>
              </Col>
              <Col>
                  <div>
                    <h4>Contact Us</h4>
                    <hr color ="Yellow"/>
                    <MdLocationOn size= "25px"/> {" "}
                      Address: Mullana, Haryana,<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 133207, India <br/>
                    <MdCall size= "25px"/> {" "}
                      Phone: <a href="tel:+91 7497044831" style={{textDecoration:"none", color:"white"}}>+91 7497044831</a><br/>
                    <MdEmail size= "25px"/> {""}
                      Email:{" "}<a href="mailto:coolbibeksah@gmail.com" style={{textDecoration:"none", color:"white"}}>coolbibeksah@gmail.com</a>
                  </div>
              </Col>
          </Row>

      <hr color="white"/>
        <section align="center">
          <div>
            <p>
              All Rights Reserved. © 2021 <a href="#home">eMart</a>
            </p>
          </div>
        </section>
        <br/>
      </Container>
    </div>
  );
}
}

export default Footer;