import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import AppButton from '../components/AppButton';
import Header from '../components/Header';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';

function ProfilePublicScreen(props) {
  const [isAdsActive, setIsAdsActive] = useState(false);
  return (
    <ScreenComponent style={styles.container}>
      <Header label="My Public Profile" />
      <View style={styles.topContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/person.png')}
            style={{height: 60, width: 60, borderRadius: 30}}
          />
          <View style={{justifyContent: 'center', gap: 5, paddingStart: 15}}>
            <Text style={styles.nameTxt}>Allen Walker</Text>
            <Text style={{color: colors.gray}}>allen@gmail.com</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
          backgroundColor: colors.lightprimary,
          borderWidth: 1,
          borderColor: colors.primary,
          borderRadius: 10,
        }}>
        <AppButton
          onPress={() => setIsAdsActive(true)}
          textStyle={{color: isAdsActive ? colors.white : colors.primary}}
          label="Ads"
          style={{
            width: '50%',
            borderRadius: 9,
            backgroundColor: isAdsActive ? colors.primary : colors.transparent,
          }}
        />
        <AppButton
          onPress={() => setIsAdsActive(false)}
          label="Rating"
          textStyle={{color: !isAdsActive ? colors.white : colors.primary}}
          style={{
            width: '50%',
            borderRadius: 9,
            backgroundColor: !isAdsActive ? colors.primary : colors.transparent,
          }}
        />
      </View>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  topContainer: {
    backgroundColor: colors.lightprimary,
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  nameTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.black,
  },
});
export default ProfilePublicScreen;
