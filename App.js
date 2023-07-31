import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";
export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    console.log(enteredGoalText);
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    console.log("DELETE");
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  const handleModal = () => {
    setIsModalVisible(true);
  };
  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={handleModal} color="rgb(151,116,234)" />
      {isModalVisible && (
        <GoalInput onAddGoal={addGoalHandler} isModalVisible={isModalVisible}  />
      )}
      <View style={styles.goalsContainer}>
        <Text>List of your goals...</Text>
        <FlatList
          alwaysBounceVertical={false}
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData}
                deleteGoalHandler={deleteGoalHandler}
              />
            );
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
