import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

import Router from './src/components/Router';
import routes from './src/routes';
import useStatePersistence from './src/hooks/useStatePersistence';

import store from './src/store';
import GlobalLoading from './src/components/GlobalLoading';
import Loading from './src/components/Loading';

const App = () => {
  const { initialState, isReady, onStateChange } = useStatePersistence()

  if (!isReady) {
      return <Loading />
  }

  return (
    <Provider store={store}>
      <NavigationContainer
        onStateChange={onStateChange}
        initialState={initialState}
      >
        <GlobalLoading />
        <Router routes={routes} />

        {/* <StatusBar style="auto" /> */}
      </NavigationContainer>
    </Provider>
  );
}

export default App