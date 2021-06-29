import type { Node } from "react";
import React, { createRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/routes";

const navigationRef = createRef();
const routeNameRef = createRef();

const App: () => Node = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      children={RootNavigator()}
      onReady={onNavigationReady}
      onStateChange={onNavigationStateChange}/>
  );
};

const onNavigationReady = () => {
  const currentRouteName = navigationRef?.current?.getCurrentRoute()?.name;
  console.log('NavigationContainer:onReady():currentRouteName', currentRouteName);
  routeNameRef.current = currentRouteName;
};

const onNavigationStateChange = async () => {
  const previousRouteName = routeNameRef.current;
  const currentRouteName = navigationRef.current.getCurrentRoute().name;

  if (previousRouteName !== currentRouteName) {
    console.log('NavigationContainer:onNavigationStateChange()', previousRouteName, '->', currentRouteName);
    // 추적코드
  }

  // Save the current route name for later comparison
  routeNameRef.current = currentRouteName;
};

export default App;
