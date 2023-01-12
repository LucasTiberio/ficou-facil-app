import { useEffect } from "react";
import fetchHistoricIntegration from "../integrations/api/fetchHistoricIntegration";
import { useStore } from "../store";

const useFetchHistoryIntegration = () => {
    const { question } = useStore();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchHistoricIntegration();

            if (data) {
                const adaptedDataIntoQuestions = data.map(
                    ({ clientMessage, iaMessage }) => 
                    ({ clientMessage, iaMessage })
                )

                question.setQuestions(adaptedDataIntoQuestions)
            }
        }

        fetchData();
    }, [])
}

export default useFetchHistoryIntegration;