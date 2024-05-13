import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';
const {width} = Dimensions.get('screen');

function AppButton({label = '', onPress, style}) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, {...style}]}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    alignSelf: 'center',
    height: 50,
    borderRadius: 12,
  },
  label: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default AppButton;
