import { iGlobalStore } from "../../types"

const showNavigationBar = (state: iGlobalStore) => state.theme.showNavigationBar

const isGlobalLoading = (state: iGlobalStore) => state.theme.isGlobalLoading

const ThemeSelector = {
    showNavigationBar,
    isGlobalLoading
}

export default ThemeSelector