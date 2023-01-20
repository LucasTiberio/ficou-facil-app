import { FlatList } from "react-native";
import Spacer from "../Spacer";
import HistoricItem from "../HistoricItem";
import { LIST_SEPARATOR_SPACINGY, Wrapper } from "./styles";
import HistoricDetailsModal from "../Modals/HistoricDetailsModal";
import { useDispatch, useSelector } from "react-redux";
import QuestionsSelector from "../../store/states/questions/selectors";
import QuestionActions from "../../store/states/questions/actions";
import { iQuestion } from "../../store/states/questions/types";
import HistoricSkeleton from "../skeletons/HistoricSkeleton";

const isLoading = false;

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

    if (isLoading) {
        return (
            <Wrapper>
                <HistoricSkeleton height={100} quantity={4} />
            </Wrapper>
        )
    }

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
                    ItemSeparatorComponent={() => <Spacer spacingY={LIST_SEPARATOR_SPACINGY} />}
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