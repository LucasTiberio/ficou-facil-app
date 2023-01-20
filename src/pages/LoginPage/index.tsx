import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"
import GoogleIcon from "../../icons/GoogleIcon"

import GoogleAuthenticationIntegration from "../../integrations/oauth/GoogleAuthenticationIntegration"
import { PAGES } from "../../routes/pages"
import storageKeys from "../../shared/storageKeys"
import CTASection from "../../components/Login/CTASection"
import { Container, CTAWrapper } from "./styles"
import { Props } from "./types"
import Logo from "../../components/Logo"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import SessionActions from "../../store/states/session/actions"

const LoginPage = ({ navigation }: Props) => {
    const dispatch = useDispatch();

    const handlePressGoogleLogin = useCallback(() => {
        const onSuccessGoogleAuthentication = async (response: iGoogleAuthenticationResponse) => {
            // const data = {
            //     token: response.params.access_token,
            //     // user: {}
            // }

            const token = response.params.access_token
            
            await AsyncStorage.setItem(storageKeys.token, token)

            dispatch(SessionActions.setDataAction({
                token,
            }))

            navigation.navigate(PAGES.HOME)
        }

        const googleAuthentication = new GoogleAuthenticationIntegration();
        googleAuthentication.signIn(onSuccessGoogleAuthentication)
    }, [])
    
    return (
        <Container>
            {/* Carrousel ? */}
            <Logo useBackground height={65} />

            <CTAWrapper>
                <CTASection buttons={[
                    { title: "Ajuda", onPress: () => Alert.alert("Help") },
                    { title: "Continuar com Google", icon: <GoogleIcon width={22} height={22} />, onPress: handlePressGoogleLogin }    
                ]} />
            </CTAWrapper>
        </Container>
    )
}

export default LoginPage