import React, { Component } from 'react';
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import * as PageName from "../../constants"
import "./FormComponent.scss"
class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      disabledB: true
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
      </div>
    );
  }
  getEmail = (evt) => {
    let value = evt.target.value
    this.setState({ email: value, disabledB: false })

    if (value === "") {
      this.setState({ disabledB: true })

    }

  }
  goToChoices = () => {
      this.props.updateUserEmail(this.state.email)
    this.props.changeScreen(PageName.CHOICE_PAGE)
  }
}

export default FormComponent;
