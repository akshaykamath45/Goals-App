import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text> Another piece of text!</Text>
      </View>
      <Text
        style={{
          margin: 16,
          borderWidth: 2,
          borderColor: "red",
          borderRadius: 4,
          padding: 4,
        }}
      >
        Hello World!
      </Text>
      <Button title="Tap me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
