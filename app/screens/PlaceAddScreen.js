import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
  Platform,
} from 'react-native';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';
import {countries} from '../Utils/data';
const {width, height} = Dimensions.get('screen');

function PlaceAddScreen(props) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const SPACING = 15;
  const AVATAR = 50;
  const ITEM_SIZE = AVATAR + SPACING;

  return (
    <ScreenComponent style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Select your country</Text>
        <Text style={{color: colors.gray}}>Where should we place your ad?</Text>
      </View>
      <Animated.FlatList
        data={countries}
        contentContainerStyle={{
          paddingTop: 10,
          paddingHorizontal: SPACING,
          paddingBottom: 50,
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <Animated.View
              style={{
                // transform: [{scale}],
                // opacity,
                backgroundColor: colors.secondary,
                marginBottom: SPACING,
                padding: SPACING,
                borderRadius: 10,
                flexDirection: 'row',
                gap: 15,
                alignItems: 'center',
                width: width - 30,
              }}>
              <Image
                resizeMode="contain"
                source={item.flag}
                style={{height: AVATAR, width: AVATAR}}
              />
              <Text
                style={{
                  color: colors.primary,
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                {item.name}
              </Text>
            </Animated.View>
          );
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
    padding: 6,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowOffset: {height: 5, width: 0},
    elevation: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
  },
  chevronText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '600',
    width: '90%',
  },
});
export default PlaceAddScreen;
