import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useMemo } from "react";
import { useStore } from "../../store";
import { Props } from "./types";

const Stack = createNativeStackNavigator();

const Router = ({ routes }: Props) => {
    const { session } = useStore()

    const initialRouteName = useMemo(() => {
        if (!session?.hasSession) {
            return "Login"
        }

        return "Home"
    }, [])

    return (
        <Stack.Navigator
            initialRouteName={initialRouteName}
            screenOptions={{
                header: () => null,
            }}
        >
            {routes.map(({ name, component, needSession }) => {
                if (needSession && !session?.hasSession) {
                    return null;
                }

                return (
                    <Stack.Screen
                        key={`route-item${name}`}
                        name={name}
                    >
                        {component}
                    </Stack.Screen>
                )
            })}
        </Stack.Navigator>
    )
}

export default Router