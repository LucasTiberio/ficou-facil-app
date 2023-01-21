import { Dispatch } from "react";
import { AnyAction } from "redux";

type DispatchFunction = (dispatch: any, state?: any) => void

export const dispatchAsync = (dispatch: Dispatch<AnyAction>, func: DispatchFunction) => {
    dispatch(func as any)
}