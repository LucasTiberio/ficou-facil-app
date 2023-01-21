export type QuestionsActionTypes = "ADD_QUESTION" | "SET_QUESTIONS" | "SET_QUESTIONS_LOADING" | "SET_DISPLAYED_QUESTION"

export type iQuestion = {
    clientMessage: string;
    iaMessage: string;
} | null;

export interface QuestionType {
    imageBase64?: string;
    imageText?: string;
}

export interface iQuestionState {
    questions: iQuestion[];
    isQuestionsLoading: boolean;
    displayedQuestion: iQuestion | null
}