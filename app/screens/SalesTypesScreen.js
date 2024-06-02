import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';
import AppIcon from '../components/AppIcon';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';
import {salesTypes} from '../Utils/data';
const {width} = Dimensions.get('screen');

function SalesTypesScreen({navigation}) {
  const [search, setSearch] = useState('');
  return (
    <ScreenComponent style={styles.container}>
      <View style={styles.header}>
        <AppIcon
          onPress={() => navigation.goBack()}
          source={require('../assets/leftArrow.png')}
          iconStyle={styles.icon}
          imageStyle={{tintColor: colors.white, height: 18, width: 18}}
        />
        <View style={styles.searchbar}>
          <Image
            source={require('../assets/search.png')}
            style={{height: 30, width: 30}}
          />
          <TextInput
            placeholder="What are you looking for?"
            placeholderTextColor={colors.black}
            style={{fontSize: 15, width: '70%'}}
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>
      <FlatList
        data={salesTypes}
        numColumns={3}
        contentContainerStyle={{flex: 1}}
        scrollEnabled={false}
        renderItem={({item, index}) => {
          const isNotThirdColumn = index % 3 !== 2;
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('SalesCategory', item)}
              style={[
                styles.countryBox,
                {marginRight: isNotThirdColumn ? 30 : 0},
              ]}>
              <Image
                resizeMode="contain"
                source={item.image}
                style={{height: '50%', width: '50%', marginBottom: 10}}
              />
              <Text
                numberOfLines={2}
                adjustsFontSizeToFit
                style={{
                  color: colors.primary,
                  textAlign: 'center',
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
  },
  searchbar: {
    flex: 1,
    height: 40,
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: colors.inputField,
    gap: 5,
    marginStart: 10,
  },
  icon: {
    backgroundColor: colors.primary,
    height: 40,
    width: 40,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryBox: {
    height: width / 3 - 35,
    width: width / 3 - 35,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingTop: 10,
    shadowColor: colors.black,
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.5,
    marginTop: 5,
    marginStart: 4,
    paddingBottom: 10,
    paddingHorizontal: 10,
    elevation: 5,
  },
  verifiedContiner: {
    backgroundColor: 'red',
    padding: 10,
  },
});
export default SalesTypesScreen;
