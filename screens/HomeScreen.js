import React, { useState } from "react";
import CurrencyInput, { formatNumber } from "react-native-currency-input";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Platform,
  Image,
  TextInput,
} from "react-native";

const HomeScreen = ({ navigation }) => {

  const [selectedPercentage, setSelectedPercentage] = useState(0);
  const [selectedFixedFeeAmount, setSelectedFixedFeeAmount] = useState();

  const onPressSending = () => navigation.navigate("CalculatorScreen", { isSending: true, percentage: selectedPercentage, fixedFee: selectedFixedFeeAmount })
  const onPressReceiving = () => navigation.navigate("CalculatorScreen", { isSending: false, percentage: selectedPercentage, fixedFee: selectedFixedFeeAmount})
  
  const onTextChangedFixed = (text) => setSelectedFixedFeeAmount(text.replace(/[^0-9,.]/g, ""))
  const onTextChangedPercentenge = (text) => setSelectedPercentage(text)
  

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageF}
        source={require("../assets/pngwing.com.png")}
      />
      <StatusBar barStyle="dark-content" />
      <View style={styles.top}>
        <Text style={styles.buttonText}>PayPal Fee Calculator</Text>
      </View>

      <TouchableOpacity onPress={onPressSending} style={styles.button}>
        <Text style={styles.buttonText}>I'm sending</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressReceiving} style={styles.button}>
        <Text style={styles.buttonText}>I'm receiving</Text>
      </TouchableOpacity>

      <View style={styles.inputView}>
        {/* <TextInput
          style={styles.feesInputText}
          keyboardType="numeric"
          onChangeText={(text) => onTextChangedPercentenge(text)}
          value={selectedPercentage}
        /> */}

        <CurrencyInput
          style={styles.feesInputText}
          value={selectedPercentage}
          onChangeValue={setSelectedPercentage}
          prefix="$"
          delimiter=","
          separator="."
          maxValue="10"
          minValue="0"
          precision={1}
        />

        <TextInput
          style={styles.feesInputText}
          keyboardType="numeric"
          onChangeText={(text) => onTextChangedFixed(text)}
          value={selectedFixedFeeAmount}
        />
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
    width: "15%",
    height: "15%",
  },
  buttonText: {
    fontSize: 20,
  },
  button: {
    backgroundColor: "white",
    margin: "10%",
    padding: 20,
    borderRadius: 13,
    fontWeight: "bold",
    fontFamily: Platform.OS === "ios" ? "Arial Hebrew" : "sans-serif",
  },
  top: {
    marginTop: 15,
  },
  inputView: {
    flex: 1,
    flexDirection: "row",
  },
  feesInputText: {
    margin: 40,
    width: "20%",
    height: "15%",
    backgroundColor: "white",
    borderRadius: 10,
  },
});

export default HomeScreen;
