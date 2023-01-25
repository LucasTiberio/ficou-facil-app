import getMeIntegration from "../../../integrations/api/getMeIntegration";
import { iAction, iGlobalStore } from "../../types";
import ThemeActions from "../theme/actions";
import { iData, SessionActionTypes } from "./types";
import { adaptDataIntoUser } from "./utils";

const setDataAction = (data: iData): iAction<SessionActionTypes, iData> => {
    return {
        type: "SET_DATA",
        payload: data
    }
}

const getMe = () => {
    return (dispatch: any, getState: any) => {
        const { data: storeUserData } = (getState() as iGlobalStore).session
        
        if (storeUserData?.user) {
            return;
        }

        dispatch(ThemeActions.showGlobalLoading())

        getMeIntegration().then(data => {
            if (!data?._id) {
                return
            }

            const adaptedDataIntoUser = adaptDataIntoUser(data)

            dispatch(setDataAction({
                user: adaptedDataIntoUser,
                token: storeUserData?.token || ""
            }))

            dispatch(ThemeActions.hideGlobalLoading())
        })
    }
}

const resetSession = (): iAction<SessionActionTypes, undefined> => {
    return {
        type: "RESET"
    }
}

const SessionActions = {
    setDataAction,
    getMe,
    resetSession,
}

export default SessionActions;