import { Image } from "react-native";

const CameraIcon = ({ width = 50, height = 50 }: iSvg) => {
    return <Image source={{ uri: "https://thumbs.dreamstime.com/b/camera-vector-icon-isolated-black-background-92672166.jpg" }} style={{ width, height }} />;
}

export default CameraIcon;