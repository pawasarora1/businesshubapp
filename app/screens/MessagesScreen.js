import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ScreenComponent from '../components/ScreenComponent';

function MessagesScreen(props) {
  return (
    <ScreenComponent style={styles.container}>
      <Text>Messages</Text>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default MessagesScreen;
