import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 

import { PAGES } from "../../routes/pages";
import ThemeSelector from "../../store/states/theme/selectors";
import Shadow from "../Shadow";
import { CameraWrapper, FloatingContainer, LeftActionWrapper, RightActionWrapper, StyledNavigation } from "./styles"

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
                    <LeftActionWrapper>
                        <AntDesign
                            name="doubleleft"
                            size={24}
                            color="black"
                        />
                        <FontAwesome
                            name="info-circle"
                            size={47}
                            color="black"
                        />
                    </LeftActionWrapper>

                    <CameraWrapper onPress={handleClickCamera}>
                        <MaterialCommunityIcons
                            name="camera-plus-outline"
                            size={34}
                            color="white"
                        />
                    </CameraWrapper>

                    <RightActionWrapper>
                        <FontAwesome
                            name="user-circle"
                            size={38}
                            color="black"
                        />
                        <AntDesign name="doubleright" size={24} color="black" />
                    </RightActionWrapper>
                </StyledNavigation>
            </Shadow>
        </FloatingContainer>
    )
}

export default NavigationBar