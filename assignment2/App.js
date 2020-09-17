import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
        <AntDesign name="bars" size={24} color="black" />
      </View>
      <View style={styles.body}>
        <View style={styles.bodyTop}>
          <View style={styles.bodyTopLeft}>
            <Image
              resizeMode="cover"
              style={{ width: 100, height: 100, borderRadius: 50 }}
              source={{
                uri:
                  "https://kenh14cdn.com/thumb_w/620/2020/6/5/006mrmprly1gdx6exf3lyj30u01rcasm-15913263980501789002707-crop-15913264120321997228444.jpg",
              }}
            ></Image>
          </View>
          <View style={styles.bodyTopRight}>
            <Text style={styles.headerText}>Header name</Text>
            <Text style={styles.titleText}>Header</Text>
            <View style={styles.headerAction}>
              <Button style={{flex: 6}} title="Learn More" color="#841584"></Button>
              <MaterialIcons style={{flex:2}} name="send" size={24} color="black" />
            </View>
          </View>
        </View>
        <View style={styles.wrapInfoNumber}>
          <View>
            <Text style={styles.headerText}>210</Text>
            <Text style={styles.titleText}>Photos</Text>
          </View>
          <View>
            <Text style={styles.headerText}>24k</Text>
            <Text style={styles.titleText}>Followers</Text>
          </View>
          <View>
            <Text style={styles.headerText}>230</Text>
            <Text style={styles.titleText}>Following</Text>
          </View>
        </View>
        <View style={styles.imagesWrapper}>
          {/* <Image></Image>
            <Image></Image> */}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  jcnt: {
    justifyContent: "center",
  },
  body: {
    marginTop: 30,
    flexDirection: "column",
  },
  bodyTop: {
    flexDirection: "row",
  },
  bodyTopLeft: {
    flex: 2,
  },
  bodyTopRight: {
    flexDirection: "column",
    flex: 3,
  },
  headerAction: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 23,
    fontWeight: "500",
  },
  titleText: {
    color: "#666",
  },

  wrapInfoNumber: {
    flexDirection: "row",
    marginVertical: 20,
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  headerBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    marginHorizontal: 30,
    flexDirection: "column",
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
  },
});
