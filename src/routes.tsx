import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import HeroDetail from "./screens/HeroDetail";

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Home" component={Home} />
        <Screen name="HeroDetail" component={HeroDetail} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
