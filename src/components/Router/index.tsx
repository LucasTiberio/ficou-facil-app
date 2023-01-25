import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import useToggleNavigationBarObserver from "../../hooks/useToggleNavigationBarObserver";
import SessionSelectors from "../../store/states/session/selectors";
import { Props } from "./types";

const Stack = createNativeStackNavigator();

const Router = ({ routes }: Props) => {
    const hasSession = useSelector(SessionSelectors.hasSession)
    useToggleNavigationBarObserver(hasSession);

    const initialRouteName = useMemo(() => {
        if (!hasSession) {
            return "Login"
        }

        return "Home"
    }, [])

    return (
        <>
            <Stack.Navigator
                initialRouteName={initialRouteName}
                screenOptions={{
                    header: () => null,
                }}
            >
                {routes.map(({ name, component, needSession }) => {
                    if (needSession && !hasSession) {
                        return null;
                    }

                    return (
                        <Stack.Screen
                            key={`route-item${name}`}
                            name={name}
                            component={component}
                        />
                    )
                })}
            </Stack.Navigator>
        </>
    )
}

export default Router