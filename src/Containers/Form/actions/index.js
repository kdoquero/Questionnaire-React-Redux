import * as types from '../../../constants'

export const updateUserEmail = (email) => {
    return {
        type: types.UPDATE_USERMAIL,
        email:email
    }
}