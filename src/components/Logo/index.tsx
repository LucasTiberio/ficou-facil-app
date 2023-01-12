import { useMemo } from "react"
import { Image } from "react-native"
import { ImageWrapper } from "./styles"
import { Props, iLogoType } from "./types"

const Logo = ({
    type = "logo",
    useBackground,
    height,
}: Props) => {

    const imageSource = useMemo(() => {
        const sources = {
            "inline-logo": require("../../../assets/inline-logo.png"),
            logo: require("../../../assets/logo.png")
        }
        return sources[type]
    }, [type])
    
    return (
        <ImageWrapper useBackground={!!useBackground} height={height}>
            <Image
                style={{ width: 400, resizeMode: "contain" }}
                source={imageSource}
            />
        </ImageWrapper>
    )
}

export default Logo