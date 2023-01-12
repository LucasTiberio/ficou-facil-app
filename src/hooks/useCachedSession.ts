import storageKeys from "../shared/storageKeys";
import useCache from "./useCache";

const useCachedSession = (alreadyHasSession: boolean) => {
    const cache = useCache<iData>(storageKeys.token, !alreadyHasSession)

    return cache;
}

export default useCachedSession;