import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../config/colors';

function ReceiverChatCard({item}) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.inputField,
    width: '80%',
    marginBottom: 20,
    borderRadius: 15,
    borderTopLeftRadius: 0,
  },
  txt: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '500',
  },
});
export default ReceiverChatCard;
