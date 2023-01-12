import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useRef, useState } from "react";

const useCache = <T>(storageKey: string, shouldLoad?: boolean) => {
    const loadedRef = useRef(false);

    const [data, setData] = useState<T | undefined>()

    useEffect(() => {
        const fetchCache = async () => {
            const { current: isLoaded } = loadedRef

            if (!shouldLoad || !!isLoaded) {
                return;
            }

            const cachedData = await AsyncStorage.getItem(storageKey)

            if (!cachedData) {
                return;
            }

            loadedRef.current = true
            setData(cachedData as T)
        }

        fetchCache()
    }, [])

    return {
        loaded: !!loadedRef.current,
        data,
    }
}

export default useCache;