import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Colors from "../../Colors";
import Fonts from "../../Fonts";
import { Cashback } from "../components/Cashback";
import { WalletDepositInvest } from "../components/WalletDepositInvest";
import { Warnings } from "../components/Warnings";

export function WalletScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <Text style={styles.results}>Resultados</Text>
        <WalletDepositInvest />
        <Cashback />
        <Warnings />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  insideContainer: {
    paddingTop: 14,
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  results: {
    color: Colors.gray[600],
    fontFamily: Fonts.Manrope.bold,
    fontSize: 18,
    marginBottom: 12,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
