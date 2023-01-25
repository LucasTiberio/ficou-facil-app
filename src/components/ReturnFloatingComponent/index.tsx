import { useNavigation } from "@react-navigation/native"
import { Text } from "react-native"
import { AntDesign } from '@expo/vector-icons'; 

import { Props } from "./types"
import { FloatingTouchableOpacity } from "./styles";

const ReturnFloatingComponent = ({ page }: Props) => {
    const navigation = useNavigation<any>()

    const handlePress = () => {
        navigation.navigate(page)
    }

    return (
        <FloatingTouchableOpacity onPress={handlePress}>
            <Text>
                <AntDesign name="doubleleft" size={32} color="#161616" />
            </Text>
        </FloatingTouchableOpacity>
    )
}

export default ReturnFloatingComponent