import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import FavouriteCard from '../components/FavouriteCard';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';
import {adds} from '../Utils/data';

function FavouritesScreen(props) {
  return (
    <ScreenComponent style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.fvt}>My Favourites</Text>
      </View>
      <FlatList
        contentContainerStyle={{paddingTop: 10}}
        data={adds}
        renderItem={({item}) => {
          return <FavouriteCard item={item} />;
        }}
      />
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: colors.white,
    padding: 15,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowOffset: {height: 5, width: 0},
  },
  fvt: {
    fontSize: 18,
    fontWeight: '600',
  },
});
export default FavouritesScreen;
