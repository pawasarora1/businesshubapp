import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import AddsListScreen from '../screens/AddsListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import SavedSearchesScreen from '../screens/SavedSearchesScreen';
import MyAdsScreen from '../screens/MyAdsScreen';
import ProfilePublicScreen from '../screens/ProfilePublicScreen';
import FavouritesDetailsScreen from '../screens/FavouritesDetailsScreen';

function AppNavigator(props) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="AddsList" component={AddsListScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="SavedSearches" component={SavedSearchesScreen} />
      <Stack.Screen name="MyAds" component={MyAdsScreen} />
      <Stack.Screen name="ProfilePublic" component={ProfilePublicScreen} />
      <Stack.Screen
        name="FavouritesDetails"
        component={FavouritesDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
