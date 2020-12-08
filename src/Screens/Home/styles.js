import {StyleSheet} from 'react-native';
import Common from '@Common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Common.lightGray,
  },
  bodyWrapper: {
    flex: 9,
    backgroundColor: Common.lightGray,
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  thumbnailWrapper: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
  },
  thumbnailImage: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  xLargeText: {
    fontWeight: 'bold',
    fontSize: Common.fontXXL,
    color: Common.greyDark,
  },
  mediumText: {
    color: Common.greyDark,
    fontWeight: 'bold',
    fontSize: Common.fontMedium,
  },
  playIcon: {
    position: 'absolute',
    top: '43%',
    left: '45%',
  },
  textCard: {
    padding: 10,
    position: 'absolute',
    bottom: 20,
    width: '100%',
    borderRadius: 15,
  },
  flexRowView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: Common.deviceHeight-100,
    width: Common.deviceWidth
  },
});
