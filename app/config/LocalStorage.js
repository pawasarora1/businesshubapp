import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';

export default LocalStorage = () => {
  const [isOnboardingShown, setIsOnboardingShown] = useState(false);

  const setOnboardingShown = async () => {
    try {
      AsyncStorage.setItem('isOnboardingShown', JSON.stringify(true));
      setIsOnboardingShown(true);
    } catch (error) {
      console.log('Error @isOnboardingShown: ', error);
    }
  };
  const checkOnboardingStatus = async () => {
    await AsyncStorage.getItem('isOnboardingShown').then(value => {
      if (value !== undefined && value !== null) {
        setIsOnboardingShown(true);
      } else {
        setIsOnboardingShown(false);
      }
    });
  };

  return {
    isOnboardingShown,
    setOnboardingShown,
    checkOnboardingStatus,
  };
};
