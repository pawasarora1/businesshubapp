import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AppButton from '../components/AppButton';
import ErrorText from '../components/ErrorText';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';
import {isEmailValid} from '../Utils/methods';

function RecoverPasswordScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleRecover = () => {
    let isEmailCorrect = true;
    if (email.length == 0) {
      setEmailError('Email is required.');
      isEmailCorrect = false;
    } else if (!isEmailValid(email)) {
      setEmailError('Please enter a valid email.');
      isEmailCorrect = false;
    }
    if (isEmailCorrect) {
      Alert.alert(
        'Successfully sent!',
        'A recover email has been sent successfully.',
        [{text: 'OK', onPress: () => navigation.goBack()}],
      );
    }
  };
  return (
    <ScreenComponent style={styles.container}>
      <Text style={styles.topLable}>Recover Password?</Text>

      <Text style={styles.inputLable}>Email</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={txt => {
          setEmailError('');
          setEmail(txt);
        }}
        keyboardType="email-address"
      />
      <ErrorText error={emailError} />

      <View style={styles.forgotContainer}>
        <TouchableOpacity
          style={{paddingVertical: 5}}
          onPress={() => navigation.goBack()}>
          <Text style={styles.forgotText}>Go back?</Text>
        </TouchableOpacity>
      </View>

      <AppButton label="Send" onPress={() => handleRecover()} />
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
    marginBottom: '10%',
    marginTop: '10%',
    color: colors.black,
  },
  inputLable: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 10,
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
});
export default RecoverPasswordScreen;
