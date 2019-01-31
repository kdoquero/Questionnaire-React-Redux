import React, { Component } from 'react';
import "./AnswerComponent.scss"
class AnswerComponent extends Component {
  render() {

    return (

      <div>
        {this.renderAnswers()}
      </div>

    );
  }
  renderAnswers() {
    let answers = this.props.answers;

    let renderedAnswers = [];
    for (let index = 0; index < answers.length; index++) {
      renderedAnswers.push(
      <div className="answer" key={index}>
        <p >Answer {index+1}: {answers[index].answer}</p>
        <input type="radio" id={index} name="drone" value="dewey"></input>
      </div>
      )
    }
    return renderedAnswers
  }
}

export default AnswerComponent;
