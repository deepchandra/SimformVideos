import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Header from '@Components/Header';
import Video from 'react-native-video';
import Common from '@Common';

const {commonStyle} = Common;

const WatchVideo = (props) => {
  const {route = {}} = props;
  const {params = {}} = route;
  return (
    <View style={styles.container}>
      <Header isBackBtn={true} title="Watch Video" {...props} />
      {params.video ? (
        <View>
          <Text
            style={{
              ...styles.xLargeText,
              paddingVertical: 20,
              textAlign: 'center',
            }}>
            {params.video.title ? params.video.title.toUpperCase() : ''}
          </Text>
          <Video
            source={{uri: params.video.video_url}}
            onBuffer={() => {}}
            onError={() => {}}
            style={styles.backgroundVideo}
          />
        </View>
      ) : (
        <Text style={commonStyle.noRecordText}>No Video found</Text>
      )}
    </View>
  );
};

export default WatchVideo;
