import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dispatchAsync } from "../../shared/utils";
import QuestionActions from "../../store/states/questions/actions";

const useFetchHistoryIntegration = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatchAsync(dispatch, QuestionActions.getUserHistoric())
    }, [])
}

export default useFetchHistoryIntegration;