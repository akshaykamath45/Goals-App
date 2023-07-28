import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    console.log(enteredGoalText);
    setGoals((currentGoals) => [...currentGoals, enteredGoalText]);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add your goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of your goals...</Text>
        {goals.map((goal, index) => (
          <View key={index} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    backgroundColor: "rgb(151,116,234)",
    padding: 8,
    borderRadius: 8,
    margin: 8,
  },
  goalText: {
    color: "white",
  },
});
