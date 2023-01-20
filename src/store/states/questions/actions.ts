import sendMessageIntegration from "../../../integrations/api/sendMessageIntegration";
import { iAction } from "../../types";
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

const createQuestionsAction = async (questionType: QuestionType) => {
    const createdQuestion = await sendMessageIntegration(questionType)

    if (!createdQuestion) {
        throw "Question Redux Actions: createQuestionsAction() error"
    }

    return {
        createdQuestion,
        dispatchAction: () => addQuestionAction(createdQuestion)
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