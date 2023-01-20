import { useState } from "react"
import { Alert, NativeSyntheticEvent, TextInputChangeEventData, TextInputSubmitEditingEventData } from "react-native"
import { useDispatch } from "react-redux"
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
        const { createdQuestion, dispatchAction } = await QuestionActions.createQuestionsAction({
            imageText: text
        })
        dispatch(dispatchAction())

        if (!createdQuestion) {
            Alert.alert("Erro ao fazer a sua pergunta. Tente novamente")
            return;
        }

        setText("")
        Alert.alert("Sua pergunta ficará salva no seu histórico junto com a resposta!")

        dispatch(QuestionActions.showQuestionModalAction(createdQuestion))
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