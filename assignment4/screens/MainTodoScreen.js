import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Header } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MainTodoScreen = () => {
  const [todoState, setTodoState] = useState([
    { value: "My new to do", status: false },
  ]);
  const [inputTodo, setInputTodo] = useState("");
  const navigation = useNavigation();
  const actionAddNewTodo = (item) => {
    let newTodoState = Array.from(todoState);
    newTodoState.push(item);
    setTodoState(newTodoState);
  };
  const actionDeleteTodo = (id) => {
    let newTodoState = Array.from(todoState);
    newTodoState.splice(id, 1);
    setTodoState(newTodoState);
  };
  const actionButtonCheck = (item, id) => {
    let newTodoState = Array.from(todoState);
    newTodoState[id].status = !todoState[id].status;
    setTodoState(newTodoState);
  };
  const renderCheckedIcon = (status) => {
    console.log("rerender");
    if (status)
      return (
        <MaterialIcons
          style={styles.iconStyle}
          name="radio-button-checked"
          size={24}
          color="#eee"
        />
      );
    else
      return (
        <MaterialIcons
          style={styles.iconStyle}
          name="radio-button-unchecked"
          size={24}
          color="#666"
        />
      );
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={64}
        style={styles.container}
      >
        <ScrollView>
          <View style={styles.bodyContainer}>
            <View style={styles.segment}>
              <Text style={styles.segmentTitle}>My To Do List</Text>
              <View style={styles.segmentBody}>
                {todoState.map((item, index) => {
                  return (
                    <View key={index} style={styles.segmentContainer}>
                      <TouchableHighlight
                        style={{ flex: 1 }}
                        underlayColor="#DDDDDD"
                        onLongPress={() => {
                          navigation.navigate("Detail Todo Screen", {
                            todo: item,
                            todoId: index + 1,
                          });
                        }}
                        onPress={() => {
                          actionButtonCheck(item, index);
                        }}
                      >
                        <View
                          style={[
                            styles.segmentSelectOption,
                            {
                              backgroundColor: item.status
                                ? "#0299FF"
                                : "transparent",
                            },
                          ]}
                        >
                          <View
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            {renderCheckedIcon(item.status)}
                            <Text
                              style={{
                                textDecorationLine: item.status
                                  ? "line-through"
                                  : "none",
                                color: item.status ? "white" : "black",
                              }}
                            >
                              {index + 1}. {item.value}
                            </Text>
                          </View>
                          <TouchableHighlight
                            onPress={() => {
                              actionDeleteTodo(index);
                            }}
                          >
                            <AntDesign
                              style={styles.iconStyle}
                              name="closecircleo"
                              size={24}
                              color={item.status ? "#fff" : "#666"}
                            />
                          </TouchableHighlight>
                        </View>
                      </TouchableHighlight>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomBody}>
              <View style={styles.segmentInputWrapper}>
                <TextInput
                  placeholder="Add your to do"
                  style={styles.segmentInput}
                  onChangeText={(text) => setInputTodo(text)}
                  value={inputTodo}
                />
              </View>

              <View style={styles.segmentSendWrapper}>
                <TouchableHighlight
                  style={styles.segmentSendIcon}
                  underlayColor="#DDDDDD"
                  onPress={() => {
                    if (inputTodo)
                      actionAddNewTodo({ value: inputTodo, status: false });
                    setInputTodo("");
                    console.log("segment action");
                  }}
                >
                  <FontAwesome name="send" size={24} color="white" />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 5,
  },
  headerContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  headerRight: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    flexDirection: "row",
  },
  bodyContainer: {
    paddingTop: 20,
    flex: 1,
    flexDirection: "column",
  },
  segment: {
    flex: 1,
    flexDirection: "column",
  },
  segmentTitle: {
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
  },
  segmentBody: {
    paddingLeft: 10,
    flex: 1,
    flexDirection: "column",
  },
  segmentContainer: {
    marginVertical: 5,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  segmentSelectOption: {
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    borderColor: "#BBB",
    alignItems: "center",
    borderWidth: 1,
    justifyContent: "space-between",
  },
  iconStyle: {
    paddingHorizontal: 10,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
  },
  bottomBody: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  segmentInputWrapper: {
    flex: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  segmentSendWrapper: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  segmentInput: {
    paddingHorizontal: 20,
    height: 40,
    flex: 9,
    flexDirection: "row",
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 1,
  },
  segmentSendIcon: {
    flexDirection: "row",
    borderRadius: 10,
    paddingVertical: 4,
    backgroundColor: "#0299FF",
    overflow: "hidden",
    flex: 2,
    justifyContent: "center",
  },
});

export default MainTodoScreen;
