import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../Colors";
import MoneyUp from "../assets/money-up.svg";
import TotalDelay from "../assets/total-delay.svg";
import Fonts from "../../Fonts";
import { HorizontalSeparator } from "./HorizontalSeparator";

export function Warnings() {
  function formatCurrencyToBRL(value: number) {
    return value
      .toFixed(2)
      .replace(".", ",")
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
  return (
    <View style={styles.infoContainer}>
      <View style={styles.contentContainer}>
        <MoneyUp style={{ width: 20, height: 26, marginTop: -6 }} />
        <Text style={[Fonts.styles.roboto, Fonts.styles.robotoH1, styles.warningDescription]}>Total de saques</Text>
        <Text style={[Fonts.styles.manrope, Fonts.styles.manropeH2, styles.warningValue]}>
          R$ {formatCurrencyToBRL(0)}
        </Text>
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <HorizontalSeparator />
      </View>
      <View style={styles.contentContainer}>
        <TotalDelay style={{ width: 20, height: 26 }} />
        <Text style={[Fonts.styles.roboto, Fonts.styles.robotoH1, styles.warningDescription]}>Total em Atraso</Text>
        <Text style={[Fonts.styles.manrope, Fonts.styles.manropeH2, styles.warningValue]}>
          R$ {formatCurrencyToBRL(0)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: Colors.gray.shallow,
    padding: 12,
    borderRadius: 10,
    marginTop: 16,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  warningDescription: {
    marginRight: "auto",
    marginLeft: 8,
  },
  warningValue: {
    color: Colors.salmon,
  },
  footer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  horizontalSeparator: {
    width: "97%",
    height: 1,
    marginVertical: 8,
    marginHorizontal: "auto",
    backgroundColor: Colors.gray[100],
  },
});
