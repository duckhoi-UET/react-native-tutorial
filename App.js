import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import TextInputExample from "./components/Input/Input.js";
import ButtonExample from "./components/Button/Button.js";

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.innerText}>Đăng nhập</Text>
        <StatusBar style="auto" />
        <TextInputExample />
        <ButtonExample />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  innerText: {
    color: "red",
    fontSize: 30,
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: 500,
  },
});
