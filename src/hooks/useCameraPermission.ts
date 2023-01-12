import { PermissionResponse, requestCameraPermissionsAsync } from "expo-camera";
import { useEffect, useState } from "react";

const useCameraPermission = (): PermissionResponse | undefined => {
    const [camera, setCamera] = useState<PermissionResponse>();
    
    const handleGetCamera = async () => {
        const camera = await requestCameraPermissionsAsync();
        setCamera(camera)
    }

    useEffect(() => {
        handleGetCamera()
    }, [])

    return camera;
}

export default useCameraPermission