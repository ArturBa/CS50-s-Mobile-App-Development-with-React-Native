import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import { AppLoading } from 'expo';

import {
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import store from './redux/store';
import TabBarNavigator from './components/TabBarNavigator';

export default function App() {
  const [ready, setReady] = React.useState(false);

  async function initApp() {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2 * 1000);
    });
  }

  return !ready ? (
    <AppLoading startAsync={initApp} onFinish={() => setReady(true)} />
  ) : (
    <ReduxProvider store={store}>
      <PaperProvider theme={PaperDarkTheme}>
        <NavigationContainer theme={NavigationDarkTheme}>
          <TabBarNavigator />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
}
