import React, { Component } from 'react';
import './App.scss';
import HomeContainer from "../HomeScreen/HomeContainer"
import ChoiceComponent from "../ChoiceScreen/ChoiceComponent"
import QuestionnaireContainer from '../QuestionnaireScreen/QuestionnaireContainer';
import ResultComponent from "../ResultScreen/ResultComponent"
import * as pageName from "../../constants"
class App extends Component {
  render() {
    console.log('AppComponent', this.props);
    return (
      <div className="App">
      {(() => {
        switch(this.props.screen) {
          case pageName.HOME_PAGE:
            return <HomeContainer changeScreen={this.props.changeScreen}/>;
          case pageName.CHOICE_PAGE:
          return <ChoiceComponent email={this.props.email} fetchApi={this.props.fetchApi} />;
          case pageName.QUESTIONNAIRE_PAGE:
          return <QuestionnaireContainer changeScreen={this.props.changeScreen}/>;
          case pageName.RESULT_PAGE:
          return <ResultComponent changeScreen={this.props.changeScreen} score={this.props.score} email={this.props.email} />
          default:
            return <HomeContainer changeScreen={this.props.changeScreen}/>;
        }
      })()}
      </div>
    );
  } 
}

export default App;
