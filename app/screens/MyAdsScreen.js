import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import ScreenComponent from '../components/ScreenComponent';
import WarningComponent from '../components/WarningComponent';
import colors from '../config/colors';

function MyAdsScreen(props) {
  const [active, setActive] = useState('');
  return (
    <ScreenComponent style={styles.container}>
      <Header label={'My Adds'} />
      <View style={styles.row}>
        <Button
          label={'All'}
          isActive={active == 'All'}
          onPress={() => setActive('All')}
        />
        <Button
          label={'Pending'}
          isActive={active == 'Pending'}
          onPress={() => setActive('Pending')}
        />
        <Button
          label={'Active'}
          isActive={active == 'Active'}
          onPress={() => setActive('Active')}
        />
        <Button
          label={'Draft'}
          isActive={active == 'Draft'}
          onPress={() => setActive('Draft')}
        />
        <Button
          label={'Rejected'}
          isActive={active == 'Rejected'}
          onPress={() => setActive('Rejected')}
        />
      </View>
      <View style={{flex: 1, paddingTop: '50%'}}>
        <WarningComponent title={'Ads'} />
      </View>
    </ScreenComponent>
  );
}

const Button = ({label, isActive, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: isActive ? colors.primary : colors.lightprimary,
        },
      ]}>
      <Text
        style={{
          color: isActive ? colors.white : colors.black,
          marginHorizontal: 5,
          fontWeight: '500',
        }}
        adjustsFontSizeToFit
        numberOfLines={1}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: -5,
    marginTop: 5,
  },
  button: {
    flex: 1,
    marginRight: 5,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
export default MyAdsScreen;
