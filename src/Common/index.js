import {Dimensions, Platform} from 'react-native';
import Helper from './helper';
import commonStyle from './commonStyle';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const isIosDevice = Platform.OS === 'ios';

module.exports = {
  // Device height and width
  deviceHeight,
  deviceWidth,
  isIosDevice,

  // Color and backgroundColor
  lightGray: '#f8f8f8',
  warningColor: '#ff9800',
  blueColor: '#229de6',
  whiteColor: '#ffffff',
  greyDark: '#424c58',
  redColor: 'red',
  black: "black",

  // Font sizes
  fontSmall: 12,
  fontNormal: 13,
  fontMedium: 16,
  fontLarge: 18,
  fontXL: 20,
  fontXXL: 22,

  // helper methods and common style files
  Helper,
  commonStyle,
};
