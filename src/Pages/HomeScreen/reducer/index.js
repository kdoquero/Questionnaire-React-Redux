
import * as types from "../../../constants";
const INITIAL_STATE = {
    screen: "HOME",
    userEmail: "",
}

export const homeScreenReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CHANGE_SCREEN:
            return {
                ...state
            }
            break;

        default:
            return {
                state
            }
            break;
    }
}

export default {
    homeScreenReducer
}