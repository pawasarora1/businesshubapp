import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  Text,
} from 'react-native';
import AppButton from '../components/AppButton';
import AppIcon from '../components/AppIcon';
import ErrorText from '../components/ErrorText';
import Header from '../components/Header';
import ScreenComponent from '../components/ScreenComponent';
import SwitchComponent from '../components/SwitchComponent';
import colors from '../config/colors';

function ProfileEditScreen({navigation}) {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [dob, setDob] = useState('');
  const [dobError, setDobError] = useState('');
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');
  const [isOfferOn, setIsOfferOn] = useState(false);
  const [isNewsOn, setIsNewsOn] = useState(false);
  return (
    <ScreenComponent style={styles.container}>
      <Header label={'Edit Profile'} />
      <Image source={require('../assets/profileBG.png')} style={styles.topBG} />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 50}}>
          <View style={{alignSelf: 'center'}}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/person.png')}
                style={{height: '100%', width: '100%'}}
              />
            </View>
            <AppIcon
              source={require('../assets/edit.png')}
              iconStyle={styles.editIcon}
              imageStyle={{tintColor: colors.white, height: 20, width: 20}}
            />
          </View>
          <Text style={styles.inputLable}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            autoCapitalize="none"
            value={name}
            onChangeText={txt => {
              setNameError('');
              setName(txt);
            }}
          />
          <ErrorText error={nameError} />
          <Text style={styles.inputLable}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            autoCapitalize="none"
            value={email}
            onChangeText={txt => {
              setEmailError('');
              setEmail(txt);
            }}
            keyboardType="email-address"
          />
          <ErrorText error={emailError} />
          <Text style={styles.inputLable}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Phone Number"
            autoCapitalize="none"
            value={phone}
            onChangeText={txt => {
              setPhoneError('');
              setPhone(txt);
            }}
          />
          <ErrorText error={phoneError} />
          <Text style={styles.inputLable}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Date of Birth"
            autoCapitalize="none"
            value={dob}
            onChangeText={txt => {
              setDobError('');
              setDob(txt);
            }}
          />
          <ErrorText error={dobError} />
          <Text style={styles.inputLable}>Select Gender</Text>
          <TextInput
            style={styles.input}
            placeholder="Select Gender"
            autoCapitalize="none"
            value={gender}
            onChangeText={txt => {
              setGenderError('');
              setGender(txt);
            }}
          />
          <ErrorText error={genderError} />
          <View style={styles.row}>
            <Image
              source={require('../assets/offer.png')}
              style={{height: 25, width: 25}}
            />
            <Text style={{fontSize: 16, fontWeight: '600'}}>
              Offers and bargains
            </Text>
            <View style={{flex: 1}} />
            <SwitchComponent
              isActive={isOfferOn}
              setIsActive={() => setIsOfferOn(!isOfferOn)}
            />
          </View>
          <View style={styles.row}>
            <Image
              source={require('../assets/news.png')}
              style={{height: 20, width: 20, marginRight: 5}}
            />
            <Text style={{fontSize: 16, fontWeight: '600'}}>
              Weekly newsletter
            </Text>
            <View style={{flex: 1}} />
            <SwitchComponent
              isActive={isNewsOn}
              setIsActive={() => setIsNewsOn(!isNewsOn)}
            />
          </View>
          <AppButton
            label="Save"
            style={{marginTop: '10%'}}
            onPress={() => navigation.goBack()}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  topBG: {
    position: 'absolute',
    zIndex: -1,
    height: 200,
    alignSelf: 'center',
  },
  imageContainer: {
    height: 120,
    width: 120,
    borderRadius: 60,
    overflow: 'hidden',
    borderColor: colors.white,
    borderWidth: 5,
  },
  editIcon: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    backgroundColor: colors.primary,
  },
  inputLable: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 10,
    marginTop: 15,
  },
  input: {
    backgroundColor: colors.inputField,
    borderRadius: 12,
    fontSize: 16,
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingTop: 20,
  },
});
export default ProfileEditScreen;
