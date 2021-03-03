import React, { Component } from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import { FaCartPlus } from 'react-icons/fa';
import { MdSearch, MdAccountCircle } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";

class TopNav extends Component {
  state = {};
  render() {
    return (
      <div >
      <Navbar style={{backgroundColor:"#004d40"}} variant="dark">
        <Navbar.Brand href="#home">
          <img src="/eMart.png" height="30" alt="Logo"/>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search Product..." className="mr-sm-2" />
          <Button variant="outline-light"> <MdSearch/> </Button> &nbsp;&nbsp;
        </Form>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav.Link href="#signin"><BiLogIn size="25"/>&nbsp;Sign In</Nav.Link>
          <Nav.Link href="#signup"><MdAccountCircle size="25"/>&nbsp;Sign Up</Nav.Link>&nbsp;&nbsp;
          <button type="button" class="btn btn-primary" style = {{align:"right"}}>
            Cart &nbsp;<FaCartPlus/> <span class="badge badge-light">9</span>
          </button>
      </Navbar>
      </div>
    );
  }
}

export default TopNav;
