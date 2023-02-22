import React from "react";
import { View, StyleSheet, ViewProps } from "react-native";
import Colors from "../../Colors";

// import { Container } from './styles';
interface Props extends ViewProps {}
export function Separator(props: Props) {
  return <View {...props} style={[styles.separator, props.style]} />;
}

const styles = StyleSheet.create({
  separator: {
    maxWidth: 1,
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    height: "95%",
    backgroundColor: Colors.gray[100],
  },
});
