import AsyncStorage from "@react-native-async-storage/async-storage";
import storageKeys from "../../shared/storageKeys";
import { iQuestion } from "../../store/states/questions/types";

export type iGetMeIntegration = {
    _id: string;
    name: string;
    email: string;
    picture: string;
    locale: string;
    maxDate: string;
    historic: iQuestion[]
}

const getMeIntegration = async () => {
    const token = await AsyncStorage.getItem(storageKeys.token) || ""

    try {
        const userData = await fetch("http://localhost:3002/api/me", {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              "X-FF-Token": token,
            },
        }).then(res => res.json())

        return userData as iGetMeIntegration;
    } catch (error) {
        console.error("getMeIntegration Error", error)
        return undefined;
    }
}

export default getMeIntegration;