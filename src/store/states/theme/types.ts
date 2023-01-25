export type ThemeActionTypes = "SET_SHOW_NAVIGATION_BAR" | "SET_GLOBAL_LOADING" | "RESET"

export interface iThemeState {
    showNavigationBar: boolean;
    isGlobalLoading: boolean;
}