import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const url = (location) =>
  `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0280dce71258974a9d85df4648f402ae`;

export default function App() {
  const [country, setCountry] = useState("london");
  const [weatherData, setWeatherData] = useState(null);
  const callWeather = async () => {
    try {
      console.log(url(country));
      const data = await fetch(url(country));
      const dataJson = await data.json();
      setWeatherData(dataJson);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    callWeather();
  }, [country]);
  return (
    <View style={styles.container}>
      <View>
        <Text>{weatherData.main.temp}</Text>
        <Text>{weatherData.weather[0].description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD">
          <View style={styles.buttonWeather}>
            <Text>London</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD">
          <View style={styles.buttonWeather}>
            <Text>London</Text>
          </View>
        </TouchableHighlight>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexWrap: "wrap",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWeather: {
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
});
