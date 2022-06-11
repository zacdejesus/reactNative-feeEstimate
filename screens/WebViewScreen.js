import React from 'react'
import { NativeModules, Platform, ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview';

const WebViewScreen = ({ route: any, navigation }) => {
  const LoadingIndicatorView = () => {

    const deviceLanguage = Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
              NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
            : NativeModules.I18nManager.localeIdentifier;

    return (
      <ActivityIndicator
        color='#0a1142'
        size='large'
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      />
    )
  }

    return (
      <WebView
        source={{ uri: "https://www.paypal.com/${deviceLanguage}/webapps/mpp/paypal-fees" }}
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
      />
    )
}

export default WebViewScreen