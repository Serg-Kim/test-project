import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigation/RootNavigator';
import { COLORS } from './src/constants/colors';

const App = (): JSX.Element => (
  <SafeAreaProvider>
    <NavigationContainer>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.transparent}
        translucent={true}
      />
      <RootNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
