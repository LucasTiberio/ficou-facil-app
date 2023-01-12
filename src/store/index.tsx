import React, { createContext, useMemo, useState } from 'react';

import { dummyContext, StoreContextType, Props } from './types';

import SessionState from './states/session';
import ThemeState from './states/theme';
import useToggleNavigationBarObserver from '../hooks/useToggleNavigationBarObserver';
import QuestionState from './states/questions';

export const StoreContext = createContext<StoreContextType>(dummyContext);

export const useStore = (): StoreContextType => React.useContext(StoreContext);

const StoreProvider = ({ children }: Props) => {
    const themeUseState = useState(false);
    const sessionDataUseState = useState<iData | undefined>(undefined)

    const modalQuestionUseState = useState<iQuestion | undefined>(undefined)
    const questionUseState = useState<iQuestion[]>([])

    const theme = ThemeState(themeUseState)
    const session = SessionState(sessionDataUseState)
    const question = QuestionState(modalQuestionUseState, questionUseState)

    /**
     * Toggle navigation bar based on props
     */
    const shouldShowNavigationBar = useMemo(() => session.hasSession, [session.hasSession])
    useToggleNavigationBarObserver(shouldShowNavigationBar, theme.showNavigationBar, theme.toggleNavigationBar);

    return (
        <StoreContext.Provider value={{
            theme,
            session,
            question,
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider