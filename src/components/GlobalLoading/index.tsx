import { useSelector } from "react-redux"
import ThemeSelector from "../../store/states/theme/selectors"
import Loading from "../Loading"
import { FullSizeWrapper } from "./styles"

const GlobalLoading = () => {
    const isGlobalLoading = useSelector(ThemeSelector.isGlobalLoading)

    if (!isGlobalLoading) {
        return null;
    }

    return (
        <FullSizeWrapper>
            <Loading />
        </FullSizeWrapper>
    )
}

export default GlobalLoading