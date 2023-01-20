import { iGlobalStore } from "../../types";

const hasSession = (state: iGlobalStore) => state.session.hasSession

const SessionSelector = {
    hasSession
}

export default SessionSelector;