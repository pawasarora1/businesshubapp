import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import ScreenComponent from '../components/ScreenComponent';
import WarningComponent from '../components/WarningComponent';

function SavedSearchesScreen(props) {
  return (
    <ScreenComponent style={styles.container}>
      <Header label={'Saved Searches'} />
      <View style={{flex: 1, paddingTop: '50%'}}>
        <WarningComponent title={'Searches'} />
      </View>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
export default SavedSearchesScreen;
