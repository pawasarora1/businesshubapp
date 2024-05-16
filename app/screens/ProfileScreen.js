import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import AuthContext from '../auth/AuthContext';
import Header from '../components/Header';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';

function ProfileScreen({navigation}) {
  const {setUser} = useContext(AuthContext);

  const handleDeleteAccount = () => {
    Alert.alert('Warning!', 'Are you sure you want to delete your account?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => setUser(null)},
    ]);
  };
  return (
    <ScreenComponent style={styles.container}>
      <Header label={'Profile'} />
      <Text style={styles.label}>Personal Details</Text>
      <TouchableOpacity
        style={styles.topContainer}
        onPress={() => navigation.navigate('ProfileEdit')}>
        <Image source={require('../assets/edit.png')} style={styles.editIcon} />
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/person.png')}
            style={{height: 80, width: 80, borderRadius: 40}}
          />
          <View style={{justifyContent: 'center', gap: 5, paddingStart: 15}}>
            <View style={styles.row}>
              <Image
                source={require('../assets/userProfile.png')}
                style={styles.topIcon}
              />
              <Text style={styles.topTxt} numberOfLines={1}>
                Allen walker
              </Text>
            </View>
            <View style={styles.row}>
              <Image
                source={require('../assets/email.png')}
                style={styles.topIcon}
              />
              <Text style={styles.topTxt} numberOfLines={1}>
                allen@gmail.com
              </Text>
            </View>
            <View style={styles.row}>
              <Image
                source={require('../assets/phone.png')}
                style={styles.topIcon}
              />
              <Text style={styles.topTxt} numberOfLines={1}>
                1234567890
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <Text style={styles.label}>Account Settings</Text>
      <ChevronButton
        text="Change your Password"
        icon={require('../assets/lock.png')}
        onPress={() => navigation.navigate('ChangePassword')}
        style={{height: 18, width: 18, marginLeft: 5}}
      />
      <ChevronButton
        text="Delete Account"
        icon={require('../assets/delete.png')}
        onPress={() => handleDeleteAccount()}
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
  container: {
    paddingHorizontal: 15,
  },
  topContainer: {
    backgroundColor: colors.lightprimary,
    padding: 15,
    marginTop: 10,
    borderRadius: 15,
  },

  label: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 15,
    marginTop: 20,
    marginBottom: 10,
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
  row: {
    flexDirection: 'row',
    gap: 5,
    // alignItems: 'center',
  },
  topIcon: {
    height: 17,
    width: 17,
  },
  topTxt: {
    color: colors.gray,
    fontSize: 16,
    width: '76%',
  },
  editIcon: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: 7,
    right: 7,
  },
});
export default ProfileScreen;
