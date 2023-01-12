import { Text } from "react-native"
import { Swipeable } from "react-native-gesture-handler"

import Shadow from "../Shadow"
import HistoricItemLeftActions from "./components/ShowDetailsSwipeableActionComponent"
import { Wrapper } from "./styles"
import { Props } from "./types"
import { useStore } from "../../store";

const HistoricItem = ({ data }: Props) => {
    const { question } = useStore()

    const handleShowDetails = () => {
        question.showModalQuestion(data)
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