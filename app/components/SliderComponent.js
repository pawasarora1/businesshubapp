import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import colors from '../config/colors';

function SliderComponent({value, onChange, minValue, maxValue}) {
  return (
    <View style={styles.container}>
      <Slider
        renderThumbComponent={() => (
          <View style={styles.knobStyle}>
            <View style={styles.inner} />
          </View>
        )}
        minimumValue={minValue}
        maximumValue={maxValue}
        value={value}
        onValueChange={onChange}
        minimumTrackTintColor={colors.primary}
        maximumTrackTintColor={colors.inputField}
        renderBelowThumbComponent={(value, index) => (
          <View
            style={{
              backgroundColor: '#FFF',
              transform: [{translateX: -25}],
              alignItems: 'center',
            }}>
            <Text size="tiny" alignCenter color={colors.primary}>
              ${Math.round(index)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  knobStyle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    zIndex: 5,
  },
  inner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.white,
  },
});
export default SliderComponent;
