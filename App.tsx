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

import HistoryStackScreen from './screens/HistoryStackScreen';
import HomeScreen from './screens/HomeScreen';
import store from './redux/store';
import MyComponent from './components/tabBarNavigator';

const AppTab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={PaperDarkTheme}>
        <NavigationContainer theme={NavigationDarkTheme}>
          <MyComponent></MyComponent>
          {/* <AppTab.Navigator>
            <AppTab.Screen name="Home" component={HomeScreen} />
            <AppTab.Screen name="History" component={HistoryStackScreen} />
          </AppTab.Navigator> */}
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
}
