import * as types from '../../../constants'

export const changeScreen = (pageName,index =0) => {
   return {
       type: types.CHANGE_SCREEN,
        pageName:pageName,
        indexQuestionnaire: index
    }
 }
 export const updateQuestions = (questions)=> {
    return {
        type:types.UPDATE_QUESTION,
        questions :questions
    }
}
export const updateTheme = (questions)=> {
    return {
        type:types.UPDATE_QUESTION,
        questions :questions
    }
}
 export const fetchApi = (theme) => {
    return async (dispatch) => {
        try {
            
            const response = await fetch(`https://quizz.simplon-roanne.com/${theme}.json`);
            const questions = await response.json()
            //let questions = [html,js,php]
            dispatch(updateQuestions(questions))
            dispatch(changeScreen(types.QUESTIONNAIRE_PAGE))
            //console.log(questions, "questions");
            
        } catch (e) {
            console.log(e);

        }
    };
};
