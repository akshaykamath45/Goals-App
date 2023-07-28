import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Add your goal" style={styles.textInput} />
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of your goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal:16
   
  },
  inputContainer: {
    flex:1,
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
    flex:5,
  },
});
