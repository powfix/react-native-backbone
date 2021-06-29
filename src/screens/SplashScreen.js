import React from "react";
import { Text, View } from "react-native";
import { inject } from "mobx-react/src/inject";

class Screen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center'}}>
        <Text>SplashScreen</Text>
      </View>
    )
  }
}

export default inject('sessionStore')(Screen);