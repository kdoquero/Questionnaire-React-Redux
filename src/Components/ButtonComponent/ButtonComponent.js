import React, { Component } from 'react';
import "./ButtonComponent.scss"
class ButtonComponent extends Component {
  render() {
    return (
   
      <input className="myButton" type="button" onClick={this.props.clickButton} disabled = {(this.props.disabledB)? "disabled" : ""} value={this.props.boutonValue}/>

    );
  }
}

export default ButtonComponent;
