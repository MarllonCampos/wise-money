import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../Colors";

export function HorizontalSeparator() {
  return <View style={styles.horizontalSeparator} />;
}

const styles = StyleSheet.create({
  horizontalSeparator: {
    width: "97%",
    height: 1,
    marginVertical: 8,
    marginHorizontal: "auto",
    backgroundColor: Colors.gray[100],
  },
});
