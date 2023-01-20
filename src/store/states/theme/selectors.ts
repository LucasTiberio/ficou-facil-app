import { iGlobalStore } from "../../types"

const showNavigationBar = (state: iGlobalStore) => state.theme.showNavigationBar

const ThemeSelector = {
    showNavigationBar
}

export default ThemeSelector