import QuestionnaireComponent from "./QuestionnaireComponent"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import "./QuestionnaireComponent.scss"
import {updateTheme,updateCurrentQuestion} from "./actions"
const mapStateToProps = state => ({
   questions:state.questionnaireReducer.questions,
   currentQuestion: state.questionnaireReducer.currentQuestion
  });
  const mapDispatchToProps = dispatch => {
      return bindActionCreators({updateTheme,updateCurrentQuestion},dispatch)}
  const QuestionnaireContainer = connect(mapStateToProps,mapDispatchToProps)(QuestionnaireComponent);
  export default QuestionnaireContainer
