import React, { Fragment } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { capitalizeFirstLetter } from "../../libs/common/string-resolver";

const ListButton = ({ buttonList = [], buttonAction }) => {
  return (
    <Fragment>
      {buttonList.map((choice, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => buttonAction(choice.name)}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>
              {capitalizeFirstLetter(choice.name)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </Fragment>
  );
};
export default ListButton;

const styles = StyleSheet.create({
  buttonStyle: {
    width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#640D14",
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
});
