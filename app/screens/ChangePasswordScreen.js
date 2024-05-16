import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import AppButton from '../components/AppButton';
import ErrorText from '../components/ErrorText';
import Header from '../components/Header';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';

function ChangePasswordScreen({navigation}) {
  const [oldPassword, setOldPassword] = useState('');
  const [oldPasswordError, setOldPasswordError] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  return (
    <ScreenComponent style={styles.container}>
      <Header label={'Change Password'} />
      <Text style={styles.inputLable}>Old Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Old Password"
        autoCapitalize="none"
        value={oldPassword}
        onChangeText={txt => {
          setOldPasswordError('');
          setOldPassword(txt);
        }}
      />
      <ErrorText error={oldPasswordError} />
      <Text style={styles.inputLable}>New Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter New Password"
        autoCapitalize="none"
        value={newPassword}
        onChangeText={txt => {
          setNewPasswordError('');
          setNewPassword(txt);
        }}
      />
      <ErrorText error={newPasswordError} />
      <Text style={styles.inputLable}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter New Password"
        autoCapitalize="none"
        value={confirmPassword}
        onChangeText={txt => {
          setConfirmPasswordError('');
          setConfirmPassword(txt);
        }}
      />
      <ErrorText error={confirmPasswordError} />
      <AppButton
        label="Save"
        style={{marginTop: '10%'}}
        onPress={() => navigation.goBack()}
      />
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
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
});
export default ChangePasswordScreen;
