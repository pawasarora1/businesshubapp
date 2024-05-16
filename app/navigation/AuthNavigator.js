import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import constants from '../config/constants';
import OnboardingScreen from '../screens/OnboardingScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import RecoverPasswordScreen from '../screens/RecoverPasswordScreen';

function AuthNavigator(props) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!constants.isOnboardingShown && (
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      )}
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
