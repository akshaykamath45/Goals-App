import { View, Text, StyleSheet } from "react-native";
export const GoalItem = ({itemData}) => {
  return (
    <View key={itemData.index} style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
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
