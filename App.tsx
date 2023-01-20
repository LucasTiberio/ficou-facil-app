import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

import Router from './src/components/Router';
import routes from './src/routes';
import useStatePersistence from './src/hooks/useStatePersistence';

import store from './src/store';

const App = () => {
  const { initialState, isReady, onStateChange } = useStatePersistence()

  if (!isReady) {
      return <ActivityIndicator style={{ position: "absolute", left: 100, top: 300}} color="#00ff00" size="large" animating />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer
        onStateChange={onStateChange}
        initialState={initialState}
      >
          <Router routes={routes} />

          {/* <StatusBar style="auto" /> */}
      </NavigationContainer>
    </Provider>
  );
}

export default App