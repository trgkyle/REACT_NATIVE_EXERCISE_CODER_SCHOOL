import { StatusBar } from "expo-status-bar";
import database from "./lib/chats";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

export default function App() {
  const [commentsRef, setCommentsRef] = useState(database.ref("message"));
  const [author, setAuthor] = useState(null);
  const [inputAuthor, setInputAuthor] = useState(null);
  const [inputComment, setInputComment] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const setAuthorAction = () => {
    setAuthor(inputAuthor);
  };

  useEffect(() => {
    commentsRef.on("child_added", function (data) {
      const newChatMessages = chatMessages;
      newChatMessages.push(data);
      setChatMessages(newChatMessages);
    });

    commentsRef.on("child_changed", function (data) {
      console.log("change");
      // console.log(data);
    });

    commentsRef.on("child_removed", function (data) {
      console.log("remove");
      // console.log(data);
    });
  }, []);

  useEffect(() => {}, [chatMessages]);

  if (!author) {
    return (
      <View style={styles.container}>
        <View style={styles.initWrapper}></View>
        <Text style={{ fontWeight: "800", fontSize: 20, padding: 10 }}>
          Enter your name
        </Text>
        <TextInput
          onChangeText={(text) => setInputAuthor(text)}
          style={{
            padding: 4,
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: 300,
            borderRadius: 10,
          }}
        />
        <TouchableHighlight
          style={{
            borderWidth: 1,
            backgroundColor: "#EEE",
            padding: 10,
            margin: 20,
            borderRadius: 10,
          }}
          onPress={() => {
            setAuthorAction();
          }}
        >
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.chatWrapper}>
        {chatMessages.map((item, index) => {
          {/* console.log(item); */}
          return (
            <View
              key={index}
              style={
                item.val().user === inputAuthor ? styles.chatRight : styles.chatLeft
              }
            >
              <Text>{item.val().message}</Text>
            </View>
          );
        })}
        <TextInput
          onSubmitEditing={() => {
            // set input in here
            if (commentsRef) {
              commentsRef.push({ message: inputComment, user: inputAuthor });
            }
            setInputComment("");
          }}
          value={inputComment}
          onChangeText={(text) => setInputComment(text)}
          style={{
            marginTop: 20,
            padding: 4,
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  initWrapper: {
    flexDirection: "column",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  chatWrapper: {
    flex: 1,
    margin: 20,
    flexDirection: "column",
  },
  chatLeft: {
    margin: 4,
    padding: 20,
    flexDirection: "row",
    backgroundColor: "#ddd",
    justifyContent: "flex-start",
    borderRadius: 10,
  },
  chatRight: {
    margin: 4,
    padding: 20,
    flexDirection: "row",
    backgroundColor: "#ddd",
    justifyContent: "flex-end",
    borderRadius: 10,
    // flexDirection: "row"
  },
});
