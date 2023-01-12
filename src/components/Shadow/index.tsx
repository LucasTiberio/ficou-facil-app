import { useMemo } from "react";
import { StyleProp, ViewStyle } from "react-native";
import DropShadow from "react-native-drop-shadow";

type Types = "small" | "medium"
interface Props {
    type: Types
    children: any;
}

const Shadow: React.FC<Props> = ({ type, children }) => {
    const assumedStyleByType = useMemo(() => {
        return ({
            medium: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            small: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0.2,
                shadowRadius: 2.5,
            },
        } as Record<Types, StyleProp<ViewStyle>>)[type]
    }, [])

    return (
        <DropShadow style={assumedStyleByType} >
            {children}
        </DropShadow>
    )
}

export default Shadow