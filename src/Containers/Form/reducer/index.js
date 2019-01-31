import * as types from "../../../constants"
const INITIAL_STATE = {
    email:""
}

export const userReducer = (state=INITIAL_STATE,action)=> {
    console.log(state, action, "FormReducer");

    switch (action.type) {
        case types.UPDATE_USERMAIL:
            return {
                ...state,
                email:action.email
            }
        default:
            return state
    
          
    }
}

