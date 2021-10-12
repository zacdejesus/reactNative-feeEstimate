import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Platform, 
  Image
} from "react-native";

const HomeScreen = ({ navigation }) => {
  
  const onPressSending = () => {
    navigation.navigate("CalculatorScreen", { isSending: true});
  };

  const onPressReceiving = () => {
    navigation.navigate("CalculatorScreen", { isSending: false});
  };

  return (
    <View style={styles.container}>
     
      <Image style={styles.imageF} source={require('../assets/pngwing.com.png')} />
      <StatusBar barStyle="dark-content"/>
      <View style={styles.top}>
         <Text style={styles.bottomText}>PayPal Fee Calculator</Text>
      </View>

      <TouchableOpacity onPress={onPressSending} style={styles.button}>
        <Text style={styles.buttonText}>I'm sending</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressReceiving} style={styles.button}>
        <Text style={styles.buttonText}>I'm receiving</Text>
      </TouchableOpacity>
      <View style={styles.bottom}>
         <Text style={styles.bottomText}>* Using Domestic fee rate of 3.49% + $.49</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b7bbf",
    alignItems: "center",
    justifyContent: "center",
  },
  imageF: {
    margin: 40,
    width: '15%',
    height: '15%'
  },
  buttonText : {
    fontSize: 20,
  },
  button: {
    backgroundColor: "white",
    margin: '10%',
    padding: 20,
    borderRadius: 13,
    fontWeight: "bold",
    fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : 'sans-serif',
  },
  bottomText: {
    fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : 'sans-serif',
    color: 'white',
    fontSize: 20,
  },
  top: {
    marginTop: 15
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 15,
    height: 10
  }
});

export default HomeScreen;
