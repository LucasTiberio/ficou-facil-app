import { iAction } from "../../types";
import { iSessionState, SessionActionTypes } from "./types";

const SESSION_REDUCER_INITIAL_STATE: iSessionState = {
    data: null,
    hasSession: false,
}

const SessionReducer = (state = SESSION_REDUCER_INITIAL_STATE, action: iAction<SessionActionTypes>): iSessionState => {
    switch(action.type) {
        case "SET_DATA":
            return { ...state, data: action.payload as iData, hasSession: !!action.payload }

        default:
            return state;
    }
}

export default SessionReducer;