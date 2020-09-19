import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const HeaderTitle = () => {
  return <Text></Text>;
};
const HeaderLeft = () => {
  return (
    <View style={styles.headerStyle}>
      <MaterialIcons name="arrow-back" size={24} color="black" />
    </View>
  );
};
const HeaderRight = () => {
  return (
    <View style={styles.headerStyle}>
      <AntDesign name="bars" size={24} color="black" />
    </View>
  );
};
const Header = () => {
  return {
    headerTitle: (props) => <HeaderTitle {...props} />,
    headerLeft: (props) => <HeaderLeft {...props} />,
    headerRight: (props) => <HeaderRight {...props} />,
  };
};
const styles = StyleSheet.create({
  headerStyle: {
    paddingHorizontal: 15,
  },
});
export default Header;
