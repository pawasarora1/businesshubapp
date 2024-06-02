import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppIcon from '../components/AppIcon';
import ImageSlideShow from '../components/ImageSlideShow';
import colors from '../config/colors';
import {bussiness, countries} from '../Utils/data';
const {width, height} = Dimensions.get('screen');

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <AppIcon
        onPress={() => navigation.navigate('Notifications')}
        source={require('../assets/bell.png')}
        iconStyle={styles.icon}
        imageStyle={{tintColor: colors.white, height: 18, width: 18}}
      />
      <ImageSlideShow />
      <View style={styles.bottomContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.topLabel}>
            Welcome to the World's #1 online business!
          </Text>
          <Text style={[styles.topLabel, {fontSize: 18, marginBottom: 15}]}>
            Which country would you like to explore?
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            contentContainerStyle={{flexGrow: 1}}>
            <FlatList
              data={countries}
              numColumns={3}
              scrollEnabled={false}
              renderItem={({item, index}) => {
                const isNotThirdColumn = index % 3 !== 2;
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SalesTypes')}
                    style={[
                      styles.countryBox,
                      {marginRight: isNotThirdColumn ? 30 : 0},
                    ]}>
                    <Image
                      resizeMode="contain"
                      source={item.flag}
                      style={{height: '60%', width: '60%', marginBottom: 10}}
                    />
                    <Text
                      style={{
                        color: colors.primary,
                        fontWeight: '600',
                        fontSize: 15,
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </ScrollView>
          <Text style={[styles.topLabel, {fontSize: 18, marginBottom: 15}]}>
            Join Millions of Users to Buy & Sell Businesses Worldwide!
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            contentContainerStyle={{flexGrow: 1}}>
            <FlatList
              data={bussiness}
              scrollEnabled={false}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('AddsList', item)}
                    style={styles.chevronButton}
                    activeOpacity={0.5}>
                    <Text
                      adjustsFontSizeToFit
                      numberOfLines={1}
                      style={styles.chevronText}>
                      {item}
                    </Text>
                    <Image
                      source={require('../assets/leftArrow.png')}
                      style={styles.chevronImage}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    paddingBottom: 0,
  },
  topLabel: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
  },
  countryBox: {
    height: width / 3 - 30,
    width: width / 3 - 30,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 15,
    paddingTop: 10,
  },
  chevronButton: {
    backgroundColor: colors.lightprimary,
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 30,
  },
  chevronText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '600',
    width: '90%',
  },
  chevronImage: {
    transform: [{rotate: '180deg'}],
    height: 20,
    width: 20,
  },
  icon: {
    backgroundColor: colors.primary,
    height: 40,
    width: 40,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    marginTop: Platform.OS == 'ios' ? height * 0.05 : 10,
    alignSelf: 'flex-end',
    right: 15,
  },
});
export default HomeScreen;
