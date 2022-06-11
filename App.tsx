import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import WebViewScreen from './screens/WebViewScreen.js'

import navigatorScreen from './CustomNavigation.js'

const Tab = createMaterialBottomTabNavigator();

function App() {
  

  return (
    <NavigationContainer>

      <Tab.Navigator>    
        <Tab.Screen name="Home" component={navigatorScreen} />
        <Tab.Screen name="Web" component={WebViewScreen} />
      
      </Tab.Navigator>

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
