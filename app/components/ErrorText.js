import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../config/colors';

function ErrorText({error}) {
  return (
    <View style={styles.container}>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  errorText: {
    color: colors.red,
    marginTop: 5,
  },
});
export default ErrorText;
