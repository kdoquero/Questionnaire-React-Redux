import React, { Component } from 'react';
import "./ChoiceItemsComponent.scss"
class ChoiceItemsComponent extends Component {
  render() {
    return (
   
      <div className="ChoiceItem">
        <p>{this.props.nameLang.toUpperCase()}</p>
      </div>

    );
  }
  click =()=>{
    this.props.changeScreen("CHOICE")
  }
}

export default ChoiceItemsComponent;
