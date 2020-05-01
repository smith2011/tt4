import React from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <h3>
          <NavbarBrand href="/">CF Planter</NavbarBrand>
          </h3>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}