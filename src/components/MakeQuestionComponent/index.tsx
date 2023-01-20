import { useState } from "react"
import { NativeSyntheticEvent, TextInputChangeEventData, TextInputSubmitEditingEventData } from "react-native"
import { useDispatch } from "react-redux"
import { dispatchAsync } from "../../shared/utils"
import QuestionActions from "../../store/states/questions/actions"
import Shadow from "../Shadow"
import { StyledTextInput } from "./styles"

const MakeQuestionComponent = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleTextInputChange = ({ nativeEvent: { text }}: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setText(text)
    }

    const handleSubmitTextInputEditing = async ({ nativeEvent: { text } }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        dispatchAsync(dispatch, QuestionActions.createQuestionsAction({
            imageText: text
        }, true))

        setText("")
    }

    return (
        <Shadow type="medium">
            <StyledTextInput
                placeholder="Escreva sua pergunta"
                value={text}
                onChange={handleTextInputChange}
                onSubmitEditing={handleSubmitTextInputEditing}
            />
        </Shadow>
    )
}

export default MakeQuestionComponent