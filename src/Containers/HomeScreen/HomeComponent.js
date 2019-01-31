import React, { Component } from 'react';
import './HomeComponent.scss';
import  FormContainer  from  "../Form/FormContainer";
class HomeComponent extends Component {
  render() {
    return (
      <div className="Home">
      <h1>Welcome to the questionnaire</h1>
        <FormContainer changeScreen={this.props.changeScreen}/>
      </div>
    );
  }
}

export default HomeComponent;
