import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen.js";
import CalculatorScreen from "./screens/CalculatorScreen.js";
import WebViewScreen from './screens/WebViewScreen.js'

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
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

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b7bbf",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
