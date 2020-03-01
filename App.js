/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import TabNavigation from './navigation/TabNavigation';
import FlashMessage from 'react-native-flash-message';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="#3498DB" barStyle="light-content" />
        <TabNavigation />
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
// });

export default App;
