import { iAction } from "../../types";
import { ThemeActionTypes, iThemeState } from "./types";

const THEME_REDUCER_INITIAL_STATE: iThemeState = {
    showNavigationBar: false,
    isGlobalLoading: false,
}

const ThemeReducer = (state = THEME_REDUCER_INITIAL_STATE, action: iAction<ThemeActionTypes>): iThemeState => {
    switch(action.type) {
        case "SET_SHOW_NAVIGATION_BAR":
            return { ...state, showNavigationBar: action.payload as boolean }
        
        case "SET_GLOBAL_LOADING":
            return { ...state, isGlobalLoading: action.payload as boolean }

        case "RESET":
            return THEME_REDUCER_INITIAL_STATE

        default:
            return state;
    }
}

export default ThemeReducer;