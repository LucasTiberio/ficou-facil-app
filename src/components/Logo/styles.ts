import styled from "styled-components/native"

type iImageWrapper = {
    useBackground: boolean;
    height?: boolean;
}

export const ImageWrapper = styled.View`
    width: 100%;
    background-color: ${({ useBackground }: iImageWrapper) => 
        useBackground ? "#3d3935" : ""
    };

    align-items: center;
    justify-content: center;

    height: ${({ height }: iImageWrapper) => 
        height ? `${height}%` : "auto"
    };
`
