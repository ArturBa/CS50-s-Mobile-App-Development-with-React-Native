import * as React from 'react';
import { AppLoading } from 'expo';
import {
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import { View, StatusBar } from 'react-native';

import store, { initStore } from './redux/store';
import TabBarNavigator from './components/TabBarNavigator';

export default function App() {
  const [ready, setReady] = React.useState(false);
  const [styleStatusBar, setStyleStatusBar] = React.useState('light-content');

  async function initApp() {
    return new Promise<void>((resolve, reject) => {
      Promise.all([initStore()]).then(() => {
        resolve();
      });
    });
  }

  return !ready ? (
    <AppLoading startAsync={initApp} onFinish={() => setReady(true)} />
  ) : (
    <ReduxProvider store={store}>
      <PaperProvider theme={PaperDarkTheme}>
        <NavigationContainer theme={NavigationDarkTheme}>
          <View
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <StatusBar backgroundColor="black" barStyle={styleStatusBar} />
            <TabBarNavigator />
          </View>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
}
