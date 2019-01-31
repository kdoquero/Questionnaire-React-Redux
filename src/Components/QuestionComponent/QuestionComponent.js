import React, { Component } from 'react';

class QuestionComponent extends Component {
  render() {
    return (
   
      <div className="Question">
        <h2>{this.props.question}</h2>
      </div>

    );
  }
}

export default QuestionComponent;
