import  * as types from "../../../constants";

export const updateQuestions = (questions)=> {
    return {
        type:types.UPDATE_QUESTION,
        questions :questions
    }
}
export const updateCurrentQuestion = (currentIndex)=> {
    return {
        type:types.UPDATE_CURRENT_QUESTION,
        currentQuestion :currentIndex
    }
}
export const updateCurrentScore = (score)=> {
    return {
        type:types.UPDATE_CURRENT_SCORE,
        score :score
    }
}
export const updateTheme = (theme) => {
    return {
        type:types.UPDATE_THEME,
        theme:theme
    }
}
 