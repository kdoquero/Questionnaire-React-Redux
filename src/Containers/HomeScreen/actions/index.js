import * as types from "../../../constants"
export const changeScreen = (pageName) => {
    return {
        type: types.CHANGE_SCREEN,
        pageName:pageName
    }
}
