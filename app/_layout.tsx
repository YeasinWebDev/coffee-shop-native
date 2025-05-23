import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { Button, TamaguiProvider, Theme } from "tamagui";

import { useColorScheme } from "@/hooks/useColorScheme";
import tamaguiConfig from "@/tamagui.config";
import { getUser } from "@/ulits";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      loadUser()
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  const loadUser = async () => {
    try {
      const { token, user } = await getUser();
      if (token && user) {
        router.replace("/(tabs)");
      } else {
        router.replace("/SignIn");
      }
    } catch (error) {
      console.error('Failed to load user', error);
      router.replace("/SignIn");
    }
  };
  

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name="dark">
        <Stack screenOptions={{headerShown:false}}>
          <Stack.Screen name="(tabs)"/>
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="details/[id]"/>
          <Stack.Screen name="(auth)/SignIn" />
          <Stack.Screen name="(auth)/SignUp" />
          
        </Stack>
        <StatusBar style="light" /> {/* Always light status bar */}
      </Theme>
    </TamaguiProvider>
  );
}
