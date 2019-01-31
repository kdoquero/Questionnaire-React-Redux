import * as types from "../../../constants"
const INITIAL_STATE = {
    theme:"",
    currentQuestion:0,
    score:0,
    questions: new Array(1)
}

export const questionnaireReducer = (state=INITIAL_STATE,action)=> {
    console.log(state,action,"QuestionnaireReducer");
    
    switch (action.type) {
        case types.UPDATE_QUESTION :
         return {...state,questions:action.questions}
         case types.UPDATE_CURRENT_QUESTION :
         
            console.log(state,action);
            
         return {...state,currentQuestion:action.currentQuestion}
        default:
            return state;
          
    }
}

