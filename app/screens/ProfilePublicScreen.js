import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import AdsRatingSelector from '../components/AdsRatingSelector';
import AppButton from '../components/AppButton';
import Header from '../components/Header';
import ScreenComponent from '../components/ScreenComponent';
import WarningComponent from '../components/WarningComponent';
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
      <AdsRatingSelector />
      <View style={{flex: 1, paddingTop: '40%'}}>
        <WarningComponent title={'Ads'} />
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
