import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppButton from '../components/AppButton';
import ScreenComponent from '../components/ScreenComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../config/colors';
import ErrorText from '../components/ErrorText';
import AuthContext from '../auth/AuthContext';
import {isEmailValid} from '../Utils/methods';

function SignupScreen({navigation}) {
  const {user, setUser} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [cityError, setCityError] = useState('');

  const handleSignup = () => {
    let isEmailCorrect = true;
    if (name.trim().length == 0) setNameError('Name is required.');
    if (email.length == 0) {
      setEmailError('Email is required.');
      isEmailCorrect = false;
    } else if (!isEmailValid(email)) {
      setEmailError('Please enter a valid email.');
      isEmailCorrect = false;
    }
    if (password.length < 6) setPasswordError('Password is required.');
    if (country.trim().length == 0) setCountryError('Country is required.');
    if (city.trim().length == 0) setCityError('City is required.');
    if (
      name.split().length == 0 ||
      !isEmailCorrect ||
      password.length < 6 ||
      country.trim().length == 0 ||
      city.trim().length == 0
    ) {
      return;
    }
    setUser('123');
  };
  return (
    <ScreenComponent style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1, paddingBottom: 50}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.topLable}>Create an account</Text>

        <Text style={styles.inputLable}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
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

        <Text style={styles.inputLable}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          value={password}
          onChangeText={txt => {
            setPasswordError('');
            setPassword(txt);
          }}
        />
        <ErrorText error={passwordError} />

        <Text style={styles.inputLable}>Country</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Country Name"
          value={country}
          onChangeText={txt => {
            setCountryError('');
            setCountry(txt);
          }}
        />
        <ErrorText error={countryError} />

        <Text style={styles.inputLable}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter City Name"
          value={city}
          onChangeText={txt => {
            setCityError('');
            setCity(txt);
          }}
        />
        <ErrorText error={cityError} />

        <AppButton
          label="Sign up"
          style={{marginTop: '10%'}}
          onPress={() => handleSignup()}
        />

        <View style={styles.bottomText}>
          <Text style={{color: colors.black}}>All ready have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{padding: 5, marginTop: -5}}>
            <Text style={{fontWeight: 'bold'}}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  topLable: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '5%',
    marginTop: '10%',
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
  bottomText: {
    flexDirection: 'row',
    marginTop: '10%',
    justifyContent: 'center',
  },
});
export default SignupScreen;
