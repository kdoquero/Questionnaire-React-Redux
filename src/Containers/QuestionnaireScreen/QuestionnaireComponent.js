import React, { Component } from 'react';
import './QuestionnaireComponent.scss';
import QuestionComponent from "../../Components/QuestionComponent/QuestionComponent"
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent"
import AnswerComponent from "../../Components/AnswerComponent/AnswerComponent";
class QuestionnaireComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledB: false,
    };
  }
  render() {
    console.log(this.props, "questionnaire component props");
    return (
      <div className="Questionnaire">
        {this.renderQuestionnaire()}
        <ButtonComponent clickButton={this.nextQ} disabledB={this.state.disabledB} email={this.state.email} boutonValue="Next" />
      </div>

    );
  }
  getCurrentQuestion = (indexQuestion) => {
    let questions = this.props.questions
    for (let index = 0; index < questions.length; index++) {
      if (index === indexQuestion) {
        return questions[index];

      }

    }
  }
  nextQ = () => {
    console.log("click");
    let currentQuestion =this.props.currentQuestion
    let nextQuestion = currentQuestion +1
    console.log("click",nextQuestion);
    this.props.updateCurrentQuestion(nextQuestion)
  }
  renderQuestionnaire = () => {
    const currentQuestion = this.getCurrentQuestion(this.props.currentQuestion)
    console.log(currentQuestion);

    return (<div >
      <QuestionComponent question={currentQuestion.question} />
      <AnswerComponent answers={currentQuestion.answers} />
    </div>);
  }

}

export default QuestionnaireComponent;
