import sendMessageIntegration from "../../../integrations/api/sendMessageIntegration";

const QuestionState = (
    modalQuestionUseState: [iQuestion | undefined, React.Dispatch<React.SetStateAction<iQuestion | undefined>>],
    questionsUseState:  [iQuestion[], React.Dispatch<React.SetStateAction<iQuestion[]>>],
): iQuestionState => {
    const [modalQuestion, setModalQuestion] = modalQuestionUseState
    const [questions, setQuestions] = questionsUseState

    const createQuestion = async ({
        imageText = "",
        imageBase64 = ""
    }) => {
        const response = await sendMessageIntegration({ imageText, imageBase64 })
        if (!response) {
            return undefined; 
        }

        addQuestion(response)
        return response;
    }

    const addQuestion = async (question: iQuestion) => {
        const newQuestions = questions
        newQuestions.unshift(question)

        setQuestions(newQuestions)
    }

    const showModalQuestion = (question: iQuestion) => {
        setModalQuestion(question);
    }

    const hideModalQuestion = () => setModalQuestion(undefined)

    return {
        questions,
        setQuestions,
        createQuestion,
        modalQuestion,
        showModalQuestion,
        hideModalQuestion,
    }
}

export default QuestionState;