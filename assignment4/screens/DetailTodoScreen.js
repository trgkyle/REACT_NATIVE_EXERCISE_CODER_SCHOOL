import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailTodoScreen = ({ route }) => {
  const todo = route.params.todo;
  const todoId = route.params.todoId;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.segment}>
          <Text style={styles.segmentTitle}>My Detail To Do List</Text>
          <Text style={styles.segmentDetail}>
            {todoId}. {todo.value} is {todo.status ? "done" : "pending"}
          </Text>
        </View>
      </View>
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
  segmentDetail: {
    marginTop: "10%",
    textAlign: "center",
    fontSize: 25,
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

export default DetailTodoScreen;
