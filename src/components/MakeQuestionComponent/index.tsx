import { useState } from "react"
import { Alert, NativeSyntheticEvent, TextInputChangeEventData, TextInputSubmitEditingEventData } from "react-native"
import { useStore } from "../../store"
import Shadow from "../Shadow"
import { StyledTextInput } from "./styles"

const MakeQuestionComponent = () => {
    const { question } = useStore()
    const [text, setText] = useState("");

    const handleTextInputChange = ({ nativeEvent: { text }}: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setText(text)
    }

    const handleSubmitTextInputEditing = async ({ nativeEvent: { text } }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        const createdQuestion = await question.createQuestion({
            imageText: text
        })

        if (!createdQuestion) {
            Alert.alert("Erro ao fazer a sua pergunta. Tente novamente")
            return;
        }

        setText("")
        question.showModalQuestion(createdQuestion)

        Alert.alert("Sua pergunta ficará salva no seu histórico junto com a resposta!")
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