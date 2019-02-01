import * as types from '../../../constants'
/**
 * Change la page du projet, recoit en argument:
 * @param {string} pageName définit dans les constantes ,une page;
 * @param {number} index si besoin récupère l'index du questionnaire au changement de page defaut à 0
 */
export const changeScreen = (pageName,index =0) => {
   return {
       type: types.CHANGE_SCREEN,
        pageName:pageName,
        indexQuestionnaire: index
    }
 }
 /**
  * Met à jour les questions dans le store;
  * @param {Array[Object]} questions 
  */
 export const updateQuestions = (questions)=> {
    return {
        type:types.UPDATE_QUESTION,
        questions :questions
    }
}
/**
 * pas implémenté
 * @param {*} questions 
 */
export const updateTheme = (questions)=> {
    return {
        type:types.UPDATE_QUESTION,
        questions :questions
    }
}
/**
 * Fetch les données du questionnaire dans l'api, en fonction du parametre thème
 * exemple de theme : "html,js,php,ruby"
 * @param {string} theme 
 */
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
