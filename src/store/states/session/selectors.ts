import { iGlobalStore } from "../../types";

const hasSession = (state: iGlobalStore) => {
    console.log({ state })
    return state.session.hasSession
}

const SessionSelector = {
    hasSession
}

export default SessionSelector;