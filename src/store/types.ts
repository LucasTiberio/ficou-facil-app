export interface Props {
    children: any
}

export type StoreContextType = {
    theme: iStateTheme;
    session: iStateSession;
    question: iQuestionState;
}

export const dummyContext: StoreContextType = {
    theme: {
        showNavigationBar: false,
        toggleNavigationBar: () => false,
    },
    session: {
        hasSession: false,
        setData: () => false
    },
    question: {
        createQuestion: () => false,
        setQuestions: () => false,
    },
}