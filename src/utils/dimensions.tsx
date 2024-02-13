// Package import
import { Platform, StatusBar, Dimensions } from 'react-native';

let customHeight: number;

if (Platform.OS === 'android') {
  const hasNotch = StatusBar.currentHeight || 0 > 24;
  if (hasNotch) {
    customHeight = Dimensions.get('window').height;
  } else {
    customHeight = Dimensions.get('window').height - (StatusBar.currentHeight || 0);
  }
} else {
  customHeight = Dimensions.get('window').height;
}

const wp = (percentage: number) => {
  return Dimensions.get('window').width * (percentage / 100) || 1;
};

const hp = (percentage: number) => {
  return customHeight * (percentage / 100) || 1;
};

export { wp, hp };
