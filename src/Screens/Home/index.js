import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Card, Icon, Thumbnail} from 'native-base';
import Loader from '@Components/Loader';
import styles from './styles';
import Header from '@Components/Header';
import Common from '@Common';
import {useSelector, useDispatch} from 'react-redux';
import ProfileImg from '../../../assets/images/profile.jpeg';

const {commonStyle, Helper} = Common;
const CommonHelper = new Helper();

const Home = (props) => {
  const dispatch = useDispatch();

  // intial state for component
  const [state, onStateChange] = useState({
    isLoading: true,
  });

  const updateState = (newState) => {
    onStateChange({...state, ...newState});
  };
  /**
   *  redux state
   *  get the state of the store
   */
  const {videoList} = useSelector((state) => ({
    videoList: state.videoList,
  }));

  // make the async api calls that required on loading page
  useEffect(() => {
    getVideosList();
  }, []);

  // make the async api calls that required on loading page
  useEffect(() => {
    if (videoList) {
      if (videoList.status === 'success' || videoList.status == 'failed') {
        updateState({isLoading: false});
      }
    }
  }, [videoList]);

  // Render the card list for order history
  const renderCard = (item) => {
    const {thumbnail_url, title} = item;
    return (
      <TouchableOpacity
        style={styles.thumbnailWrapper}
        onPress={() => _handleVideoClick(item)}>
        <ImageBackground
          loadingIndicatorSource={true}
          source={thumbnail_url ? {uri: thumbnail_url} : null}
          style={styles.thumbnailImage}
          loadingIndicatorSource={true}
          resizeMode="cover">
          <Icon name="play-circle" typ="FontAwesome" style={styles.playIcon} />
        </ImageBackground>
        <Card style={styles.textCard}>
          <View style={styles.flexRowView}>
            <Text style={{...styles.mediumText, color: Common.blueColor}}>
              New
            </Text>
            <Text style={styles.mediumText}>1 hr ago</Text>
          </View>
          <Text
            style={{
              ...styles.xLargeText,
              paddingBottom: 10,
              color: Common.black,
            }}>
            {title}
          </Text>
          <Text style={styles.mediumText}>Ranidhara, Almora</Text>
        </Card>
      </TouchableOpacity>
    );
  };

  const _handleVideoClick = (video) => {
    console.log('====props===', props);
    CommonHelper.navigateTo(props, 'WatchVideo', {video});
  };

  const getVideosList = () => {
    dispatch({type: 'GET_VIDEOS'});
  };

  const headerLeftItem = () => {
    return (
      <View>
        <Text style={{...styles.mediumText, paddingBottom: 10}}>Today</Text>
        <Text style={styles.xLargeText}>My Feed</Text>
      </View>
    );
  };

  const headerRightItem = () => {
    return (
      <TouchableOpacity>
        <Thumbnail style={{height: 50, width: 50}} source={ProfileImg} />
      </TouchableOpacity>
    );
  };

  const {isLoading} = state;
  return (
    <View style={styles.container}>
      <Header
        rightContent={headerRightItem()}
        leftContent={headerLeftItem()}
        height={100}
      />
      <View style={styles.bodyWrapper}>
        <Loader isLoading={isLoading}>
          {videoList.result &&
          Array.isArray(videoList.result.videos) &&
          videoList.result.videos.length ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={videoList.result.videos}
              renderItem={({item, index}) => renderCard(item, index)}
              keyExtractor={({}, index) => index.toString()}
            />
          ) : (
            <Text style={commonStyle.noRecordText}>No Video found</Text>
          )}
        </Loader>
      </View>
    </View>
  );
};

export default Home;
