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

const QuestionActions = {
    addQuestionAction,
    createQuestionsAction,
    setQuestionsAction,
    showQuestionModalAction,
    hideQuestionModalAction,
}

export default QuestionActions;