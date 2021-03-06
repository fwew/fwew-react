{
  /* This file is part of fwew-react. 
    fwew-react: Fwew Na'vi Dictionary app written using React Native
    Copyright (C) 2020  Corey Scheideman <corscheid@gmail.com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>. */
}
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Screen from "./screen";
import colors from "./colors";

// the root endpoint of the Fwew API
// see https://github.com/fwew/fwew-api for more info about the API
const ApiRoot = "https://tirea.learnnavi.org/api";

// screen where the user can search for specific word(s)
function FwewScreen() {
  const endpoint = ApiRoot + "/fwew/";
  return <Screen screenType="fwew" ApiUrl={endpoint} />;
}

// screen where the user can list all words (or all words that have given properties)
function ListScreen() {
  const endpoint = ApiRoot + "/list/";
  return <Screen screenType="list" ApiUrl={endpoint} />;
}

// screen where the user can view a randomized list of words
function RandomScreen() {
  const endpoint = ApiRoot + "/random/";
  return <Screen screenType="random" ApiUrl={endpoint}></Screen>;
}

const Tab = createBottomTabNavigator();

// the tab navigation at the bottom of the screen used to jump between the above screens
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Fwew":
              iconName = "search";
              break;
            case "List":
              iconName = "list";
              break;
            case "Random":
              iconName = focused ? "help" : "help-outline";
              break;
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.activeTabTint,
        activeBackgroundColor: colors.activeTabBackground,
        inactiveTintColor: colors.inactiveTabTint,
        inactiveBackgroundColor: colors.inactiveTabBackground,
      }}
    >
      <Tab.Screen name="Fwew" component={FwewScreen} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Random" component={RandomScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
