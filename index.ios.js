import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import App from './src/App';

const store = configureStore()

const ChatChitNative = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('ChatChitNative', () => ChatChitNative);
