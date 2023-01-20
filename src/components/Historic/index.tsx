import { FlatList } from "react-native";
import Spacer from "../Spacer";
import HistoricItem from "../HistoricItem";
import { Wrapper } from "./styles";
import HistoricDetailsModal from "../Modals/HistoricDetailsModal";
import { useDispatch, useSelector } from "react-redux";
import QuestionsSelector from "../../store/states/questions/selectors";
import QuestionActions from "../../store/states/questions/actions";
import { iQuestion } from "../../store/states/questions/types";

const Historic = () => {
    const dispatch = useDispatch();
    const displayedQuestion = useSelector(QuestionsSelector.getDisplayedQuestion)
    const questions = useSelector(QuestionsSelector.getHistoricQuestions)

    const hideModalQuestion = () => {
        dispatch(QuestionActions.hideQuestionModalAction())
    }

    const renderFlatListItem = (data: iQuestion, index: number) => (
        <HistoricItem
            data={data}
            key={`historic-item${index}`}
        />
    )

    return (
        <>
            <HistoricDetailsModal
                isVisible={!!displayedQuestion}
                details={displayedQuestion}
                handleCloseModal={hideModalQuestion}
            />
            <Wrapper>
                <FlatList
                    style={{ width: "100%" }}
                    data={questions}
                    keyExtractor={item => item?.clientMessage || ""}
                    ItemSeparatorComponent={() => <Spacer spacingY={15} />}
                    renderItem={({ item, index }) => item 
                        ? renderFlatListItem(item, index) 
                        : null
                    }
                />
            </Wrapper>
        </>
    )
}

export default Historic;