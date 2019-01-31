
import * as types from "../../../constants";
const INITIAL_STATE = {
    screen: "HOME",
}

export const homescreenReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CHANGE_SCREEN:
            console.log(state, action, "screenReducer");

            return {
                ...state,
                screen: action.pageName
            }
        default:
            return state;
            

    }
}