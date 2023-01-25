import styled from "styled-components/native"

export const FloatingContainer = styled.View`
    position: absolute;
    bottom: 30px;

    width: 100%;
    margin: 0 auto;
`

export const StyledNavigation = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 24px;

    height: 60px;

    border-radius: 30px;
`

export const CameraWrapper = styled.TouchableOpacity`
    position: absolute;
    width: 100%;
    top: -40%;
    left: 45%;

    width: 70px;
    height: 70px;
    border-radius: 100%;
    
    background-color: #161616;

    align-items: center;
    justify-content: center;
`

export const LeftActionWrapper = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    left: 0;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-right: 10px;
    padding-left: 2px;

    height: 64px;
    width: 96px;

    background-color: white;
    border-radius: 2px;
`

export const RightActionWrapper = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    right: 0;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-left: 10px;
    padding-right: 2px;

    height: 64px;
    width: 96px;

    background-color: white;
    border-radius: 2px;
`