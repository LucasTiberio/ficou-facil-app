import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import ThemeActions from "../store/states/theme/actions";
import ThemeSelector from "../store/states/theme/selectors";

const useToggleNavigationBarObserver = (shouldShow: boolean) => {
    const showNavigationBar = useSelector(ThemeSelector.showNavigationBar)
    const dispatch = useDispatch();

    const toggleNavigationBar = () => {
        if (showNavigationBar) {
            dispatch(ThemeActions.hideNavigationBarAction())
        }else{
            dispatch(ThemeActions.showNavigationBarAction())
        }
    }

    /**
     * Detect if NavigationBar is hidden
     * Show NavigationBar if storeShowingNavigationBar
     */
    useEffect(() => {
        if (shouldShow && !showNavigationBar) {
            toggleNavigationBar()
        }
    }, [shouldShow])
}

export default useToggleNavigationBarObserver;