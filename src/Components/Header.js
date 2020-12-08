import React from 'react';
import {Header, Left, Right, Icon} from 'native-base';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Common from '@Common';

const {Helper} = Common;
const CommonHelper = new Helper();

export default function HeaderCompo(props) {
  const {isBackBtn, leftContent, height, rightContent} = props;
  const onClickLeftIcon = () => {
    CommonHelper.goBack(props);
  };
  return (
    <>
      <Header style={{...STYLES.header, height: height || 'auto'}}>
        <Left>
          {isBackBtn ? (
            <TouchableOpacity onPress={() => onClickLeftIcon()}>
              <Icon
                style={STYLES.textIcon}
                name={'arrow-back'}
                type={'MaterialIcons'}
              />
            </TouchableOpacity>
          ) : null}
          {leftContent ? leftContent : null}
        </Left>
        {rightContent ? <Right>{rightContent}</Right> : null}
      </Header>
    </>
  );
}

const STYLES = StyleSheet.create({
  header: {
    backgroundColor: Common.lightGray,
  },
  textIcon: {
    color: Common.black,
  },
});
