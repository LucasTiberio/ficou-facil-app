import { Fragment, useRef, useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import useCameraFlip from "../../hooks/useCameraFlip";
import useCameraPermission from "../../hooks/useCameraPermission";
import { RetakePictureButton, SendPictureButton, StyledExpoCamera, TakePictureButton } from "./styles";
import { iCameraPicture, iCameraRef, Props } from "./types";
import { useDispatch } from "react-redux";
import ThemeActions from "../../store/states/theme/actions";

const Camera = ({
    onTakePicture,
    onSubmitPicture, 
    useBase64 = false,
    freezeOnTakePicture = false,
}: Props) => {
    const dispatch = useDispatch();
    const [freezed, setFreezed] = useState(false)
    const picture = useRef<iCameraPicture>()
    const cameraRef = useRef<iCameraRef>();

    const camera = useCameraPermission();
    const { current: cameraType } = useCameraFlip();

    if (!camera || !camera.granted) {
        return null;
    }

    const handleClickTakePicture = async () => {
        if (!cameraRef.current) {
            return;
        }

        dispatch(ThemeActions.showGlobalLoading())

        const photo = await cameraRef.current.takePictureAsync({
            base64: useBase64,
        })

        if (photo) {
            picture.current = photo

            onTakePicture?.(photo, cameraRef.current)

            if (freezeOnTakePicture) {
                handleFreezeCamera()
            }
        }

        dispatch(ThemeActions.hideGlobalLoading())
    }

    const handleFreezeCamera = () => {
        setFreezed(true)
        cameraRef.current?.pausePreview()
    }

    const handleUnfreezeCamera = () => {
        setFreezed(false)
        cameraRef.current?.resumePreview()
    }

    const handleSubmitPicture = () => {
        if (picture.current && cameraRef.current) {
            onSubmitPicture?.(picture.current, cameraRef.current)
        }
    }

    return (
        <StyledExpoCamera type={cameraType} ref={cameraRef}>
            {!freezed && (
                <TakePictureButton onPress={handleClickTakePicture} />
            )}

            {freezed && (
                <Fragment>
                    <SendPictureButton onPress={handleSubmitPicture}>
                        <MaterialCommunityIcons
                            name="file-send"
                            size={42}
                            color="black"
                        />
                    </SendPictureButton>
                    <RetakePictureButton onPress={handleUnfreezeCamera}>
                        <MaterialCommunityIcons
                            name="camera-retake"
                            size={42}
                            color="black"
                        />
                    </RetakePictureButton>
                </Fragment>
            )}
        </StyledExpoCamera>
    )
}

export default Camera;