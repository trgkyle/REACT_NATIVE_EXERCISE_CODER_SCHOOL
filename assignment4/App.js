import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import Active from "./navigation/Active";
import All from "./navigation/All";
import Complete from "./navigation/Complete";

const screenOptionsRender = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === "Complete") {
      return (
        <MaterialCommunityIcons name="check-all" size={size} color={color} />
      );
    } else if (route.name === "All") {
      return (
        <Ionicons name="ios-add-circle-outline" size={size} color={color} />
      );
    } else if (route.name === "Active") {
      return <Octicons name="settings" size={size} color={color} />;
    }
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptionsRender}
        tabBarOptions={{
          activeTintColor: "#358c63",
          inactiveTintColor: "gray",
        }}
        initialRouteName="All"
      >
        <Tab.Screen name="Complete" component={Complete} />
        <Tab.Screen name="All" component={All} />
        <Tab.Screen name="Active" component={Active} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
