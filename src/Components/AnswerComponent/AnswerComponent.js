import React, { Component } from 'react';
import "./AnswerComponent.scss"
class AnswerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedRadio: ""
    };
  }
  render() {

    return (

      <div>
        {this.renderAnswers()}
      </div>

    );
  }
  renderAnswers() {
    let answers = this.props.answers;
    //console.log(answers);
    
    let renderedAnswers = [];
    for (let index = 0; index < answers.length; index++) {
      renderedAnswers.push(
      <div className="answer" key={index + "_" +  answers[index].answer.substr(0,4)}>
        <p >Answer {index+1}: {answers[index].answer}</p>
        <input type="checkbox" defaultChecked={false}  onChange={(evt) => this.onChange(evt.target.value)}  value={index}></input>
      </div>
      )
    }
    return renderedAnswers
  }
  onChange(evt){
    this.props.checkCorrect(this.props.answers,evt)

    
  }
  
  
}

export default AnswerComponent;
