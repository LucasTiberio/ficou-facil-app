
const ThemeState = (showNavigationBarUseState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]): iStateTheme => {
    const [showNavigationBar, setShowNavigationBar] = showNavigationBarUseState
    
    const toggleNavigationBar = (show?: boolean) => {
        setShowNavigationBar(prev => show || !prev)
    }

    return {
        showNavigationBar,
        toggleNavigationBar,
    }
}

export default ThemeState;