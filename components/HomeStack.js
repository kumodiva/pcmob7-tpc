import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { PRATAPLACELIST_SCREEN, PROFILE_SCREEN } from "../constants";
import PrataPlaceList from "../screens/PrataPlaceList";
import ProfileScreen from "../screens/ProfileScreen";

const BottomTab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name == PRATAPLACELIST_SCREEN.Home) iconName = "list-alt";
          else iconName = "user";

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
    >
      <BottomTab.Screen name={PRATAPLACELIST_SCREEN.Home} component={PrataPlaceList} />
      <BottomTab.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}