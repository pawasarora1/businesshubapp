import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../config/colors';

function MyChatCard({item}) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.primary,
    width: '80%',
    alignSelf: 'flex-end',
    marginBottom: 20,
    borderRadius: 15,
    borderBottomRightRadius: 0,
  },
  txt: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});
export default MyChatCard;
