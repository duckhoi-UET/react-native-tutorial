import React from "react";
import { StyleSheet, Button, View, SafeAreaView, Alert } from "react-native";

const ButtonExample = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Button
        title="Đăng nhập"
        onPress={() => Alert.alert("Đăng nhập thành công")}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});

export default ButtonExample;
