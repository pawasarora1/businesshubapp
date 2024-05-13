import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ScreenComponent from '../components/ScreenComponent';

function FavouritesScreen(props) {
  return (
    <ScreenComponent style={styles.container}>
      <Text>Favourites</Text>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default FavouritesScreen;
