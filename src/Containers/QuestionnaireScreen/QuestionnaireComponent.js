import React, { Component } from 'react';
import './QuestionnaireComponent.scss';
import QuestionComponent from "../../Components/QuestionComponent/QuestionComponent"
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent"
import AnswerComponent from "../../Components/AnswerComponent/AnswerComponent";
import * as pageName from "../../constants"
class QuestionnaireComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledB: false,
      correct: false,
      currentSelectedA:null,
      currentScore:0
    };
  }
  render() {
    console.log(this.props);
    
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
    let currentQuestion =this.props.currentQuestion
    let nextQuestion = currentQuestion +1
    this.props.updateCurrentQuestion(nextQuestion)
  }


  renderQuestionnaire = () => {
    const currentQuestion = this.getCurrentQuestion(this.props.currentQuestion)
    if (currentQuestion){
      return (<div >
        <QuestionComponent question={currentQuestion.question} />
        <AnswerComponent checkCorrect={this.checkCorrect} answers={currentQuestion.answers} />
      </div>);
    } else {
      this.props.updateCurrentQuestion(0);
      this.props.updateCurrentScore(0);
      this.props.changeScreen(pageName.RESULT_PAGE)
    }
    
  }


  checkCorrect=(currentAnswers,checkedRadio) =>{
    this.setState({currentScore:this.props.score})
    let answers = currentAnswers;
    for (let index = 0; index < answers.length; index++) { 
     if (parseInt(checkedRadio) === index && answers[index].correct ===true) {
        console.log("good response",answers[index]);
        this.props.updateCurrentScore(this.calculateScore(true))
        this.setState({correct:true})
        this.setState({currentAnswers:answers[index]})
        return true
     }
      
    }
    this.props.updateCurrentScore(this.calculateScore(false))
    return false
  }
  calculateScore = (correct)=> {
    const currentQuestion = this.getCurrentQuestion(this.props.currentQuestion)
    let currentScore = this.props.score;
    if (correct ===true) {
        
        currentScore = currentScore + (currentQuestion.weight*10)
        console.log(currentScore, "++");
        
      
    } else {
      currentScore = currentScore - (currentQuestion.weight*10)
      console.log(currentScore, "--");
    }
    return currentScore
  }
}

export default QuestionnaireComponent;
