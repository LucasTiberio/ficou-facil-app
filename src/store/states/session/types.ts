export type SessionActionTypes = "SET_DATA"

export interface iUser {
    id: string;
    name: string;
    email: string;
    picture: string;
    locale: string;
    maxDate: string;
}

export interface iData {
    token: string;
    user?: iUser;
}

export interface iSessionState {
    data: iData | null;
    hasSession: boolean;
}