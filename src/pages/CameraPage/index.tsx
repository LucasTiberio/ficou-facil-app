import { useState } from "react"

import Camera from "../../components/Camera"
import { iCameraPicture } from "../../components/Camera/types"
import { Container } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { PAGES } from "../../routes/pages"
import { useDispatch } from "react-redux"
import QuestionActions from "../../store/states/questions/actions"
import { dispatchAsync } from "../../shared/utils"

const CameraPage = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation<any>()
    const [picture, setPicture] = useState<iCameraPicture | undefined>(undefined)

    const handleTakePicture = (picture: iCameraPicture) => {
        setPicture(picture)
    }

    const handleSubmitPicture = async () => {
        if (!picture?.base64) return;

        dispatchAsync(dispatch, QuestionActions.createQuestionsAction({
            imageBase64: picture.base64
        }, true))

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