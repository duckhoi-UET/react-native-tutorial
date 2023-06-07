import { StyleSheet, Text, View } from "react-native";
// import TextInputExample from "./components/Input/Input.js";
// import ButtonExample from "./components/Button/Button.js";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.textTop}>Top left</Text>
        </View>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text>Bottom right</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.textBottom}>Bottom right</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7feff",
  },

  containerTop: {
    flex: 1,
  },

  containerCenter: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  containerBottom: {
    flex: 1,
  },

  top: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 4,
  },
  textTop: {
    fontWeight: 500,
    fontSize: 20,
  },
  center: {
    width: 150,
    height: 150,
    backgroundColor: "green",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: "#7ee6fd",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 18,
  },
  textBottom: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "right",
    color: "#fff",
  },
});
