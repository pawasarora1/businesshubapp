import React from 'react';
import {Switch} from 'react-native-switch';
import colors from '../config/colors';

function SwitchComponent({isActive, setIsActive}) {
  return (
    <Switch
      value={isActive}
      onValueChange={setIsActive}
      circleSize={20}
      barHeight={25}
      backgroundActive={colors.primary}
      backgroundInactive={colors.inputField}
      circleActiveColor={colors.white}
      circleInActiveColor={colors.white}
      innerCircleStyle={{borderWidth: 0}}
      renderActiveText={false}
      renderInActiveText={false}
      switchWidthMultiplier={2.3}
    />
  );
}

export default SwitchComponent;
