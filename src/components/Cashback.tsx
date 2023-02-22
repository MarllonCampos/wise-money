import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SvgProps, SvgXml } from "react-native-svg";
import Colors from "../../Colors";
import Fonts from "../../Fonts";
import Clock from "../assets/clock.svg";
import CashbackIcon from "../assets/cashback.svg";
import MoneyReceived from "../assets/money-down.svg";
import { Separator } from "./Separator";

export function Cashback() {
  return (
    <View style={styles.infoContainer}>
      <CashbackItem value={1500} description="Total a Receber" iconName="clock">
        <Clock style={styles.icons} />
      </CashbackItem>
      <Separator />
      <CashbackItem value={1500} description="Total a Receber" iconName="clock">
        <CashbackIcon style={styles.icons} />
      </CashbackItem>

      <Separator />
      <CashbackItem value={1500} description="Total a Receber" iconName="clock">
        <MoneyReceived style={styles.icons} />
      </CashbackItem>
    </View>
  );
}

interface CashbackProps {
  value: number;
  description: string;
  iconName: string;
  children: ReactNode;
}
function CashbackItem({ value, description, iconName, children }: CashbackProps) {
  const formattedValue = value
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  return (
    <View style={styles.contentContainer}>
      <Text style={[Fonts.styles.manrope, Fonts.styles.manropeH3, styles.greenColor]}>R$</Text>
      <Text style={[Fonts.styles.manrope, Fonts.styles.manropeH2, styles.greenColor]}>{formattedValue}</Text>
      <View style={styles.footer}>
        <Text style={[Fonts.styles.roboto, Fonts.styles.robotoH2, styles.grayColor]}>{description}</Text>
        {children}
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
    marginTop: 16,
  },
  contentContainer: {
    flex: 0.33,
    justifyContent: "center",
  },
  greenColor: {
    color: Colors.green[900],
  },
  grayColor: {
    color: Colors.gray[600],
    flexShrink: 1,
  },
  footer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  icons: {
    maxWidth: 15,
    maxHeight: 15,
  },
});
