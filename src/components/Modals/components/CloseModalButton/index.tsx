import { Image } from "react-native";
import { FloatingWrapper } from "./styles";
import { Props } from "./types";

const CloseModalButton = ({ onPress }: Props) => {
    return (
        <FloatingWrapper onPress={onPress}>
            <Image source={{
                height: 32,
                width: 32,
                uri: "https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/close-512.png"
            }} />
        </FloatingWrapper>
    )
}

export default CloseModalButton;