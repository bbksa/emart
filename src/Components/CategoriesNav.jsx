import React, { Component } from "react";
import { Nav, NavDropdown, Container, Row, Col} from "react-bootstrap";

class CategoriesNavigation extends Component {
  handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  state = {};

  render() {
    return (
      <div style={{ display:"flex", backgroundColor: "white", paddingLeft: 175, paddingTop: 5, align: "center" }}>
        <Nav variant="pills" activeKey="1" onSelect={this.handleSelect}>
        <Container>
          <Row align={"center"}>
            <Col>
              <img variant="top" src="/Images/mobile.png" alt="mobile" height="100" width="200"/>
              <NavDropdown title="Mobiles and Accessories" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Mobile</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Travel Adapter</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Power Banks</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">Cover and Cases</NavDropdown.Item>
              </NavDropdown>
            </Col>
          
            <Col>
              <img variant="top" src="/Images/ComputerAccessories.webp" alt="computer" height="100" width="180"/>
              <NavDropdown title="Computer and Accessories" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Laptop</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Mouse and Keyboards</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Storage Devices</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">PC Peripherals</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">Softwares</NavDropdown.Item>
              </NavDropdown>
            </Col>

            <Col>
              <img variant="top" src="/Images/smart.jpg" alt="smart" height="100" width="150"/>
              <NavDropdown title="Smart Devices" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Smart Wearables</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Smart Home</NavDropdown.Item>
              </NavDropdown>
            </Col>

            <Col>
              <img variant="top" src="/Images/gadgets.jpeg" alt="gadget" height="100" width="120"/>
              <NavDropdown title="Gadgets" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Camera and Accessories</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Tablets</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Audio Devices</NavDropdown.Item>
              </NavDropdown>
            </Col>

            <Col>
              <img variant="top" src="/Images/homeappliances.png" alt="home" height="100" width="180"/>
              <NavDropdown title="Home Appliances" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Televisions</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Refrigerators</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Washing Machines</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">Kitchen Appliances</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">Home Appliances</NavDropdown.Item>
              </NavDropdown>
            </Col>
          </Row>
          </Container>
        </Nav>
      </div>
    );
  }
}

export default CategoriesNavigation;
