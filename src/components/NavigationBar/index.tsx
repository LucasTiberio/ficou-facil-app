import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native"

import CameraIcon from "../../icons/Camera";
import { PAGES } from "../../routes/pages";
import { useStore } from "../../store";
import Shadow from "../Shadow";
import { CameraWrapper, FloatingContainer, StyledNavigation } from "./styles"

const NavigationBar = () => {
    const { theme } = useStore();
    const navigation = useNavigation<any>()
    
    if (!theme?.showNavigationBar) {
        return null;
    }

    const handleClickCamera = () => {
        navigation.navigate(PAGES.CAMERA)
    }
    
    return (
        <FloatingContainer>
            <Shadow type="small">
                <StyledNavigation>
                    <Text>né</Text>

                    <CameraWrapper onPress={handleClickCamera}>
                        <CameraIcon />
                    </CameraWrapper>

                    <Text>né</Text>
                </StyledNavigation>
            </Shadow>
        </FloatingContainer>
    )
}

export default NavigationBar