import { iGlobalStore } from "../../types";

const getDisplayedQuestion = (state: iGlobalStore) => state.questions.displayedQuestion

const getHistoricQuestions = (state: iGlobalStore) => state.questions.questions

const QuestionsSelector = {
    getDisplayedQuestion,
    getHistoricQuestions
}

export default QuestionsSelector;