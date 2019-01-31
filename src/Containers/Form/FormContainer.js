import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import FormComponent from "./FormComponent";
import { updateUserEmail } from "./actions";
const mapStateToProps = state => ({
   email:state.userReducer.email
  });
  const mapDispatchToProps = dispatch => {
      return bindActionCreators({updateUserEmail},dispatch)}
  const FormContainer = connect(mapStateToProps,mapDispatchToProps)(FormComponent);
  export default FormContainer
