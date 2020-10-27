import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';

class NavigationBar extends Component {
  render() {
    return (
        <>
            <Navbar bg="light" className="text-center">
                <Navbar.Brand href="#home">Drag 'n Drop</Navbar.Brand>
            </Navbar>
            <br />
        </>
    );
  }
}
export default NavigationBar;
