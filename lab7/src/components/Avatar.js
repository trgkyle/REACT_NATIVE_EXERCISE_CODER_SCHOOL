import react from "react";
import { View, StyleSheet } from "react-native";
const Avatar = () => {
  return <View style={styles.avatarWrapper}></View>;
};
const styles = StyleSheet.create({
  avatarWrapper: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 20
  },
});
export default Avatar;
