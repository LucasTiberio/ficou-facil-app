import { Fragment, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import { Animated, StyleSheet } from "react-native";

import { Wrapper } from "./styles";
import Spacer from "../../Spacer";
import { LIST_SEPARATOR_SPACINGY } from "../../Historic/styles";
import { Props } from "./types";

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient)

const { width } = Dimensions.get("window")

const HistoricSkeleton = ({ height, quantity }: Props) => {
    const animatedValue = new Animated.Value(0)

    useEffect(() => {
        Animated.loop(Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        })).start()
    }, [])

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-width, width]
    })

    const AnimatedComponent = (_: number, index: number) => (
        <Fragment key={`animated-skeleton-${index}`}>
            <Wrapper height={height}>
                <AnimatedLG
                    colors={["rgba(160, 160, 160, 0.7)", "rgba(176, 176, 176, 0.7)", "rgba(176, 176, 176, 0.7)", "rgba(160, 160, 160, 0.7)"]}
                    start={{ x: 0, y: 0}}
                    end={{ x: 1, y: 1}}
                    style={{ 
                        ...StyleSheet.absoluteFill as Record<string, any>,
                        width: 50,
                        transform: [{ translateX }]
                    }}
                />
            </Wrapper>
            <Spacer spacingY={LIST_SEPARATOR_SPACINGY} />
        </Fragment>
    )

    return (
        <>
            {Array.from(Array(quantity).keys())
                .map(AnimatedComponent)
            }
        </>
    )
}

export default HistoricSkeleton