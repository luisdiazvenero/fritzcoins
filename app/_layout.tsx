import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Head from 'expo-router/head';
import { useFrameworkReady } from './hooks/useFrameworkReady';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Bold': Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
    <Head>
        <title>FritzCoins - Tu Billetera Digital</title>
        <meta name="description" content="Gana, canjea y transfiere FritzCoins con facilidad" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="FritzCoins - Tu Billetera Digital" />
        <meta property="og:description" content="Gana, canjea y transfiere FritzCoins con facilidad" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/assets/images/favicon.png" />
      </Head>
      
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="welcome" 
          options={{ 
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen 
          name="login" 
          options={{ 
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            animation: 'fade',
          }}
        />
        <Stack.Screen 
          name="product/[id]" 
          options={{ 
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen 
          name="+not-found" 
          options={{ 
            animation: 'slide_from_bottom',
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}