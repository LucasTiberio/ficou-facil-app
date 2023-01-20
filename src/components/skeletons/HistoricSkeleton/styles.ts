import styled from "styled-components/native"
import { HistoricItemBorderRadius } from "../../HistoricItem/styles";

interface iWrapper {
    height: number;
    width: number;
}
export const Wrapper = styled.View<iWrapper>`
    width: ${({ width }: iWrapper) => width ? `${width}px` : "100%"};
    height: ${({ height }: iWrapper) => height}px;

    background-color: rgba(0, 0, 0, 0.3);
    border-radius: ${HistoricItemBorderRadius};

    overflow: hidden;
`