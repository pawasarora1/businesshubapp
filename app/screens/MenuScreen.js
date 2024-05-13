import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ScreenComponent from '../components/ScreenComponent';

function MenuScreen(props) {
  return (
    <ScreenComponent style={styles.container}>
      <Text>Menu</Text>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default MenuScreen;
