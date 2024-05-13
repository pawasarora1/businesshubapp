import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Animated as ReAnimated,
} from 'react-native';
import React, {useState, useRef} from 'react';

import colors from '../config/colors';
import Animated, {FadeInDown} from 'react-native-reanimated';
// import LocalStorage from '../config/LocalStorage';
import constants from '../config/constants';
const wid = Dimensions.get('window').width;
const hei = Dimensions.get('window').height;

export default function OnboardingScreen({navigation}) {
  const scrollx = useRef(new ReAnimated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = useRef();
  const textRef = useRef();
  const onboardingData = [
    {
      Title: 'Investment in businesses',
      Body: 'Choose from over 200,000 used items and unleash your creativity while furnishing your home on a budget or cash out by giving a second life to your previously loved items',
      Image: require('../assets/onboarding1.png'),
    },
    {
      Title: 'Buy, sell or find a business',
      Body: 'Explore over 20,000 buisness and find exactly what you are looking for with the help of 1000+ trusted agents',
      Image: require('../assets/onboarding2.png'),
    },
    {
      Title: 'Get shares in businesses',
      Body: 'Browse over 25,000 businesses for sale in the UAE or put yours up for the sale and the sale and be seen by 1.6 million buyers monthly',
      Image: require('../assets/onboarding3.png'),
    },
  ];

  // const {isOnboardingShown, setOnboardingShown, checkOnboardingStatus} =
  //   LocalStorage();

  const handleScrollToIndex = index => {
    setCurrentIndex(index);
    flatlistRef?.current?.scrollToOffset({
      offset: index * wid,
      animated: true,
    });
    textRef?.current?.scrollToOffset({
      offset: index * wid,
      animated: true,
    });
  };

  const Indicators = ({data, scrollx}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 30,
          alignSelf: 'center',
          position: 'absolute',
          bottom: '15%',
        }}>
        {data.map((_, i) => {
          const isLastItem = i === data.length - 1;

          const inputRange = [(i - 1) * wid, i * wid, (i + 1) * wid];
          const dotWidth = scrollx.interpolate({
            inputRange,
            outputRange: [10, 60, 10],
            extrapolate: 'clamp',
          });
          const opacity = scrollx.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: 'clamp',
          });
          const scalex = scrollx.interpolate({
            inputRange,
            outputRange: [0.2, 1.4, 0.2],
            extrapolate: 'clamp',
          });

          let colorInterpolate;
          if (isLastItem) {
            colorInterpolate = scrollx.interpolate({
              inputRange: [(data.length - 2) * wid, (data.length - 1) * wid],
              outputRange: [colors.gray, colors.primary],
              extrapolate: 'clamp',
            });
          } else {
            colorInterpolate = scalex.interpolate({
              inputRange: [0, 1],
              outputRange: [colors.gray, 'rgba(34, 85, 204, 0.7)'],
            });
          }

          return (
            <ReAnimated.View
              style={{
                width: dotWidth,
                height: 10,
                borderRadius: 5,
                backgroundColor: colorInterpolate,
                marginHorizontal: 8,
                opacity: opacity,
              }}
              key={i.toString()}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: colors.white,
      }}>
      <FlatList
        ref={flatlistRef}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onScroll={ReAnimated.event(
          [{nativeEvent: {contentOffset: {x: scrollx}}}],
          {useNativeDriver: false},
        )}
        onMomentumScrollEnd={ev => {
          const currentIndex = Math.floor(ev.nativeEvent.contentOffset.x / wid);
          setCurrentIndex(currentIndex);
        }}
        bounces={false}
        horizontal
        pagingEnabled
        data={onboardingData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <View
              style={{
                paddingTop: wid / 3,
                width: wid,
                height: hei,
                alignItems: 'center',
              }}>
              <Image
                resizeMode="contain"
                source={item.Image}
                style={{width: wid / 1.5, height: wid / 1.5}}
              />

              <Animated.Text
                entering={FadeInDown.delay(200).springify()}
                style={{
                  fontSize: 35,
                  fontWeight: '500',
                  color: colors.primary,
                  textAlign: 'center',
                  width: '90%',
                }}
                allowFontScaling={false}
                numberOfLines={2}>
                {item.Title}
              </Animated.Text>
              <Animated.Text
                entering={FadeInDown.delay(300).springify()}
                style={{
                  fontSize: 15,

                  fontWeight: '500',
                  color: colors.gray,
                  textAlign: 'center',
                  width: '90%',
                  marginTop: 20,
                  marginBottom: 50,
                }}
                allowFontScaling={false}>
                {item.Body}
              </Animated.Text>
            </View>
          );
        }}
      />

      <Indicators scrollx={scrollx} data={onboardingData} />

      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'space-between',
          alignSelf: 'center',
          marginBottom: 10,
          height: 45,
          position: 'absolute',
          zIndex: 100,
          bottom: 50,
        }}>
        {currentIndex > 0 && (
          <TouchableOpacity
            style={{
              backgroundColor: colors.lightPrimary,
              borderRadius: 30,
              height: 45,
              width: 45,
              justifyContent: 'center',
            }}
            onPress={() => {
              if (currentIndex !== 0) handleScrollToIndex(currentIndex - 1);
            }}>
            <Image
              source={require('../assets/leftArrow.png')}
              style={{
                height: 22,
                width: 22,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
        )}

        <View style={{flex: 1}} />

        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
            width: 100,
            height: 45,
          }}
          onPress={() => {
            if (currentIndex < onboardingData.length - 1) {
              handleScrollToIndex(currentIndex + 1);
            } else {
              // setOnboardingShown();
              constants.isOnboardingShown = true;
              navigation.navigate('Signin');
            }
          }}>
          <Text
            allowFontScaling={false}
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: colors.white,
              alignSelf: 'center',
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
