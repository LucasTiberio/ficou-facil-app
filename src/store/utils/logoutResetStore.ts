import QuestionActions from "../states/questions/actions"
import SessionActions from "../states/session/actions"
import ThemeActions from "../states/theme/actions"

const logoutResetStore = async (dispatch: any) => {
    dispatch(ThemeActions.showGlobalLoading())

    await Promise.all([
        // Session State
        dispatch(SessionActions.resetSession),
        
        // Question State
        dispatch(QuestionActions.resetQuestions),
        
        // Theme State
        dispatch(ThemeActions.resetTheme)
    ])

    dispatch(ThemeActions.hideGlobalLoading())
}

export default logoutResetStore