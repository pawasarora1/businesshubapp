import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import colors from '../config/colors';

function AppIcon({
  source,
  iconStyle,
  imageStyle,
  title = '',
  titleStyle,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, {...iconStyle}]}
      onPress={onPress}
      activeOpacity={0.4}>
      <Image
        resizeMode="contain"
        source={source}
        style={[{height: 23, width: 23}, {...imageStyle}]}
      />
      {title && <Text style={[styles.text, {...titleStyle}]}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    borderRadius: 20,
    alignItems: 'center',
  },
  text: {
    color: colors.gray,
    fontSize: 12,
    marginTop: 4,
  },
});
export default AppIcon;
