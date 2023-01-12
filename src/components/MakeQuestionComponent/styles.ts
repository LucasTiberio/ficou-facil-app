import styled from "styled-components/native"

export const StyledTextInputHeight = 56;

interface iStyledTextInput {
    isLargeInput: boolean;
}

export const StyledTextInput = styled.TextInput`
    width: 300px;
    height: ${({ isLargeInput }: iStyledTextInput) => isLargeInput 
        ? StyledTextInputHeight * 3
        : StyledTextInputHeight
    }px;
    margin: 0 auto;

    padding: 10px;

    background-color: white;
    border-radius: 30px;
`