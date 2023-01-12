import { useState } from "react"

import Camera from "../../components/Camera"
import { iCameraPicture } from "../../components/Camera/types"
import { Container } from "./styles"
import { Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { PAGES } from "../../routes/pages"
import { useStore } from "../../store"

const CameraPage = () => {
    const navigation = useNavigation<any>()
    const { question } = useStore()
    const [picture, setPicture] = useState<iCameraPicture | undefined>(undefined)

    const handleTakePicture = (picture: iCameraPicture) => {
        setPicture(picture)
    }

    const handleSubmitPicture = async () => {
        if (!picture?.base64) return;

        await question.createQuestion({ imageBase64: picture.base64 });

        Alert.alert("Sua pergunta ficará salva no seu histórico junto com a resposta!")

        navigation.navigate(PAGES.HOME);
    }

    return (
        <Container>
            <Camera
                onTakePicture={handleTakePicture}
                onSubmitPicture={handleSubmitPicture}
                freezeOnTakePicture
                useBase64
            />
        </Container>
    )
}

export default CameraPage