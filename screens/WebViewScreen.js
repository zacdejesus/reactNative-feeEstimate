import React from 'react'
import { ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview';

const WebViewScreen = ({ route, navigation }) => {
  const LoadingIndicatorView = () => {
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
        source={{ uri: "https://www.paypal.com/webapps/mpp/paypal-fees" }}
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
      />
    )
}

export default WebViewScreen