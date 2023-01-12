import { Camera } from "expo-camera"
import styled from "styled-components/native"

export const StyledExpoCamera = styled(Camera)`
    width: 100%;
    flex: 1;
`

export const TakePictureButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 20px;
    left: 40%;
    
    width: 70px;
    height: 70px;

    border-radius: 100%;
    background-color: white;
`

export const RetakePictureButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 20px;
    left: 10%;

    align-items: center;
    justify-content: center;
    
    width: 70px;
    height: 70px;

    border-radius: 100%;
    background-color: white;
`

export const SendPictureButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 20px;
    right: 10%;

    align-items: center;
    justify-content: center;
    
    width: 70px;
    height: 70px;

    border-radius: 100%;
    background-color: white;
`
