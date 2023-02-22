import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView, NativeModules } from "react-native";
import { useFonts, Manrope_800ExtraBold, Manrope_700Bold, Manrope_500Medium } from "@expo-google-fonts/manrope";
import { Roboto_500Medium, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";
export default function App() {
  const [fontsLoaded] = useFonts({
    Manrope_500Medium,
    Manrope_700Bold,
    Manrope_800ExtraBold,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  const { StatusBarManager } = NativeModules;
  if (!fontsLoaded) return <Loading />;
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <Routes />

        <StatusBar style="dark" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
