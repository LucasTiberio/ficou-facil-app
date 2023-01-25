import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dispatchAsync } from "../../shared/utils";
import SessionActions from "../../store/states/session/actions";

const useGetMeIntegration = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatchAsync(dispatch, SessionActions.getMe())
    }, [])
}

export default useGetMeIntegration;