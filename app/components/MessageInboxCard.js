import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import colors from '../config/colors';

function MessageInboxCard({item}) {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('Chat', item)}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            source={require('../assets/person.png')}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View
          style={{
            flex: 1,
            gap: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.txt}>{item.date}</Text>
          </View>
          <Text style={styles.txt} numberOfLines={1}>
            {item.lastMessage}
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          height: 2,
          backgroundColor: colors.inputField,
          marginStart: '20%',
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  txt: {
    color: colors.gray,
  },
});
export default MessageInboxCard;
