import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Platform,
  Dimensions,
} from 'react-native';
import MessageInboxCard from '../components/MessageInboxCard';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';
import {inboxMessages} from '../Utils/data';
const {height} = Dimensions.get('screen');

function MessagesScreen(props) {
  return (
    <ScreenComponent style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.fvt}>Messages</Text>
      </View>
      <FlatList
        data={inboxMessages}
        renderItem={({item}) => {
          return <MessageInboxCard item={item} />;
        }}
      />
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == 'android' ? 0 : height * 0.05,
  },
  header: {
    backgroundColor: colors.white,
    padding: 15,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowOffset: {height: 5, width: 0},
    elevation: 10,
  },
  fvt: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
  },
});
export default MessagesScreen;
