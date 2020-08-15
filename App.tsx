import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider as ReduxProvider } from 'react-redux';

import {
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import store from './redux/store';
import TabBarNavigator from './components/TabBarNavigator';

const AppTab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={PaperDarkTheme}>
        <NavigationContainer theme={NavigationDarkTheme}>
          <TabBarNavigator />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
}
