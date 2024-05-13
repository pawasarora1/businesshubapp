import React from 'react';
import {View, StyleSheet, Image, TextInput} from 'react-native';
import colors from '../config/colors';

function SearchBar(props) {
  return (
    <View style={styles.searchbar}>
      <Image
        source={require('../assets/search.png')}
        style={{height: 30, width: 30}}
      />
      <TextInput
        placeholder="What are you looking for?"
        placeholderTextColor={colors.black}
        style={{fontSize: 15, width: '85%'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  searchbar: {
    marginTop: 10,
    height: 50,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 5,
  },
});
export default SearchBar;
