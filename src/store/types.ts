import { iQuestionState } from "./states/questions/types";
import { iSessionState } from "./states/session/types";
import { iThemeState } from "./states/theme/types";

type iPayloadType = Record<string, any> | boolean | string | number

export interface iAction<Type, Payload = iPayloadType> {
    type: Type;
    payload: Payload
    meta?: Record<string, any>
}

export interface iGlobalStore {
    questions: iQuestionState
    theme: iThemeState
    session: iSessionState
}