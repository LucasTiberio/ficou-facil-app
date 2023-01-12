type iTakePictureAsyncOptions = {
    base64?: boolean
}

export type iCameraPicture = {
    base64?: string
    uri: string;
    height: string;
    width: string;
}

export interface iCameraRef {
    takePictureAsync: (options: iTakePictureAsyncOptions) => iCameraPicture
    pausePreview: () => void
    resumePreview: () => void
}

export interface Props {
    onTakePicture: (picture: iCameraPicture, cameraRef: iCameraRef) => void
    onSubmitPicture: (picture: iCameraPicture, cameraRef: iCameraRef) => void
    useBase64?: boolean;
    freezeOnTakePicture?: boolean;
}