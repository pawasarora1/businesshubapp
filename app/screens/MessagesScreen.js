import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ScreenComponent from '../components/ScreenComponent';
import WarningComponent from '../components/WarningComponent';
import colors from '../config/colors';

function MessagesScreen(props) {
  return (
    <ScreenComponent style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.fvt}>Messages</Text>
      </View>
      <WarningComponent title={'Messages'} style={{paddingTop: '60%'}} />
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: colors.white,
    padding: 15,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowOffset: {height: 5, width: 0},
  },
  fvt: {
    fontSize: 18,
    fontWeight: '600',
  },
});
export default MessagesScreen;
