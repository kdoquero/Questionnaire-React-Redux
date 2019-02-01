import React, { Component } from 'react';
import './HomeComponent.scss';
import FormContainer from "../Form/FormContainer";
class HomeComponent extends Component {
  render() {
    return (
      <div className="Home">
        <div className="title-container">
          <h1 className="title">Welcome to the questionnaire</h1>
        </div>

        <FormContainer changeScreen={this.props.changeScreen} />
      </div>
    );
  }
}

export default HomeComponent;
