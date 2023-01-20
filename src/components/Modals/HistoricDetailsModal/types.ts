import { iQuestion } from "../../../store/states/questions/types";

export interface Props {
    handleCloseModal: () => void;
    isVisible: boolean;
    details: iQuestion;
}