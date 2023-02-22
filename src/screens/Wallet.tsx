import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Colors from "../../Colors";
import Fonts from "../../Fonts";
import TotalBalance from "../assets/total-balance.svg";
import TotalInvestments from "../assets/total-investment.svg";
export function WalletScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <Text style={styles.results}>Resultados</Text>
        <View style={[styles.infoContainer]}>
          <View style={styles.contentContainer}>
            <TotalBalance />
            <View style={{ marginLeft: 8 }}>
              <Text style={[styles.manrope, styles.manropeH1]}>R$ 1.500,00</Text>
              <Text style={[styles.roboto, styles.robotoH1]}>Total Depositado</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.contentContainer}>
            <TotalInvestments />
            <View style={{ marginLeft: 8 }}>
              <Text style={[styles.manrope, styles.manropeH1]}>R$ 1.500,00</Text>
              <Text style={[styles.roboto, styles.robotoH1]}>Total Investido</Text>
            </View>
          </View>
        </View>
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
  infoContainer: {
    backgroundColor: Colors.gray.shallow,
    padding: 9,
    borderRadius: 10,
    flexDirection: "row",
  },
  manrope: {
    color: Colors.blue,
    fontFamily: Fonts.Manrope.bold,
  },
  manropeH1: {
    fontSize: 18,
  },
  manropeH2: {
    fontSize: 14,
  },
  manropeH3: {
    fontSize: 12,
  },
  roboto: {
    fontFamily: Fonts.Roboto.regular,
    color: Colors.gray[600],
  },
  robotoH1: {
    fontSize: 14,
  },
  robotoH2: {
    fontSize: 12,
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
