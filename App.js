import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import AuthContext from './app/auth/AuthContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';

function App(props) {
  const [user, setUser] = useState(123);
  return (
    <AuthContext.Provider value={{user, setUser}}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default App;
