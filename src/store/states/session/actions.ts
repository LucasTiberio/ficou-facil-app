import { iAction } from "../../types";
import { iData, SessionActionTypes } from "./types";

const setDataAction = (data: iData): iAction<SessionActionTypes, iData> => {
    return {
        type: "SET_DATA",
        payload: data
    }
}

const SessionActions = {
    setDataAction,
}

export default SessionActions;