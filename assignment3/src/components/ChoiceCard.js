import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { capitalizeFirstLetter } from "../../libs/common/resolver";

const ChoiceCard = ({ player, choiceInfo }) => {
  const playerName = capitalizeFirstLetter(player);
  const choiceName = capitalizeFirstLetter(choiceInfo.name);
  return (
    <View style={styles.choiceContainer}>
      <Text style={styles.choiceDescription}>{playerName}</Text>
      {choiceInfo.image ? (
        <Image
          source={choiceInfo.image}
          resizeMode="contain"
          style={styles.choiceImage}
        />
      ) : (
        <View style={styles.choiceImage} />
      )}
      <Text style={styles.choiceCardTitle}>{choiceName}</Text>
    </View>
  );
};

export default ChoiceCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9ebee",
  },
  choiceContainer: {
    flex: 1,
    alignItems: "center",
  },
  choiceDescription: {
    fontSize: 25,
    color: "#250902",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  choiceCardTitle: {
    fontSize: 30,
    color: "#250902",
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  },
});
