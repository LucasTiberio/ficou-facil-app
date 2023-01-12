import { CameraType } from "expo-camera"
import { useState } from "react"

const useCameraFlip = () => {
    const [cameraType, setCameraType] = useState(CameraType.back)
    
    const handleFlipCamera = () => {
        let newCameraType

        if (cameraType === CameraType.back) {
            newCameraType = CameraType.front
        }

        if (cameraType === CameraType.front) {
            newCameraType = CameraType.back
        }

        if (newCameraType) setCameraType(newCameraType)
    }

    return {
        current: cameraType,
        handleFlip: handleFlipCamera,
    }
}

export default useCameraFlip;