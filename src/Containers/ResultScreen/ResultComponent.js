import React, { Component } from 'react';
import './ResultComponent.scss';
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent"
import * as pageName from "../../constants";
class ResultComponent extends Component {
  render() {
    return (
      <div className="Result">
      <h3>{this.props.email}, here your final score:</h3>
        <p>Your result : {this.props.score} points</p>
        <ButtonComponent clickButton={()=> this.props.changeScreen(pageName.CHOICE_PAGE)} boutonValue="RETURN"/>
      </div>
    );
  }
}

export default ResultComponent;
