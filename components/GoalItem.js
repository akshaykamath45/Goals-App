import { View, Text, StyleSheet, Pressable } from "react-native";
export const GoalItem = ({ itemData,deleteGoalHandler }) => {
  return (
    <Pressable onPress={deleteGoalHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
