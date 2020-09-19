import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Text,
} from "react-native";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
const images = [
  {
    name: "Olivia",
    updateAt: "4h",
    avatar: require("../../../images/avatars/avatar1.jpg"),
    image: require("../../../images/girls/girl1.jpg"),
  },
];

const Detail = () => {
  const [widthListImage, setWidthListImage] = useState(0);
  return (
    <View>
      <View
        style={styles.imagesWrapper}
        onLayout={(event) => {
          let { width } = event.nativeEvent.layout;
          setWidthListImage(width);
        }}
      >
        <ImageBackground
          source={images[0].image}
          style={{
            width: widthListImage,
            height: Dimensions.get("screen").height / 2,
          }}
        >
          <View style={styles.container}>
            <View style={styles.headerBar}>
              <MaterialIcons name="arrow-back" size={24} color="#666" />
              <AntDesign name="bars" size={24} color="#666" />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.titleLeft}>
            <View>
              <Text style={{ fontSize: 40, fontWeight: "500" }}>
                Eiffel tower
              </Text>
              <Text>Paris, Franch</Text>
            </View>
          </View>
          <View style={styles.titleRight}>
            <TouchableHighlight
              style={{
                paddingVertical: 15,
                paddingHorizontal: 15,
                marginHorizontal: 5,
                backgroundColor: "#3B73FF",
                borderBottomStartRadius: 20,
                borderBottomEndRadius: 20,
                borderTopEndRadius: 25,
                borderTopStartRadius: 10,
              }}
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => alert("Pressed!")}
            >
              <Fontisto name="cloud-down" size={24} color="white" />
            </TouchableHighlight>
          </View>
        </View>
        <View>
          <Text>
            Lorem ipsum dolor sit amet, corsectetur adjpisicing elit. Porin
            subpit
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <AntDesign
              style={{ paddingRight: 10 }}
              name="heart"
              size={30}
              color="#666"
            />
            <FontAwesome
              style={{ paddingRight: 10 }}
              name="comment"
              size={30}
              color="#666"
            />
          </View>
          <View style={styles.footerRight}>
            <Entypo
              style={{ paddingRight: 10 }}
              name="attachment"
              size={30}
              color="#666"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
  },
  bodyTop: {
    marginBottom: 5,
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
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 15,
    fontWeight: "600",
  },
  titleText: {
    color: "#666",
  },

  headerBar: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
  },
  imagesWrapper: {
    borderBottomEndRadius: 100,
    borderBottomStartRadius: 100,
    overflow: "hidden",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerLeft: {
    flexDirection: "row",
  },
  IconColor: {
    color: "#666",
  },
  whiteColor: {
    color: "white",
  },
});

export default Detail;
