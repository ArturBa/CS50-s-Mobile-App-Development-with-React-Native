import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import HistoryStackScreen from './screens/HistoryStackScreen';
import HomeScreen from './screens/HomeScreen';

const AppTab = createMaterialBottomTabNavigator();

export default function App() {
  const [ready, setReady] = React.useState(false);

  const initLoad = () => {
    return new Promise<void>((reject, resolve) => {
      Promise.all([loadFont]).then(() => {
        resolve();
      });
    });
  };

  const loadFont = Font.loadAsync(
    'antoutline',
    // eslint-disable-next-line
    require('@ant-design/icons-react-native/fonts/antoutline.ttf')
  );

  return !ready ? (
    <AppLoading
      startAsync={initLoad}
      onFinish={() => {
        setReady(true);
      }}
    />
  ) : (
    <NavigationContainer>
      <AppTab.Navigator>
        <AppTab.Screen name="Home" component={HomeScreen} />
        <AppTab.Screen name="History" component={HistoryStackScreen} />
      </AppTab.Navigator>
    </NavigationContainer>
  );
}
