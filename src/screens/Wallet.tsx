import React from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import Colors from "../../Colors";
import Fonts from "../../Fonts";
import { Cashback } from "../components/Cashback";
import { FeeReturnAverage } from "../components/FeeReturnAverage";
import { InabilityToPay } from "../components/InabilityToPay";
import { WalletDepositInvest } from "../components/WalletDepositInvest";
import { Warnings } from "../components/Warnings";

export function WalletScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <View style={styles.insideContainer}>
        <Text style={styles.results}>Resultados</Text>
        <WalletDepositInvest />
        <Cashback />
        <Warnings />
        <FeeReturnAverage />
      </View>
      <View style={styles.insideContainer}>
        <InabilityToPay
          title="Inadimplência - Carteira Individual"
          monthPercentage={1.87}
          twoMonthsPercentage={1.18}
          quarterPercentage={0.59}
          color={Colors.green[900]}
        />
      </View>
      <View style={styles.insideContainer}>
        <InabilityToPay
          title="Inadimplência - Carteira WiseMoney"
          monthPercentage={1.44}
          twoMonthsPercentage={0.96}
          quarterPercentage={0.67}
          color={Colors.blue}
        />
      </View>
    </ScrollView>
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
    marginBottom: 8,
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
