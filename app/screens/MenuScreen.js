import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AuthContext from '../auth/AuthContext';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';
import CallUsModel from '../models/CallUsModel';
import VerifyAccountModel from '../models/VerifyAccountModel';

function MenuScreen({navigation}) {
  const {setUser} = useContext(AuthContext);
  const [callModalVisible, setCallModalVisible] = useState(false);
  const [verifyModalVisible, setVerifyModalVisible] = useState(false);

  const handleLogout = () => {
    Alert.alert('Alert!', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => setUser(null)},
    ]);
  };

  const handleOpenLink = async () => {
    const url = 'http://Businesshub.jdesigntechnologies.com';
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  };

  return (
    <ScreenComponent style={styles.container}>
      <View style={styles.topContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/person.png')}
            style={{height: 60, width: 60, borderRadius: 30}}
          />
          <View style={{justifyContent: 'center', gap: 5, paddingStart: 15}}>
            <Text style={styles.nameTxt}>Hi, Allen</Text>
            <Text style={{color: colors.gray}}>allen@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => setVerifyModalVisible(true)}>
          <Image
            source={require('../assets/verify.png')}
            style={{height: 20, width: 20}}
          />
          <Text style={styles.verifyText}>Verify your account</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 15, paddingBottom: 50}}>
        <Text style={styles.label}>My Account</Text>

        <ChevronButton
          text="Profile"
          icon={require('../assets/user.png')}
          onPress={() => navigation.navigate('Profile')}
        />
        <ChevronButton
          text="My Public Profile"
          icon={require('../assets/user.png')}
          onPress={() => navigation.navigate('ProfilePublic')}
        />
        <ChevronButton
          text="My Ads"
          icon={require('../assets/ads.png')}
          onPress={() => navigation.navigate('MyAds')}
        />
        <ChevronButton
          text="My Saved Searches"
          icon={require('../assets/history.png')}
          onPress={() => navigation.navigate('SavedSearches')}
        />
        <View style={styles.line} />
        <Text style={styles.label}>Others</Text>
        <ChevronButton
          text="support"
          icon={require('../assets/support.png')}
          onPress={() => handleOpenLink()}
        />
        <ChevronButton
          text="Call us"
          icon={require('../assets/call.png')}
          style={{height: 18, width: 18, marginRight: 5}}
          onPress={() => setCallModalVisible(true)}
        />
        <ChevronButton
          text="Terms and Conditions"
          icon={require('../assets/terms.png')}
          style={{height: 18, width: 18, marginRight: 5}}
          onPress={() => handleOpenLink()}
        />
        <ChevronButton
          text="Advertising"
          icon={require('../assets/advertising.png')}
          onPress={() => handleOpenLink()}
        />
        <TouchableOpacity
          style={styles.chevronButton}
          onPress={() => handleLogout()}>
          <Image source={require('../assets/logout.png')} style={styles.icon} />
          <Text style={{color: colors.black, fontWeight: '500', fontSize: 16}}>
            Logout
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <CallUsModel
        visible={callModalVisible}
        setVisible={() => setCallModalVisible(false)}
      />
      <VerifyAccountModel
        visible={verifyModalVisible}
        setVisible={() => setVerifyModalVisible(false)}
      />
    </ScreenComponent>
  );
}

const ChevronButton = ({text, icon, style, onPress}) => {
  return (
    <TouchableOpacity style={styles.chevronButton} onPress={onPress}>
      <Image source={icon} style={[styles.icon, {...style}]} />
      <Text style={{color: colors.black, fontWeight: '500', fontSize: 16}}>
        {text}
      </Text>
      <View style={{flex: 1}} />
      <Image
        source={require('../assets/chevronRight.png')}
        style={{height: 18, width: 18}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  topContainer: {
    backgroundColor: colors.lightprimary,
    padding: 15,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  nameTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.black,
  },
  verifyButton: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 10,
    gap: 10,
  },
  verifyText: {
    color: colors.primary,
    fontWeight: '500',
  },
  chevronButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
  },
  icon: {
    height: 23,
    width: 23,
  },
  label: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  line: {
    height: 1,
    backgroundColor: colors.black,
    opacity: 0.2,
    marginTop: 10,
  },
});
export default MenuScreen;
