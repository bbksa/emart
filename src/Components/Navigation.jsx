import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Accordion,
} from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { MdSearch, MdAccountCircle } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";

class TopNav extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#004d40" }} variant="dark">
          <Navbar.Brand>
            <Link to="/home">
              <img src="/eMart.png" height="30" alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/Contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
          <Accordion inline>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <Button variant="outline-light">
                <MdSearch />
              </Button>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search Product..."
                  className="mr-sm-2"
                />
              </Form>
            </Accordion.Collapse>
          </Accordion>
          {/* <Form inline>
            <FormControl
              type="text"
              placeholder="Search Product..."
              className="mr-sm-2"
            />
            <Button variant="outline-light">
              {" "}
              <MdSearch />{" "}
            </Button>{" "}
            &nbsp;&nbsp;
          </Form> */}
          <Nav.Link>
            <BiLogIn size="25" />
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "white" }}
            >
              &nbsp; Sign In
            </Link>
          </Nav.Link>
          <Nav.Link>
            <BiLogIn size="25" />
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              &nbsp; Sign Up
            </Link>
          </Nav.Link>
          &nbsp;&nbsp;
          <button
            type="button"
            class="btn btn-primary"
            style={{ align: "right" }}
          >
            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
              Cart &nbsp;
              <FaCartPlus /> <span class="badge badge-light">9</span>
            </Link>
          </button>
        </Navbar>
      </div>
    );
  }
}

export default TopNav;
