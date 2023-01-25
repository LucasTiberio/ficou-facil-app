import { iAction } from "../../types";
import { ThemeActionTypes } from "./types";

/** Navigation bar */
const showNavigationBar = (): iAction<ThemeActionTypes, boolean> => ({
    type: "SET_SHOW_NAVIGATION_BAR",
    payload: true
})

const hideNavigationBar = (): iAction<ThemeActionTypes, boolean> => ({
    type: "SET_SHOW_NAVIGATION_BAR",
    payload: false
})

/** Global Loading */
const showGlobalLoading = (): iAction<ThemeActionTypes, boolean> => ({
    type: "SET_GLOBAL_LOADING",
    payload: true
})

const hideGlobalLoading = (): iAction<ThemeActionTypes, boolean> => ({
    type: "SET_GLOBAL_LOADING",
    payload: false
})

const resetTheme = (): iAction<ThemeActionTypes, boolean> => ({
    type: undefined,
})

const ThemeActions = {
    showNavigationBar,
    hideNavigationBar,
    showGlobalLoading,
    hideGlobalLoading,
    resetTheme
}

export default ThemeActions;