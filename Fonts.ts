import { StyleSheet } from "react-native"
import Colors from "./Colors"
const Fonts = {
    Manrope: {
        medium: "Manrope_500Medium",
        bold: "Manrope_700Bold",
        extraBold: "Manrope_800ExtraBold",
    },
    Roboto: {
        regular: "Roboto_400Regular",
        medium: "Roboto_500Medium",
    }
}
const styles = StyleSheet.create({
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
})
export default {
    Manrope: {
        medium: "Manrope_500Medium",
        bold: "Manrope_700Bold",
        extraBold: "Manrope_800ExtraBold",
    },
    Roboto: {
        regular: "Roboto_400Regular",
        medium: "Roboto_500Medium",
    },
    styles
}



