import { View, Button, TextInput, StyleSheet, Modal } from "react-native";
import { useState } from "react";
export const GoalInput = ({ onAddGoal, isModalVisible,endGoalHandler}) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={isModalVisible} animationType="slider">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add your goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={endGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 24,
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    padding: 8,
    marginRight: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
