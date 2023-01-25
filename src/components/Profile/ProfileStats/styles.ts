import styled from "styled-components/native"

export const Wrapper = styled.View`
    background-color: #3d3935;
    width: 90%;
    padding: 26px 14px;
    
    border-radius: 30px;

    flex-direction: row;

    margin: 0 auto;
    overflow: hidden;
`

export const StatsItem = styled.View`
    flex: 1;

    align-items: center;
    justify-content: center;
`

export const StatsItemLabel = styled.Text`
    font-size: 12px;
    color: #c0c0c0;
`

export const StatsItemValue = styled.Text`
    margin-top: 12px;
    color: white;
`

export const MiddleWaveTop = styled.View`
    position: absolute;
    top: 0px;
    left: 50%;

    height: 30px;
    width: 20px;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;

    background-color: white;
`

export const MiddleWaveBottom = styled.View`
    position: absolute;
    bottom: 0px;
    left: 50%;

    height: 30px;
    width: 20px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;

    background-color: white;
`