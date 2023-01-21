import fetchHistoricIntegration from "../../../integrations/api/fetchHistoricIntegration";
import sendMessageIntegration from "../../../integrations/api/sendMessageIntegration";
import { iAction } from "../../types";
import ThemeActions from "../theme/actions";
import { iQuestion, QuestionsActionTypes, QuestionType } from "./types";

const addQuestionAction = (question: iQuestion): iAction<QuestionsActionTypes, iQuestion> => {
    return {
        type: "ADD_QUESTION",
        payload: question
    }
}

const setQuestionsAction = (questions: iQuestion[]): iAction<QuestionsActionTypes, iQuestion[]> => {
    return {
        type: "SET_QUESTIONS",
        payload: questions
    }
}

const createQuestionsAction = (questionType: QuestionType, openModal = false) => {
    return (dispatch: any) => {
        dispatch(ThemeActions.showGlobalLoading());

        sendMessageIntegration(questionType)
            .then(createdQuestion => {
                if (!createdQuestion) {
                    throw "Question Redux Actions: createQuestionsAction() error"
                }

                dispatch(addQuestionAction(createdQuestion));
                dispatch(ThemeActions.hideGlobalLoading());

                if (openModal) {
                    dispatch(showQuestionModalAction(createdQuestion))
                }
            })
    }
}

const showQuestionModalAction = (question: iQuestion): iAction<QuestionsActionTypes, iQuestion> => {
    return {
        type: "SET_DISPLAYED_QUESTION",
        payload: question
    }
}

const hideQuestionModalAction = (): iAction<QuestionsActionTypes, null> => {
    return {
        type: "SET_DISPLAYED_QUESTION",
        payload: null
    }
}

const setQuestionsLoadingAction = (bool: boolean): iAction<QuestionsActionTypes, boolean> => {
    return {
        type: "SET_QUESTIONS_LOADING",
        payload: bool,
    }
}

const getUserHistoric = () => {
    return (dispatch: any, getState: any) => {
        // Verify historic is empty
        const { questions: questionState } = getState()
        const { questions = [] } = questionState;

        if (!questions.length) {
            fetchHistoricIntegration().then((historicData = []) => {
                const adaptedDataIntoQuestions = historicData.map(
                    ({ clientMessage, iaMessage }) => 
                    ({ clientMessage, iaMessage })
                )
    
                dispatch(setQuestionsLoadingAction(true))
    
                dispatch(setQuestionsAction(adaptedDataIntoQuestions))
    
                dispatch(setQuestionsLoadingAction(false))
            });
        }

    }
}

const QuestionActions = {
    addQuestionAction,
    createQuestionsAction,
    setQuestionsAction,
    showQuestionModalAction,
    hideQuestionModalAction,
    getUserHistoric,
}

export default QuestionActions;