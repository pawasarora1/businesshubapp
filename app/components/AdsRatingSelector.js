import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
import colors from '../config/colors';
const {width} = Dimensions.get('screen');
const containerWidth = width - 30;

function AdsRatingSelector({}) {
  const animatedValue = new Animated.Value(0);
  const [selected, setSelected] = useState('Ads');
  const [startRange, setStartRange] = useState(0);
  const [endRange, setEndRange] = useState(0);

  const handleSelect = text => {
    const range =
      text == 'Ads' ? 0 : text == 'Rating' ? containerWidth * 0.5 : 0;
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

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.darkBlueView,
          {
            transform: [{translateX}],
          },
        ]}
      />
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => handleSelect('Ads')}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: selected == 'Ads' ? colors.white : colors.primary,
          }}>
          Ads
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => handleSelect('Rating')}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: selected == 'Rating' ? colors.white : colors.primary,
          }}>
          Rating
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  darkBlueView: {
    backgroundColor: colors.primary,
    width: containerWidth / 2,
    height: '100%',
    position: 'absolute',
    borderRadius: 8,
  },
  container: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.lightprimary,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 13,
    alignItems: 'center',
  },
});

export default AdsRatingSelector;
