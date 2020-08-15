import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import { AppLoading } from 'expo';

import HistoryStackScreen from './screens/HistoryStackScreen';
import HomeScreen from './screens/HomeScreen';

const AppTab = createMaterialBottomTabNavigator();

export default function App() {
  const [ready, setReady] = React.useState(false);

  const initLoad = () => {
    return new Promise<void>((reject, resolve) => {
      Promise.all([]).then(() => {
        resolve();
      });
    });
  };

  return !ready ? (
    <AppLoading
      startAsync={initLoad}
      onFinish={() => {
        setReady(true);
      }}
    />
  ) : (
    <PaperProvider theme={PaperDarkTheme}>
      <NavigationContainer theme={NavigationDarkTheme}>
        <AppTab.Navigator>
          <AppTab.Screen name="Home" component={HomeScreen} />
          <AppTab.Screen name="History" component={HistoryStackScreen} />
        </AppTab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
