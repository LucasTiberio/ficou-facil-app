export type SessionActionTypes = "SET_DATA"

export type iData = {
    token: string;
    user?: any;
}

export interface iSessionState {
    data: iData | null;
    hasSession: boolean;
}