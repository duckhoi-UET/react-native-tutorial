import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import Task from "./components/Task";
import Form from "./components/Form";
import { colors } from "./constants/styles";
import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const onDeleteTask = (index, item) => {
    Alert.alert("Xác nhận xóa", `Xóa công việc ${item}`, [
      {
        text: "Hủy",
        onPress: () => {},
        style: "cancel",
      },
      { text: "Xóa", onPress: () => handleDeleteTask(index) },
    ]);
  };

  const handleDeleteTask = (index) => {
    const tasksTemp = [...tasks];
    tasksTemp.splice(index, 1);
    setTasks(tasksTemp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView>
          {tasks.map((item, index) => {
            return (
              <Task
                key={index}
                title={item}
                number={index + 1}
                onDeleteTask={() => onDeleteTask(index, item)}
              />
            );
          })}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  body: {
    flex: 1,
    marginBottom: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 500,
    color: colors.primary,
    marginBottom: 20,
  },
});
