import styled from "styled-components/native"

export const HistoricItemBorderRadius = "6px"

export const Wrapper = styled.View`
    position: relative;

    width: 100%;
    min-height: 110px;

    padding: 12px;
    border-radius: ${HistoricItemBorderRadius};

    background-color: white;

    border-right-width: 8px;
    border-right-color: #3d3935;
    border-right-style: solid;
`