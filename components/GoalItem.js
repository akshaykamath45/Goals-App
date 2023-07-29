import { View, Text, StyleSheet, Pressable } from "react-native";
export const GoalItem = ({ itemData, deleteGoalHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => deleteGoalHandler(itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "rgb(151,116,234)",
    borderRadius: 8,
    margin: 8,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    backgroundColor: "black",
    borderRadius: 8,
  },
});
