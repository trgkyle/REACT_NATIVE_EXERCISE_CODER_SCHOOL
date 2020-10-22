import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };
  useEffect(() => {
    getLocation();
  }, []);

  let myLocation = false;
  if (errorMsg) {
    myLocation = errorMsg;
  } else if (location) {
    myLocation = location;
  }
  return (
    <View style={styles.container}>
      {myLocation ? (
        <MapView
          style={styles.mapStyle}
          region={{
            ...myLocation.coords,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
          provider="google"
        >
          <Marker
            style={styles.mapStyle}
            coordinate={{
              ...myLocation.coords,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            }}
          />
        </MapView>
      ) : (
        <Text>Waiting</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
