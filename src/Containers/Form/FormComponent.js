import React, { Component } from 'react';
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import * as PageName from "../../constants"
import "./FormComponent.scss"
class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      disabledB: true,
      notEmail:false
    };
  }
  render() {
    return (
      <div className="Form">
        <form>
          <label className="">EMAIL: </label>
          <input className="" type="email" placeholder="myEmail@mail.com" onChange={evt => this.getEmail(evt)}></input>
          
            <ButtonComponent clickButton={this.goToChoices} disabledB={this.state.disabledB} email={this.state.email} boutonValue="SEND" />
        </form>
        {this.state.notEmail ? <p>Please enter a valid email address</p> : null}
      </div>
    );
  }
  getEmail = (evt) => {
    let value = evt.target.value;
      this.setState({ email: value, disabledB: false })
    if (value === "") {
      this.setState({ disabledB: true })

    }

  }
  isEmail = (email)=> {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return re.test(String(email).toLowerCase());
  }
  goToChoices = () => {
    
    if (this.isEmail(this.state.email)) { 
      this.props.updateUserEmail(this.state.email)
      this.props.changeScreen(PageName.CHOICE_PAGE)
    } else {
      this.setState({notEmail:true})
    }
    
  }
}

export default FormComponent;
