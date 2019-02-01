import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import  {changeScreen,fetchApi }    from './actions';
import App from './App'

const mapStateToProps = state => {
    console.log(state,"AppContainer Props");
    
  return  {screen: state.screenReducer.screen,
        email:state.userReducer.email,
        score:state.questionnaireReducer.score
    }
  };
  const mapDispatchToProps = dispatch => {
      return bindActionCreators({changeScreen,fetchApi},dispatch)}
  const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);
  export default AppContainer
