import React, { Component } from "react";
import { Nav, NavDropdown, Container, Row, Card} from "react-bootstrap";

class CategoriesNavigation extends Component {
  handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  state = {};

  render() {
    return (
      <div style={{ display:"flex", backgroundColor: "white", paddingTop: 10, paddingRight:100, paddingLeft: 275, paddingBottom: 10, alignItems: "center" }}>
        <Nav variant="pills" activeKey="1" onSelect={this.handleSelect}>
        <Container>
          <Row align={"center"}>
          <Card style={{ width: "13.5rem", height: "8rem"}}>
          <Card.Img variant="top" src="/Images/MobileAccessories.jpg" height="100" width="100"/>
          <NavDropdown title="Mobiles and Accessories" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Mobile</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Travel Adapter</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Power Banks</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Cover and Cases</NavDropdown.Item>
          </NavDropdown>
          </Card>

          <Card style={{ width: "13.5rem", height: "8rem"}}>
          <Card.Img variant="top" src="/Images/ComputerAccessories.png" height="100" width="100"/>
          <NavDropdown title="Computer and Accessories" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Laptop</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Mouse and Keyboards</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Storage Devices</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">PC Peripherals</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Softwares</NavDropdown.Item>
          </NavDropdown>
          </Card>

          <Card style={{ width: "13.5rem", height: "8rem"}}>
          <Card.Img variant="top" src="/Images/gadgets.jpeg" height="100" width="100"/>
          <NavDropdown title="Gadgets" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">
              Camera and Accessories
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Tablets</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Smart Wearables</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Audio Devices</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Smart Home</NavDropdown.Item>
          </NavDropdown>
          </Card>

          <Card style={{ width: "13.5rem", height: "8rem"}}>
          <Card.Img variant="top" src="/Images/HomeAppliances.jpeg" height="100" width="100"/>
          <NavDropdown title="Home Appliances" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Televisions</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Refrigerators</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Washing Machines</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Kitchen Appliances</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Home Appliances</NavDropdown.Item>
          </NavDropdown>
          </Card>
          </Row>
          </Container>
        </Nav>
      </div>
    );
  }
}

export default CategoriesNavigation;
