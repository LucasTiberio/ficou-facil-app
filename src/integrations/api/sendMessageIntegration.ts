import AsyncStorage from "@react-native-async-storage/async-storage";
import storageKeys from "../../shared/storageKeys";

type iSendMessageIntegration = {
    iaMessage: string;
    clientMessage: string;
}

const sendMessageIntegration = async ({
    imageBase64 = "",
    imageText = ""
}) => {
    const token =  await AsyncStorage.getItem(storageKeys.token) || ""

    try {
        const dataJson = await fetch("http://192.168.0.3:3002/api/send-message", {
            method: "POST",
            body: JSON.stringify({ imageText, imageBase64 }),
            headers: {
              'Content-Type': 'application/json',
              "X-FF-Token": token,
            },
        }).then(res => res.json())

        return dataJson as iSendMessageIntegration;
    } catch (error) {
        console.error("sendMessageIntegration Error", error)
        return undefined;
    }
}

export default sendMessageIntegration;