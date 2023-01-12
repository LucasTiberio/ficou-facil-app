import { Modal, Text } from "react-native"
import Spacer from "../../Spacer";
import CloseModalButton from "../components/CloseModalButton";
import { Wrapper } from "./styles";
import { Props } from "./types";

const HistoricDetailsModal = ({ 
    details, 
    handleCloseModal, 
    isVisible 
}: Props) => {
    return (
        <Modal
            animationType="slide"
            visible={isVisible}
            onRequestClose={handleCloseModal}
        >
            <Wrapper>
                <Text>{details?.clientMessage}</Text>
                
                <Spacer spacingY={30} />
                
                <Text style={{ fontWeight: "bold" }}>Resposta:</Text>
                <Text>{details?.iaMessage}</Text>
            </Wrapper>

            <CloseModalButton onPress={handleCloseModal} />
        </Modal>
    )
}

export default HistoricDetailsModal