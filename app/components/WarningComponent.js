import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import colors from '../config/colors';

function WarningComponent({title, style}) {
  return (
    <View style={[styles.container, {...style}]}>
      <Image
        source={require('../assets/warning.png')}
        style={{height: 40, width: 40, tintColor: colors.primary}}
      />
      <Text style={styles.txt}>You don't have any {title}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  txt: {
    fontSize: 16,
    fontWeight: '500',
    width: '70%',
    textAlign: 'center',
    marginTop: 10,
    color: colors.black,
  },
});
export default WarningComponent;
