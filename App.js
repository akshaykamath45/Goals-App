import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";
export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = ( enteredGoalText ) => {
    console.log(enteredGoalText);
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler=()=>{
    console.log("DELETE");
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text>List of your goals...</Text>
        <FlatList
          alwaysBounceVertical={false}
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem itemData={itemData} deleteGoalHandler={deleteGoalHandler}/>;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },

  goalsContainer: {
    flex: 5,
  },
});
