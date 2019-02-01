import React, { Component } from 'react';
import './ChoiceComponent.scss';
import ChoiceItemsComponent from "../../Components/ChoiceItemsComponent/ChoiceItemsComponent";
import * as constants from "../../constants"
class ChoiceComponent extends Component {
  render() {
    return (
      <div className="Choice">
        <h1>{this.props.email}, here your choices:</h1>
        <div className="Group">
          {this.createItemGroup(constants.LANGUAGES.length)}
        </div>
      </div>

    );
  }
  renderItem = (i,name) => {
    return (
      <div key={i} onClick={evt => this.goToQuestions(name)}><ChoiceItemsComponent key={i} nameLang={name} /></div>
    );
  }
  goToQuestions = (name) => {
    this.props.fetchApi(name)
  }
  createItemGroup(nbrItems) {
    let group = [];
    let names = constants.LANGUAGES
    for (let i = 0; i < nbrItems; i++) {
      group.push(this.renderItem(i,names[i]))
    }
    return group;
  }

}

export default ChoiceComponent;
