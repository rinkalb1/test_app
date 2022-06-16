/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { Provider } from 'react-redux';
import store from './src/redux/store/index';

//Main Navigator
import RouteNavigation from './src/routes'

const App = () => {
  return (
    <Provider store={store}>
      <RouteNavigation />
    </Provider>
  )
}

export default App;

