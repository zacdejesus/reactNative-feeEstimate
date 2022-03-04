import React, { useState } from "react";
import CurrencyInput, { formatNumber } from "react-native-currency-input";
import { Keyboard } from "react-native";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
  Platform,
  View,
} from "react-native";

const CalculatorScreen = ({ route }) => {
  const [finalValue, setFinalValue] = useState(0);
  const [feeValue, setFeeValue] = useState(0);
  const [userInput, setUserInput] = useState(0.0);

  const { isSending, percentage, fixedFee } = route.params;

  const onChangeAmountValue = () => {
    let feeValueCal = (userInput * percentage) / 100;
    feeValueCal = +feeValueCal + +fixedFee;
    let finalValueCal;

    if (isSending) {
      finalValueCal = userInput - feeValueCal;
    } else {
      finalValueCal = userInput + feeValueCal;
    }

    const feeValueCalFormated = formatNumber(feeValueCal, {
      separator: ",",
      prefix: "$",
      precision: 2,
      delimiter: ".",
      signPosition: "beforePrefix",
    });

    const finalValueCalFormated = formatNumber(finalValueCal, {
      separator: ",",
      prefix: "$",
      precision: 2,
      delimiter: ".",
      signPosition: "beforePrefix",
    });

    setFeeValue(feeValueCalFormated);
    setFinalValue(finalValueCalFormated);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container2}>
          {isSending ? (
            <Text style={styles.text}>If sending</Text>
          ) : (
            <Text style={styles.text}>To receive</Text>
          )}

          <CurrencyInput
            style={styles.currenciesTextInput}
            value={userInput}
            onChangeValue={setUserInput}
            prefix="$"
            delimiter=","
            separator="."
            maxValue="1000000000"
            minValue="0"
            precision={2}
            onChangeText={(formattedValue) => {
              onChangeAmountValue(formattedValue);
            }}
          />

          {isSending ? (
            <Text style={styles.text}>the amount that will go to fees is</Text>
          ) : (
            <Text style={styles.text}>will go to fees</Text>
          )}

          <Text style={styles.currenciesText}>{feeValue}</Text>

          {isSending ? (
            <Text style={styles.text}>and the recipient will receive</Text>
          ) : (
            <Text style={styles.text}>this amount should be sent</Text>
          )}

          <Text style={styles.currenciesText}>{finalValue}</Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#37a3cf",
    alignItems: "center",
    justifyContent: "center",
  },
  currenciesText: {
    fontFamily: Platform.OS === "ios" ? "Arial Hebrew" : "sans-serif",
    backgroundColor: "white",
    fontSize: 20,
    margin: 20,
    padding: 15,
    borderRadius: 13,
    paddingTop: 20,
    marginTop: 20,
    overflow: "hidden",
  },
  currenciesTextInput: {
    fontFamily: Platform.OS === "ios" ? "Arial Hebrew" : "sans-serif",
    backgroundColor: "white",
    fontSize: 20,
    margin: 20,
    padding: 15,
    borderRadius: 13,
    paddingTop: 20,
    marginTop: 20,
  },
  text: {
    fontFamily: Platform.OS === "ios" ? "Arial Hebrew" : "sans-serif",
    fontSize: 22,
    color: "white",
  },
});

export default CalculatorScreen;
