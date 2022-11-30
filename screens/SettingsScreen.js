import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SettingsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Settings screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SettingsScreen;
