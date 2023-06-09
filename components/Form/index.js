import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Keyboard,
} from "react-native";
import React, { useState } from "react";

import styles from "./styles";

const Form = (props) => {
  const { onAddTask } = props;
  const [task, setTask] = useState("");
  const onPress = (e) => {
    if (task.length === 0) {
      Alert.alert("Thông báo", "Vui lòng nhập tên công việc");
      return;
    }
    onAddTask(task);
    setTask("");
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={styles.form}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={15}
    >
      <TextInput
        value={task}
        placeholder="Add task..."
        style={styles.input}
        onChangeText={(text) => setTask(text)}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Form;
