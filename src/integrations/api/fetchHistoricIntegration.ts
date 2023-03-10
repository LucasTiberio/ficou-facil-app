import AsyncStorage from "@react-native-async-storage/async-storage";
import storageKeys from "../../shared/storageKeys";

export type iFetchHistoricIntegration = {
    isPicture: boolean;
    createdAt: string;
    iaMessage: string;
    clientMessage: string;
}

const fetchHistoricIntegration = async () => {
    const token = await AsyncStorage.getItem(storageKeys.token) || ""

    try {
        const { historic } = await fetch("http://localhost:3002/api/user-historic", {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              "X-FF-Token": token,
            },
        }).then(res => res.json())

        return historic as iFetchHistoricIntegration[];
    } catch (error) {
        console.error("fetchHistoricIntegration Error", error)
        return undefined;
    }
}

export default fetchHistoricIntegration;