import React, { useState } from "react";
import CurrencyInput from "react-native-currency-input";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,
  ImageBackground,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions
} from "react-native";
import { AdMobBanner } from "expo-ads-admob";
const window = Dimensions.get('window');
import { useKeyboard } from '../modules/useKeyboard';
    


const HomeScreen = ({ navigation }) => {
  
  const isKeyBoardOpen = useKeyboard();

  const [selectedPercentage, setSelectedPercentage] = useState(5.4);
  const [selectedFixedFeeAmount, setSelectedFixedFeeAmount] = useState(0.3);
  const adID = Platform.OS === "ios" ? "" : ""  // ads units here     

  const onPressSending = () =>
    navigation.navigate("CalculatorScreen", {
      isSending: true,
      percentage: selectedPercentage,
      fixedFee: selectedFixedFeeAmount,
    });
  const onPressReceiving = () =>
    navigation.navigate("CalculatorScreen", {
      isSending: false,
      percentage: selectedPercentage,
      fixedFee: selectedFixedFeeAmount,
    });

  const onTextChangedPercentenge = (text) => setSelectedPercentage(text);

  const handleButtonPress = () => navigation.navigate("WebViewScreen");

  return (
    <TouchableWithoutFeedback 
      onPress={Keyboard.dismiss} 
      keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
      accessible={false}>
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background_blue.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.centeredView}>
          <Image
            style={styles.logoImageF}
            source={require("../assets/pngwing.com.png")}
          />
        </View>

        <View style={styles.titleTopView}>
          <Text style={styles.titleTopText}>PayPal Fee Calculator</Text>
        </View>

        <View style={styles.centeredView}>
          <TouchableOpacity
            onPress={onPressSending}
            style={styles.navigationButton}
          >
            <Text style={styles.buttonText}>I'm sending</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onPressReceiving}
            style={styles.navigationButton}
          >
            <Text style={styles.buttonText}>I'm receiving</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputView}>
          <CurrencyInput
            style={styles.feesInputText}
            value={selectedPercentage}
            onChangeValue={onTextChangedPercentenge}
            prefix=""
            delimiter=","
            separator="."
            maxValue="10"
            minValue="0"
            precision={1}
          />

          <Text style={styles.feeText}> % plus $ </Text>

          <CurrencyInput
            style={styles.feesInputText}
            value={selectedFixedFeeAmount}
            onChangeValue={setSelectedFixedFeeAmount}
            prefix=""
            delimiter=","
            separator="."
            maxValue="10"
            minValue="0"
            precision={1}
          />

          <Text style={styles.feeText}> USD</Text>
        </View>

        

        <View style={{...styles.centeredView, bottom: isKeyBoardOpen === true ? window.height : 10}}>
          <Pressable
            style={styles.infoFeesPresable}
            onPress={handleButtonPress}
          >
            <Text style={styles.buttonInfoText}>PayPal fees</Text>
          </Pressable>
        </View>
        <View style={styles.addBanner}>
          <AdMobBanner
            bannerSize= "banner"
            adUnitID = {adID}  
            servePersonalizedAds
          />
        </View>
      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  centeredView: {
    marginTop: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImageF: {
    width: 150,
    height: 140,
  },
  buttonText: {
    fontSize: 20,
  },
  navigationButton: {
    backgroundColor: "white",
    marginTop: "7%",
    marginBottom: "3%",
    padding: 15,
    width: 300,
    alignItems: "center",
    borderRadius: 13,
    fontWeight: "bold",
    fontFamily: Platform.OS === "ios" ? "Arial Hebrew" : "sans-serif",
  },
  titleTopView: {
    marginTop: 15,
    alignItems: "center",
  },
  inputView: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 70,
    marginBottom: "5%",
    justifyContent: "center",
  },
  feesInputText: {
    paddingLeft: 10,
    fontSize: 21,
    marginTop: 5,
    margin: 5,
    width: "20%",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#778899",
    height: 38,
  },
  feeText: {
    fontSize: 22,
    height: 30,
    marginTop: 12,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  infoFeesPresable: {
    //bottom: isKeyBoardOpen === true ? window.height : -window.height,
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
    width: 300,
    paddingHorizontal: 32,
    borderRadius: 13,
    elevation: 3,
  },
  buttonInfoText: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
    textAlign: "center",
    fontSize: 20,
    padding: 15,
  },
  bannerView: {
    backgroundColor: "white",
    marginTop: 90,
    paddingBottom: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  titleTopText: {
    fontSize: 27,
    color: "white",
  },
  addBanner: {
    marginTop: "13%",
    marginBottom: 10,
    alignItems: "center",
  },
});

export default HomeScreen;
