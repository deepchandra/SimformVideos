import React, {Component} from 'react';
import {Root} from 'native-base';
import {Provider} from 'react-redux';
import AppNavigator from '@Screens';
import Store from '@Redux/Store';

console.disableYellowBox = true;
export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Root>
          <AppNavigator />
        </Root>
      </Provider>
    );
  }
}
