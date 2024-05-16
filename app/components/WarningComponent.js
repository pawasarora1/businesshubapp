import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import colors from '../config/colors';

function WarningComponent(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/warning.png')}
        style={{height: 40, width: 40, tintColor: colors.primary}}
      />
      <Text style={styles.txt}>
        It's like a desert in here You dont have any searches.
      </Text>
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
  },
});
export default WarningComponent;
