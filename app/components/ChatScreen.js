import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import colors from '../config/colors';
import {dummyChat} from '../Utils/data';
import AppIcon from './AppIcon';
import MyChatCard from './MyChatCard';
import ReceiverChatCard from './ReceiverChatCard';
import ScreenComponent from './ScreenComponent';

function ChatScreen({route, navigation}) {
  const routeData = route.params;
  return (
    <ScreenComponent style={styles.container}>
      <View style={styles.header}>
        <AppIcon
          source={require('../assets/leftArrow.png')}
          onPress={() => navigation.goBack()}
          iconStyle={{paddingRight: 0}}
        />
        <View style={styles.imgContianer}>
          <Image
            source={require('../assets/person.png')}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View>
          <Text style={styles.fvt}>{routeData.name}</Text>
          <Text style={{color: colors.gray}}>Tap here for contact info</Text>
        </View>
      </View>
      <FlatList
        style={{flex: 1}}
        contentContainerStyle={{
          paddingBottom: 50,
          paddingTop: 20,
          paddingHorizontal: 15,
        }}
        data={dummyChat}
        renderItem={({item}) => {
          const isRight = item.position == 'right';
          return (
            <>
              {isRight ? (
                <MyChatCard item={item} />
              ) : (
                <ReceiverChatCard item={item} />
              )}
            </>
          );
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100}>
        <View style={styles.input}>
          <AppIcon
            source={require('../assets/camera.png')}
            imageStyle={styles.icon}
            iconStyle={{marginTop: 5}}
          />
          <TextInput placeholder="Type a message" style={{flex: 1}} />
          <AppIcon
            source={require('../assets/smile.png')}
            imageStyle={styles.icon}
            iconStyle={{marginTop: 5}}
          />
          <AppIcon
            source={require('../assets/send.png')}
            imageStyle={styles.icon}
            iconStyle={{marginTop: 5}}
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: colors.white,
    padding: 15,
    paddingVertical: 10,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowOffset: {height: 5, width: 0},
    flexDirection: 'row',
    gap: 10,
  },
  fvt: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  imgContianer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  input: {
    height: 45,
    backgroundColor: colors.inputField,
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 15,
    margin: 5,
  },
  icon: {
    height: 20,
    width: 20,
    tintColor: colors.black,
  },
});
export default ChatScreen;
