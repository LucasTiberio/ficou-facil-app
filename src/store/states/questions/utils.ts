import { iFetchHistoricIntegration } from "../../../integrations/api/fetchHistoricIntegration";
import { iQuestion } from "./types";

export const adaptDataIntoQuestions = ({
    clientMessage,
    iaMessage,
    isPicture
}: iFetchHistoricIntegration): iQuestion => ({
    clientMessage,
    iaMessage,
    isPicture
})