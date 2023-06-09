import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";

const Task = (props) => {
  const { title, number, onDeleteTask } = props;
  const itemBg = number % 2 === 0 ? styles.even : styles.odd;
  return (
    <TouchableOpacity onPress={onDeleteTask}>
      <View style={styles.item}>
        <View style={[styles.square, itemBg]}>
          <Text style={styles.number}>{number}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.textContent}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
