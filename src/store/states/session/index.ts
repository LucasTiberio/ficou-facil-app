import { useMemo } from "react";
import useCachedSession from "../../../hooks/useCachedSession";

const SessionState = (dataUseState: [iData | undefined, React.Dispatch<React.SetStateAction<iData | undefined>>]): iStateSession => {
    const [data, setData] = dataUseState

    const hasSession = useMemo(() => data !== undefined && !!data.token, [data])

    useCachedSession(hasSession)

    return {
        data,
        setData,
        hasSession: data !== undefined,
    }
}

export default SessionState;