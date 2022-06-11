import HomeScreen from "./screens/HomeScreen.js";
import CalculatorScreen from "./screens/CalculatorScreen.js";
import WebViewScreen from './screens/WebViewScreen.js'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

const FirstScreenNavigator = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="CalculatorScreen"
            component={CalculatorScreen}
            options={{
                title: "Calculator",
                headerStyle: {
                    backgroundColor: "#37a3cf",
                },
                headerTintColor: "white",
            }}
        />

        <Stack.Screen
            name="WebViewScreen"
            component={WebViewScreen}
            options={{
                title: "PayPal fees",
                headerStyle: {
                    backgroundColor: "#37a3cf",
                },
                headerTintColor: "white",
            }}
        />

    </Stack.Navigator>)

}

export default FirstScreenNavigator;