import { Image } from "react-native";

const GoogleIcon = ({ width = 50, height = 50 }: iSvg) => {
    return <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png" }} style={{ width, height }} />;
}

export default GoogleIcon;