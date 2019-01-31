import HomeComponent from "./HomeComponent"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'


const mapStateToProps = state => ({
   
  });
  const mapDispatchToProps = dispatch => {
      return bindActionCreators({},dispatch)}
  const AppContainer = connect(mapStateToProps,mapDispatchToProps)(HomeComponent);
  export default AppContainer
