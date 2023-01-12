import { FlatList } from "react-native";
import Spacer from "../Spacer";
import HistoricItem from "../HistoricItem";
import { Wrapper } from "./styles";
import HistoricDetailsModal from "../Modals/HistoricDetailsModal";
import { useStore } from "../../store";

const Historic = () => {
    const { question } = useStore()

    const renderFlatListItem = (data: iQuestion, index: number) => (
        <HistoricItem
            data={data}
            key={`historic-item${index}`}
        />
    )

    return (
        <>
            <HistoricDetailsModal
                isVisible={!!question.modalQuestion}
                details={question.modalQuestion}
                handleCloseModal={question.hideModalQuestion}
            />
            <Wrapper>
                <FlatList
                    style={{ width: "100%" }}
                    data={question.questions}
                    ItemSeparatorComponent={() => <Spacer spacingY={15} />}
                    renderItem={({ item, index }) => renderFlatListItem(item, index)}
                />
            </Wrapper>
        </>
    )
}

export default Historic;