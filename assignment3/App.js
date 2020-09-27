import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ChoiceCard from "./src/components/ChoiceCard";
import ListButton from "./src/components/ListButton";
import { randomChooser } from "./libs/common/resolver";

const CHOICES = [
  {
    name: "rock",
    image: require("./images/rock.png"),
  },
  {
    name: "paper",
    image: require("./images/paper.png"),
  },
  {
    name: "scissors",
    image: require("./images/scissors.png"),
  },
];

const initUser = { name: "", image: "" };

export default function App() {
  const [gamePrompt, setGamePrompt] = useState("Choose your weapon");
  const [userChoice, setUserChoice] = useState(initUser);
  const [computerChoice, setComputerChoice] = useState(initUser);

  const getRoundOutcome = (userChoice) => {
    const computerChoice = randomChooser(CHOICES).name;
    let result;

    if (userChoice === "rock") {
      result = computerChoice === "scissors" ? "Victory" : "Defeat";
    }

    if (userChoice === "paper") {
      result = computerChoice === "rock" ? "Victory" : "Defeat";
    }

    if (userChoice === "scissors") {
      result = computerChoice === "paper" ? "Victory" : "Defeat";
    }

    if (userChoice === computerChoice) {
      result = "Tie Game!";
    }
    return [result, computerChoice];
  };

  const buttonAction = (userChoice) => {
    const [result, compChoice] = getRoundOutcome(userChoice);

    const newUserChoice = CHOICES.find((choice) => choice.name === userChoice);

    const newComputerChoice = CHOICES.find(
      (choice) => choice.name === compChoice
    );

    setGamePrompt(result);
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
  };

  const renderTitle = () => {
    switch (gamePrompt) {
      case "Victory":
        return (
          <Text style={[styles.gameTitle, { color: "#FFC700" }]}>
            {gamePrompt}!
          </Text>
        );
      case "Defeat":
        return (
          <Text style={[styles.gameTitle, { color: "#A41B15" }]}>
            {gamePrompt}!
          </Text>
        );
      default:
        return <Text style={styles.gameTitle}>{gamePrompt}!</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {renderTitle()}
      <View style={styles.choicesContainer}>
        <ChoiceCard player="Player" choiceInfo={userChoice} />
        <Text style={{ color: "#250902" }}>vs</Text>
        <ChoiceCard player="Computer" choiceInfo={computerChoice} />
      </View>
      <ListButton buttonList={CHOICES} buttonAction={buttonAction} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9ebee",
  },
  gameTitle: {
    fontSize: 23,
    fontWeight: "600",
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: "grey",
    shadowOpacity: 0.9,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-around",
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { height: 5, width: 5 },
  },
});
