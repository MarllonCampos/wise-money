import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../Colors";
import Fonts from "../../Fonts";
import MonthCalendar from "../assets/month-calendar.svg";
import TwoMonthsCalendar from "../assets/twoMonths-calendar.svg";
import QuarterCalendar from "../assets/quarter-calendar.svg";
import { Separator } from "./Separator";
// import { Container } from './styles';

interface Props {
  title: string;
  monthPercentage: number;
  twoMonthsPercentage: number;
  quarterPercentage: number;
  color: string;
}
export function InabilityToPay({ monthPercentage, quarterPercentage, title, twoMonthsPercentage, color }: Props) {
  return (
    <>
      <Text style={[Fonts.styles.manrope, Fonts.styles.manropeH1, styles.title]}>{title}</Text>

      <View style={styles.infoContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.daysPeriod}>
            <MonthCalendar fill={color} width={12} height={12} />
            <Text style={[Fonts.styles.roboto, Fonts.styles.robotoH1, styles.daysTitle]}>30 Dias</Text>
          </View>
          <Text style={[Fonts.styles.manrope, Fonts.styles.manropeH1, { color: color }]}>{monthPercentage}%</Text>
        </View>
        <Separator />
        <View style={styles.contentContainer}>
          <View style={styles.daysPeriod}>
            <TwoMonthsCalendar fill={color} width={12} height={12} />
            <Text style={[Fonts.styles.roboto, Fonts.styles.robotoH1, styles.daysTitle]}>60 Dias</Text>
          </View>
          <Text style={[Fonts.styles.manrope, Fonts.styles.manropeH1, { color: color }]}>{twoMonthsPercentage}%</Text>
        </View>
        <Separator />
        <View style={styles.contentContainer}>
          <View style={styles.daysPeriod}>
            <QuarterCalendar fill={color} width={12} height={12} />
            <Text style={[Fonts.styles.roboto, Fonts.styles.robotoH1, styles.daysTitle]}>90 Dias</Text>
          </View>
          <Text style={[Fonts.styles.manrope, Fonts.styles.manropeH1, { color: color }]}>{quarterPercentage}%</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.gray[600],
    marginBottom: 14,
  },
  infoContainer: {
    backgroundColor: Colors.gray.shallow,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    flexDirection: "column",
    flex: 1,
  },
  daysPeriod: {
    flexDirection: "row",
    alignItems: "center",
  },
  daysTitle: {
    color: Colors.gray[600],
    marginLeft: 8,
  },
  percentage: {},
});
