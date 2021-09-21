/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Provider} from 'react-redux';

import {
  // Button,
  Provider as PaperProvider,
  // Appbar,
  // Text,
} from 'react-native-paper';
// import {
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,

//   // useColorScheme,
// } from 'react-native';
import {theme} from './app/constants';
// import Block from './app/components/Block';
// import Selector from './app/components/Selector';
import store from './app/store';
import App from './app/navigation';

export default function Main() {
  console.log(theme);
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </PaperProvider>
  );
}
