import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import Colors from "../../Colors";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.green[900]} size={72} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
