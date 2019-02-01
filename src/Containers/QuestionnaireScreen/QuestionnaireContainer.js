import QuestionnaireComponent from "./QuestionnaireComponent"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import "./QuestionnaireComponent.scss"
import {updateTheme,updateCurrentQuestion,updateCurrentScore} from "./actions"
const mapStateToProps = state => ({
   questions:state.questionnaireReducer.questions,
   currentQuestion: state.questionnaireReducer.currentQuestion,
   score: state.questionnaireReducer.score,

  });
  const mapDispatchToProps = dispatch => {
      return bindActionCreators({updateTheme,updateCurrentQuestion,updateCurrentScore},dispatch)}
  const QuestionnaireContainer = connect(mapStateToProps,mapDispatchToProps)(QuestionnaireComponent);
  export default QuestionnaireContainer
