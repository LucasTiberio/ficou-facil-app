import { iAction } from "../../types";
import { ThemeActionTypes } from "./types";

const showNavigationBarAction = (): iAction<ThemeActionTypes, boolean> => {
    return {
        type: "SET_SHOW_NAVIGATION_BAR",
        payload: true
    }
}

const hideNavigationBarAction = (): iAction<ThemeActionTypes, boolean> => {
    return {
        type: "SET_SHOW_NAVIGATION_BAR",
        payload: false
    }
}

const ThemeActions = {
    showNavigationBarAction,
    hideNavigationBarAction
}

export default ThemeActions;