import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native"
import { useSelector } from "react-redux";
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 

import { PAGES } from "../../routes/pages";
import ThemeSelector from "../../store/states/theme/selectors";
import Shadow from "../Shadow";
import { CameraWrapper, FloatingContainer, StyledNavigation } from "./styles"

const NavigationBar = () => {
    const showNavigationBar = useSelector(ThemeSelector.showNavigationBar)
    const navigation = useNavigation<any>()
    
    if (!showNavigationBar) {
        return null;
    }

    const handleClickCamera = () => {
        navigation.navigate(PAGES.CAMERA)
    }
    
    return (
        <FloatingContainer>
            <Shadow type="small">
                <StyledNavigation>
                    <Ionicons
                        name="information-circle"
                        size={44}
                        color="black"
                    />

                    <CameraWrapper onPress={handleClickCamera}>
                        <MaterialCommunityIcons
                            name="camera-plus-outline"
                            size={34}
                            color="white"
                        />
                    </CameraWrapper>

                    <FontAwesome
                        name="user-circle"
                        size={40}
                        color="black"
                    />
                </StyledNavigation>
            </Shadow>
        </FloatingContainer>
    )
}

export default NavigationBar