import React, { useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View, ViewProps, KeyboardTypeOptions, TouchableOpacity } from "react-native";

import Colors from "../../Colors";
import Fonts from "../../Fonts";

import EyesOpen from "../assets/eyes-open.svg";
import EyesClosed from "../assets/eyes-closed.svg";

interface Props extends ViewProps {
  label: string;
  textChange: (e: string) => void;
  type?: KeyboardTypeOptions;
  placeholder?: string;
  secure?: boolean;
}
export function InputFloatingLabel({
  label,
  style,
  type = "email-address",
  placeholder,
  secure = false,
  textChange,
  ...props
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordShowing, setIsPasswordShowing] = useState(secure);
  const [value, setValue] = useState("");

  function handleTextChange(textValue: string) {
    setValue(textValue);
    textChange(textValue);
  }
  const containerFocused = {
    borderColor: Colors.green[900],
  };
  return (
    <View style={[style, styles.container, isFocused && containerFocused]}>
      <Text style={[styles.labelStyle, isFocused && styles.labelStyleFocused]}>
        {value != "" && !isFocused ? "" : placeholder != "" && label}
      </Text>

      <TextInput
        keyboardType={type}
        autoCapitalize="none"
        multiline={false}
        style={styles.textInput}
        placeholderTextColor={isFocused ? Colors.black[400] : "transparent"}
        selectionColor={Colors.green[900]}
        placeholder={placeholder || label}
        onChangeText={handleTextChange}
        secureTextEntry={isPasswordShowing}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />

      {secure && (
        <TouchableOpacity onPress={() => setIsPasswordShowing((prevState) => !prevState)} style={styles.eyesButton}>
          {isPasswordShowing ? <EyesOpen style={styles.eyes} /> : <EyesClosed fontSize={12} style={styles.eyes} />}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 4,
    borderWidth: 1,
    paddingVertical: 0,
    height: 43,
    borderColor: Colors.black[400],
    flexDirection: "row",
    alignItems: "center",
  },
  labelStyle: {
    position: "absolute",
    top: 11,
    left: 14,
    fontFamily: Fonts.Roboto.regular,
    color: Colors.black[400],
  },
  labelStyleFocused: {
    top: -10,
    left: 9,
    backgroundColor: Colors.white,
    paddingHorizontal: 5,
    color: Colors.green[900],
    fontFamily: Fonts.Roboto.medium,
  },
  textInput: {
    height: "100%",
    paddingHorizontal: 14,
    flex: 1,
    marginRight: 8,
  },
  eyesButton: {
    height: "100%",
    justifyContent: "center",
    paddingRight: 8,
  },
  eyes: {
    maxWidth: 16,
    maxHeight: 18,
  },
});
