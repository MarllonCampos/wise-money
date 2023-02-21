import React from "react"
import { Text, TouchableWithoutFeedback, View } from "react-native"
import Colors from "../../Colors"
import Fonts from "../../Fonts"
import { useNavigation } from "@react-navigation/native"




export function Page404() {
    const { navigate } = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: Colors.white, justifyContent: "center", alignItems: "center" }}>
            <Text>
                Esta página não foi encontrada {" "}
                    <TouchableWithoutFeedback onPress={() => navigate("home")} >
                        <Text style={{ color: Colors.green.accent, fontFamily: Fonts.Manrope.bold, textDecorationLine: "underline", textDecorationColor: Colors.green.accent}}>
                            voltar para a página
                        </Text>
                    </TouchableWithoutFeedback>
            </Text>
        </View>
    )
}