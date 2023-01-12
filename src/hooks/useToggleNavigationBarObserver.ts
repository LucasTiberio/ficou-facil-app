import { useEffect } from "react"

const useToggleNavigationBarObserver = (shouldShow: boolean, storeShowingNavigationBar: boolean, toggleFunction: () => void) => {
    /**
     * Detect if NavigationBar is hidden
     * Show NavigationBar if storeShowingNavigationBar
     */
    useEffect(() => {
        if (!storeShowingNavigationBar && shouldShow) {
            toggleFunction()
        }
    }, [shouldShow, storeShowingNavigationBar])
}

export default useToggleNavigationBarObserver;