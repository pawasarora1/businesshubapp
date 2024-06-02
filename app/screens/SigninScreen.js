import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AuthContext from '../auth/AuthContext';
import AppButton from '../components/AppButton';
import ErrorText from '../components/ErrorText';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';
import {isEmailValid} from '../Utils/methods';

function SigninScreen({navigation}) {
  const {user, setUser} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignin = () => {
    let isEmailCorrect = true;
    if (email.length == 0) {
      setEmailError('Email is required.');
      isEmailCorrect = false;
    } else if (!isEmailValid(email)) {
      setEmailError('Please enter a valid email.');
      isEmailCorrect = false;
    }

    if (password.length < 6) setPasswordError('Password is required.');
    if (!isEmailCorrect || password.length < 6) {
      return;
    }
    setUser('123');
  };
  return (
    <ScreenComponent style={styles.container}>
      <Text style={styles.topLable}>Hey, Welcome!</Text>

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

      <View style={styles.forgotContainer}>
        <TouchableOpacity
          style={{paddingVertical: 5}}
          onPress={() => navigation.navigate('RecoverPassword')}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <AppButton label="Sign in" onPress={() => handleSignin()} />

      <View style={styles.bottomText}>
        <Text style={{color: colors.black}}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={{padding: 5, marginTop: -5}}>
          <Text style={{fontWeight: 'bold', color: colors.black}}>Sign up</Text>
        </TouchableOpacity>
      </View>
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
    color: colors.black,
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
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
    marginBottom: '10%',
  },
  forgotText: {
    color: colors.black,
    fontSize: 15,
  },
  bottomText: {
    flexDirection: 'row',
    marginTop: '10%',
    justifyContent: 'center',
  },
});
export default SigninScreen;
