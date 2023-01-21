import { iGlobalStore } from "../../types";

const getDisplayedQuestion = (state: iGlobalStore) => state.questions.displayedQuestion

const getHistoricQuestions = (state: iGlobalStore) => state.questions.questions

const getIsQuestionsLoading = (state: iGlobalStore) => state.questions.isQuestionsLoading

const getQuestionsState = (state: iGlobalStore) => state.questions;

const QuestionsSelector = {
    getDisplayedQuestion,
    getHistoricQuestions,
    getIsQuestionsLoading,
    getQuestionsState,
}

export default QuestionsSelector;