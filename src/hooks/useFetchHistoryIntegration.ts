import { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchHistoricIntegration from "../integrations/api/fetchHistoricIntegration";
import QuestionActions from "../store/states/questions/actions";

const useFetchHistoryIntegration = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchHistoricIntegration();

            if (data) {
                const adaptedDataIntoQuestions = data.map(
                    ({ clientMessage, iaMessage }) => 
                    ({ clientMessage, iaMessage })
                )

                dispatch(QuestionActions.setQuestionsAction(adaptedDataIntoQuestions))
            }
        }

        fetchData();
    }, [])
}

export default useFetchHistoryIntegration;