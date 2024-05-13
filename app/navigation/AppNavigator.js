import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import AddsListScreen from '../screens/AddsListScreen';

function AppNavigator(props) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="AddsList" component={AddsListScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
