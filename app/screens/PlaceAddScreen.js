import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ScreenComponent from '../components/ScreenComponent';

function PlaceAddScreen(props) {
  return (
    <ScreenComponent style={styles.container}>
      <Text>PlaceAdd</Text>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default PlaceAddScreen;
