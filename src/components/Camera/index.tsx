import { Fragment, useRef, useState } from "react";
import { Image } from "react-native";
import useCameraFlip from "../../hooks/useCameraFlip";
import useCameraPermission from "../../hooks/useCameraPermission";
import { RetakePictureButton, SendPictureButton, StyledExpoCamera, TakePictureButton } from "./styles";
import { iCameraPicture, iCameraRef, Props } from "./types";

const Camera = ({
    onTakePicture,
    onSubmitPicture, 
    useBase64 = false,
    freezeOnTakePicture = false,
}: Props) => {
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
                        <Image source={{ 
                            uri: "https://static.thenounproject.com/png/1015122-200.png", 
                            width: 55,
                            height: 55
                        }} />
                    </SendPictureButton>
                    <RetakePictureButton onPress={handleUnfreezeCamera}>
                        <Image source={{ 
                            uri: "https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png", 
                            width: 55,
                            height: 55
                        }} />
                    </RetakePictureButton>
                </Fragment>
            )}
        </StyledExpoCamera>
    )
}

export default Camera;