type iQuestion = {
    clientMessage: string;
    iaMessage: string;
}

type QuestionType = {
    imageBase64?: string;
    imageText?: string;
}

interface iQuestionState {
    questions?: iQuestion[];
    setQuestions: (questions: iQuestion[]) => void;
    createQuestion: (question: QuestionType) => Promise<iQuestion | undefined>;

    modalQuestion?: iQuestion;
    showModalQuestion: (question: iQuestion) => void;
    hideModalQuestion: () => void;
}