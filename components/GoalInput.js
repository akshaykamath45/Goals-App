import { View, Button, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
export const GoalInput = ({onAddGoal}) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add your goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});
