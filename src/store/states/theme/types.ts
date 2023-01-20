export type ThemeActionTypes = "SET_SHOW_NAVIGATION_BAR" | "SET_GLOBAL_LOADING"

export interface iThemeState {
    showNavigationBar: boolean;
    isGlobalLoading: boolean;
}