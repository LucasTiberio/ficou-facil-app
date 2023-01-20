import { Text } from "react-native"
import { Swipeable } from "react-native-gesture-handler"

import Shadow from "../Shadow"
import HistoricItemLeftActions from "./components/ShowDetailsSwipeableActionComponent"
import { Wrapper } from "./styles"
import { Props } from "./types"
import { useDispatch } from "react-redux"
import QuestionActions from "../../store/states/questions/actions"

const HistoricItem = ({ data }: Props) => {
    const dispatch = useDispatch();

    const handleShowDetails = () => {
        dispatch(QuestionActions.showQuestionModalAction(data))
    }

    return (
        <Swipeable
            renderRightActions={() => <HistoricItemLeftActions onPress={handleShowDetails} />}
        >
            <Shadow type="small">
                <Wrapper>
                    <Text>
                        {data?.clientMessage?.slice(0, 190)}
                    </Text>
                </Wrapper>
            </Shadow>
        </Swipeable>
    )
}

export default HistoricItem