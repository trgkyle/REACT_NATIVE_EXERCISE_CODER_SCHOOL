import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ActivityIndicator,
  FlatList,
  Linking,
  Image,
  SafeAreaView,
  Alert,
} from "react-native";
import moment from "moment";
import { Card } from "react-native-elements";

const API_KEY = "5c6f907ca39c479484b6214dc92d034c";
const url = (key) =>
  `http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-11&sortBy=publishedAt&apiKey=${key}`;

export default function App() {
  const [contentData, setContentData] = useState(null);
  const getContent = async () => {
    try {
      const data = await fetch(url(API_KEY));
      const dataJson = await data.json();
      setContentData(dataJson);
    } catch (e) {
      Alert.alert("Error fetching","Cannot get data")
      console.log(e);
    }
  };
  useEffect(() => {
    getContent();
  }, []);
  if (!contentData)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  const renderArticles = ({ item }) => {
    return (
      <Card
        containerStyle={{
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,

          elevation: 12,
          marginBottom: 15,
        }}
      >
        <Card.Title>{item.title}</Card.Title>
        <Image
          style={{
            width: "100%",
            height: 200,
          }}
          source={{ url: item.urlToImage }}
        />
        <Card.Divider />
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.bold, styles.content]}>Source: </Text>
            <Text>{item.source.name}</Text>
          </View>
          <Text style={[styles.name, styles.content]}>{item.description}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.bold}>Published: </Text>
            <Text>{moment(item.publishedAt).startOf("day").fromNow()}</Text>
          </View>
        </View>
        <Card.Divider />
        <View>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#ffffff00"
            onPress={() => {
              Linking.canOpenURL(item.url).then(supported => {
                if (supported) {
                  Linking.openURL(item.url);
                } else {
                  console.log(`Don't know how to open URL: ${item.url}`);
                }
              });
              // navigation.navigate("Profile");
            }}
          >
            <Text style={{color: "#347AB7"}}>Read more</Text>
          </TouchableHighlight>
        </View>
      </Card>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View><Text style={{fontWeight: "bold", paddingBottom: 10}}>Articles Count: {contentData?.articles.length}</Text></View>
      <FlatList
        data={contentData?.articles}
        renderItem={renderArticles}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
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
  bold: {
    fontWeight: "bold",
  },
  content: {
    marginVertical: 5,
  },
});
