import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import SignInScreen from "../screens/SignInScreen";

const Stack = createStackNavigator();

const ContainerStack = () => (
	<Stack.Navigator
		initialRouteName={'SplashScreen'}
		screenOptions={{gestureEnabled: true, headerShown: false}}>
		<Stack.Screen name={'SplashScreen'} component={SplashScreen} options={{title: 'Splash'}}/>
		<Stack.Screen name={'SignInScreen'} component={SignInScreen} options={{title: 'Sign-In'}}/>
	</Stack.Navigator>
);

export default ContainerStack;