import styled from "styled-components/native"
import { StyledTextInputHeight } from "../../components/MakeQuestionComponent/styles"

export const Container = styled.View`
    position: relative;
    
    flex: 1;
    width: 100%;
    align-items: center;
`

export const VerticalOffsetWrapper = styled.View`
    top: ${StyledTextInputHeight / -2}px;
`