import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import colors from '../config/colors';
import AppIcon from './AppIcon';

function Header({label, onPressBack}) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {onPressBack ? (
        <AppIcon
          onPress={() => onPressBack()}
          source={require('../assets/cross.png')}
          iconStyle={styles.icon}
          imageStyle={{tintColor: colors.white, height: 35, width: 35}}
        />
      ) : (
        <AppIcon
          onPress={() => navigation.goBack()}
          source={require('../assets/leftArrow.png')}
          iconStyle={styles.icon}
          imageStyle={{tintColor: colors.white, height: 18, width: 18}}
        />
      )}
      <Text style={{fontSize: 20, fontWeight: '700'}}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
  icon: {
    backgroundColor: colors.primary,
    height: 40,
    width: 40,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Header;
