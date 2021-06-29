import type { Node } from "react";
import React from "react";
import { SafeAreaView, StatusBar, Text, useColorScheme, View } from "react-native";

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Text>F*CK UP</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
