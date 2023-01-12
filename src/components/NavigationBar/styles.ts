import styled from "styled-components/native"

export const FloatingContainer = styled.View`
    position: absolute;
    bottom: 30px;

    width: 80%;
    margin: 0 auto;
`

export const StyledNavigation = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    height: 60px;

    background-color: white;
    border-radius: 30px;
`

export const CameraWrapper = styled.TouchableOpacity`
    position: absolute;
    width: 100%;
    top: -50%;
    left: 40%;

    width: 70px;
    height: 70px;
    border-radius: 100%;
    
    background-color: black;

    align-items: center;
    justify-content: center;
`