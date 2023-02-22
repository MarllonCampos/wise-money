import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../Colors";
import Fonts from "../../Fonts";

import TotalBalance from "../assets/total-balance.svg";
import TotalInvestments from "../assets/total-investment.svg";
import { Separator } from "./Separator";

export function WalletDepositInvest() {
  return (
    <View style={[styles.infoContainer]}>
      <View style={styles.contentContainer}>
        <TotalBalance />
        <View style={{ marginLeft: 8 }}>
          <Text style={[Fonts.styles.manrope, Fonts.styles.manropeH1]}>R$ 1.500,00</Text>
          <Text style={[Fonts.styles.roboto, Fonts.styles.robotoH1]}>Total Depositado</Text>
        </View>
      </View>
      <Separator />
      <View style={styles.contentContainer}>
        <TotalInvestments />
        <View style={{ marginLeft: 8 }}>
          <Text style={[Fonts.styles.manrope, Fonts.styles.manropeH1]}>R$ 1.500,00</Text>
          <Text style={[Fonts.styles.roboto, Fonts.styles.robotoH1]}>Total Investido</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: Colors.gray.shallow,
    padding: 9,
    borderRadius: 10,
    flexDirection: "row",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  separator: {
    maxWidth: 1,
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    height: "95%",
    backgroundColor: Colors.gray[100],
  },
});
