import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';
import AppIcon from './AppIcon';
const {width} = Dimensions.get('screen');

function FavouriteCard({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('FavouritesDetails', item)}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={{color: colors.primary, fontWeight: '700'}}>
          {item.amount}
        </Text>
        <Text style={{color: colors.black, fontSize: 16, fontWeight: '500'}}>
          {item.title}
        </Text>
        <Text style={{color: colors.black}}>{item.body}</Text>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <Image
            source={require('../assets/location.png')}
            style={{height: 15, width: 15}}
          />
          <Text style={{color: colors.black}}>{item.location}</Text>
          <View style={{flex: 1}} />
          <AppIcon source={require('../assets/delete.png')} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 180,
  },
  detailsContainer: {
    backgroundColor: colors.inputField,
    padding: 10,
    gap: 5,
  },
});
export default FavouriteCard;
