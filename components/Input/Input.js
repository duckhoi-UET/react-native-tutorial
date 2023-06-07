import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const TextInputExample = () => {
  const [username, onChangeText] = React.useState("Useless Text");
  const [password, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Tài khoản"
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={password}
        placeholder="Mật khẩu"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#fff",
    color: "#fff",
  },
});

export default TextInputExample;
