import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import ScreenComponent from '../components/ScreenComponent';
import WarningComponent from '../components/WarningComponent';

function NotificationsScreen(props) {
  return (
    <ScreenComponent style={styles.container}>
      <Header label={'Notificaitons'} />

      <WarningComponent title={'Notificaitons'} style={{paddingTop: '60%'}} />
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
export default NotificationsScreen;
