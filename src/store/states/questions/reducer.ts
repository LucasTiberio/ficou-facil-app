import { iAction } from "../../types";
import { QuestionsActionTypes, iQuestionState, iQuestion } from "./types";

const QUESTIONS_REDUCER_INITIAL_STATE: iQuestionState = {
    displayedQuestion: null,
    questions: [],
    isQuestionsLoading: false,
}

const QuestionsReducer = (state = QUESTIONS_REDUCER_INITIAL_STATE, action: iAction<QuestionsActionTypes>): iQuestionState => {
    switch(action.type) {
        case "ADD_QUESTION":
            const updatedQuestions = [action.payload, ...state.questions]
            return { ...state, questions: updatedQuestions as iQuestion[] }
        
        case "SET_QUESTIONS":
            return { ...state, questions: action.payload as iQuestion[] }

        case "SET_DISPLAYED_QUESTION":
            return { ...state, displayedQuestion: action.payload  as iQuestion }
        
        case "SET_QUESTIONS_LOADING":
            return { ...state, isQuestionsLoading: action.payload as boolean }

        default:
            return state;
    }
}

export default QuestionsReducer;