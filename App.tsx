import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import Routes from "./src/routes";
import { HeroProvider } from "./src/context/HeroContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Gilroy_Bold: require("./src/assets/fonts/gilroy-bold.ttf"),
    Gilroy_Regular: require("./src/assets/fonts/gilroy-regular.ttf"),
    Gilroy_Heavy: require("./src/assets/fonts/gilroy-heavy.ttf"),
    Gilroy_Medium: require("./src/assets/fonts/gilroy-medium.ttf"),
    Gilroy_SemiBold: require("./src/assets/fonts/gilroy-semibold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <HeroProvider>
      <StatusBar style="auto" />
      <Routes />
    </HeroProvider>
  );
}
