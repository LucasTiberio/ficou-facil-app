import { View } from "react-native"

interface Props {
    spacingX?: number | string;
    spacingY?: number | string;
}

const Spacer = ({ spacingX, spacingY }: Props) => {
    return <View style={{ height: 0, marginTop: spacingY, marginLeft: spacingX }} />
}

export default Spacer