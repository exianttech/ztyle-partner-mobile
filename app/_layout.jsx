import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';

//redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/store';



export default function RootLayout() {

  // Prevent the splash screen from auto-hiding before asset loading is complete.
  SplashScreen.preventAutoHideAsync();
  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    JostRegular: require('@/assets/fonts/Jost-Regular.ttf'),
    JostBold: require('@/assets/fonts/Jost-Bold.ttf'),
    DancingScriptRegular: require('@/assets/fonts/DancingScript-Regular.ttf'),
    DancingScriptBold: require('@/assets/fonts/DancingScript-Bold.ttf')
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }

  }, [loaded]);

  if (!loaded) return null;

  
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator size="large" color="#20c997" />} persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar style="dark" />
          <Stack screenOptions={{ headerShown: false }} />
          <FlashMessage position='top' />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
    
  )
}