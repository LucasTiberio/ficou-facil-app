import { iGlobalStore } from "../../types";

const hasSession = (state: iGlobalStore) => state.session.hasSession

const getData = (state: iGlobalStore) => state.session.data

const SessionSelector = {
    hasSession,
    getData
}

export default SessionSelector;