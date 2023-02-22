import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../Colors";
import Fonts from "../../Fonts";
import MediumReturnTax from "../assets/medium-return-tax.svg";
import { HorizontalSeparator } from "./HorizontalSeparator";
export function FeeReturnAverage() {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <MediumReturnTax style={{ width: 20, height: 10 }} fill="#F00" />
          <Text style={[Fonts.styles.roboto, Fonts.styles.robotoH1, styles.title]}>Taxa Média de Retorno</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={[Fonts.styles.roboto, Fonts.styles.robotoH2, styles.description]}>Ao Mês (A.M)</Text>
          <Text style={[Fonts.styles.manrope, Fonts.styles.manropeH2]}>2,86%</Text>
        </View>
        <HorizontalSeparator />
        <View style={{ flexDirection: "row" }}>
          <Text style={[Fonts.styles.roboto, Fonts.styles.robotoH2, styles.description]}>Ao Ano (A.A)</Text>
          <Text style={[Fonts.styles.manrope, Fonts.styles.manropeH2]}>40,27%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: Colors.gray.shallow,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 16,
  },
  contentContainer: {
    flexDirection: "column",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    color: Colors.blue,
    marginLeft: 12,
  },
  description: {
    marginRight: "auto",
    color: Colors.gray[600],
  },
});
