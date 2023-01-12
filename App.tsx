import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StoreProvider from './src/store';
import Router from './src/components/Router';
import routes from './src/routes';
import useStatePersistence from './src/hooks/useStatePersistence';
import { ActivityIndicator } from 'react-native';

const App = () => {
  const { initialState, isReady, onStateChange } = useStatePersistence()

  if (!isReady) {
      return <ActivityIndicator />;
  }

  return (
    <StoreProvider>
      <NavigationContainer
        onStateChange={onStateChange}
        initialState={initialState}
      >
          <Router routes={routes} />

          {/* <StatusBar style="auto" /> */}
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App