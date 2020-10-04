import React from "react";
import { Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Active from "./navigation/Active";
import All from "./navigation/All";
import Complete from "./navigation/Complete";

const TabNavigator = createBottomTabNavigator({
  Active: Active,
  All: All,
  Complete: Complete,
});

export default createAppContainer(TabNavigator);
