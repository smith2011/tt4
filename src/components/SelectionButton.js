import React from 'react';
import { Button } from 'reactstrap';

export default class Buttons extends React.Component {
  state = {
    toggle: false
  }

  handleClick = () => {
    const toggle = !this.state.toggle;
    this.setState({ toggle });
    this.props.handlerFromParent(toggle);
  }

  render() {
    const btnValue = this.state.toggle ? "Constituent Tree" : "Dependency Tree";

    return (
      <div class="pt-5">
        <Button outline color="primary" onClick={this.handleClick} >{btnValue}</Button>
      </div>
    );
  }
}