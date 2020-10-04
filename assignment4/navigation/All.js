import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailTodoScreen from "../screens/DetailTodoScreen";
import MainTodoScreen from "../screens/MainTodoScreen";
const Stack = createStackNavigator();
export default function AllTab() {
  return (
    <Stack.Navigator initialRouteName="MainTodoScreen" >
      <Stack.Screen name="Main Todo Screen" component={MainTodoScreen} />
      <Stack.Screen name="Detail Todo Screen" component={DetailTodoScreen} />
    </Stack.Navigator>
  );
}
