import React from "react";
import { Text, View } from "react-native";


class Screen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center'}}>
        <Text>SplashScreen</Text>
      </View>
    )
  }
}

export default Screen;