import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchHistoricIntegration from "../../integrations/api/fetchHistoricIntegration";
import QuestionActions from "../../store/states/questions/actions";
import QuestionsSelector from "../../store/states/questions/selectors";
import ThemeActions from "../../store/states/theme/actions";

const useFetchHistoryIntegration = () => {
    const dispatch = useDispatch();
    const historic = useSelector(QuestionsSelector.getHistoricQuestions);

    useEffect(() => {
        const fetchData = async () => {
            if (!!historic) {
                return;
            }

            dispatch(ThemeActions.showGlobalLoading())

            const data = await fetchHistoricIntegration();

            if (data) {
                const adaptedDataIntoQuestions = data.map(
                    ({ clientMessage, iaMessage }) => 
                    ({ clientMessage, iaMessage })
                )

                dispatch(QuestionActions.setQuestionsAction(adaptedDataIntoQuestions))
            }

            dispatch(ThemeActions.hideGlobalLoading())
        }

        fetchData();
    }, [])
}

export default useFetchHistoryIntegration;