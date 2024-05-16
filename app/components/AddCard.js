import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import AppIcon from './AppIcon';

function AddCard({item}) {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <AppIcon
        source={require('../assets/favourites.png')}
        iconStyle={{position: 'absolute', zIndex: 1, top: 5, right: 5}}
        imageStyle={{tintColor: colors.white}}
      />
      <View style={styles.detailsContainer}>
        <Text style={[styles.bold, {color: colors.primary}]}>
          {item.amount}
        </Text>
        <Text style={styles.bold}>{item.title}</Text>
        <Text numberOfLines={1} style={{color: colors.gray}}>
          {item.body}
        </Text>
        <Text style={{color: colors.gray}}>{item.time}</Text>
        <View style={styles.row}>
          <Image
            source={require('../assets/location.png')}
            style={{height: 20, width: 20}}
          />
          <Text style={{color: colors.gray}}>{item.location}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../assets/call.png')}
              style={styles.buttomIcons}
            />
            <Text style={styles.bold}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../assets/messeges.png')}
              style={styles.buttomIcons}
            />
            <Text style={styles.bold}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../assets/whatsapp.png')}
              style={styles.buttomIcons}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowOffset: {height: 2, width: 0},
    marginBottom: 20,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    padding: 10,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    gap: 3,
  },
  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightprimary,
    borderRadius: 10,
    gap: 10,
    padding: 8,
  },

  bold: {
    color: colors.black,
    fontWeight: '600',
    fontSize: 16,
  },
  buttomIcons: {
    height: 22,
    width: 22,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 10,
    marginBottom: 2,
  },
});
export default AddCard;
