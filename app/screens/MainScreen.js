import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Keyboard, Animated, Dimensions} from 'react-native';
import AppIcon from '../components/AppIcon';
import colors from '../config/colors';
import FavouritesScreen from './FavouritesScreen';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import MessagesScreen from './MessagesScreen';
import PlaceAddScreen from './PlaceAddScreen';
const {width} = Dimensions.get('screen');

function MainScreen({navigation}) {
  const [selected, setSelected] = useState('Home');
  const [endRange, setEndRange] = useState(0);
  const [startRange, setStartRange] = useState(0);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const animatedValue = new Animated.Value(0);

  const handleSelect = text => {
    const range =
      text == 'Home'
        ? 0
        : text == 'Favourites'
        ? width * 0.2
        : text == 'Place Add'
        ? width * 0.4
        : text == 'Messages'
        ? width * 0.6
        : text == 'Menu'
        ? width * 0.8
        : 0;
    setStartRange(endRange);
    setEndRange(range);
    setSelected(text);
  };

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 6,
      useNativeDriver: false,
    }).start();
  }, [selected]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [startRange, endRange],
  });

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        {selected == 'Home' ? (
          <HomeScreen navigation={navigation} />
        ) : selected == 'Favourites' ? (
          <FavouritesScreen navigation={navigation} />
        ) : selected == 'Place Add' ? (
          <PlaceAddScreen navigation={navigation} />
        ) : selected == 'Messages' ? (
          <MessagesScreen navigation={navigation} />
        ) : selected == 'Menu' ? (
          <MenuScreen navigation={navigation} />
        ) : null}
      </View>
      <Animated.View
        style={[
          styles.animationBar,
          {
            transform: [{translateX}],
          },
        ]}
      />
      {!isKeyboardVisible && (
        <View style={styles.bottomTab}>
          <AppIcon
            source={require('../assets/home.png')}
            title="Home"
            onPress={() => handleSelect('Home')}
            imageStyle={{
              tintColor: selected == 'Home' ? colors.primary : colors.black,
            }}
            titleStyle={{
              color: selected == 'Home' ? colors.primary : colors.black,
            }}
          />
          <AppIcon
            source={require('../assets/favourites.png')}
            title="Favourites"
            onPress={() => handleSelect('Favourites')}
            imageStyle={{
              tintColor:
                selected == 'Favourites' ? colors.primary : colors.black,
            }}
            titleStyle={{
              color: selected == 'Favourites' ? colors.primary : colors.black,
            }}
          />
          <AppIcon
            source={require('../assets/add.png')}
            title="Place Ad"
            onPress={() => handleSelect('Place Add')}
            imageStyle={{
              tintColor:
                selected == 'Place Add' ? colors.primary : colors.black,
            }}
            titleStyle={{
              color: selected == 'Place Add' ? colors.primary : colors.black,
            }}
          />
          <AppIcon
            source={require('../assets/messeges.png')}
            title="Messages"
            onPress={() => handleSelect('Messages')}
            imageStyle={{
              tintColor: selected == 'Messages' ? colors.primary : colors.black,
            }}
            titleStyle={{
              color: selected == 'Messages' ? colors.primary : colors.black,
            }}
          />
          <AppIcon
            source={require('../assets/menu.png')}
            title="Menu"
            onPress={() => handleSelect('Menu')}
            imageStyle={{
              tintColor: selected == 'Menu' ? colors.primary : colors.black,
            }}
            titleStyle={{
              color: selected == 'Menu' ? colors.primary : colors.black,
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomTab: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 0.5,
    borderColor: colors.inputField,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
  },
  animationBar: {
    backgroundColor: colors.primary,
    width: width / 5,
    height: 3,
    borderRadius: 8,
    marginStart: 1,
  },
});
export default MainScreen;
