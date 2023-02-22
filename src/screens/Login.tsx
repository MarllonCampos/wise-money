import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { InputFloatingLabel } from "../components/InputFloatingLabel";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../../Colors";
import Fonts from "../../Fonts";
import WiseMoneyLogo from "../assets/wiseMoney.svg";
import { API_BASE_URL, API_KEY } from "@env";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();

  async function saveInfoOnAsyncStorage(data: string) {
    await AsyncStorage.setItem("@wise-money", JSON.stringify(data));
  }

  async function getInfoOnAsyncStorage(): Promise<string> {
    const wiseMoneyAccess = await AsyncStorage.getItem("@wise-money");
    return wiseMoneyAccess || "";
  }

  async function handleLogin() {
    setLoading(true);
    const headers = new Headers();
    headers.append("api-key", API_KEY);
    headers.append("content-type", "application/json");
    try {
      const rightEmail = "testefront@frontend.com";
      const rightPass = "cbr29NEN";
      const response = await fetch(API_BASE_URL, {
        headers,
        method: "POST",
        body: JSON.stringify({ identifier: email, password }),
      });
      const responseJson = await response.json();
      if (response.status < 200 || response.status >= 400) {
        console.log(JSON.stringify(response));
        throw new Error(responseJson.message);
      }
      saveInfoOnAsyncStorage(responseJson);
      navigate("tabs");
    } catch (error: any) {
      Alert.alert("Error", error.message);
      if (error.message == "") console.log(error);
    }
    setLoading(false);
  }
  return (
    <TouchableWithoutFeedback
      onPress={async () => {
        console.log(await getInfoOnAsyncStorage());
        Keyboard.dismiss();
      }}
    >
      <LinearGradient
        colors={[Colors.green[900], Colors.green[100]]}
        start={[1, 0.745]}
        end={[Math.cos(6.252023338460159), Math.sin(6.252023338460159)]}
        locations={[0.2169, 0.745]}
        style={styles.container}
      >
        <WiseMoneyLogo style={styles.logo} />
        <View style={styles.form}>
          <Text style={styles.title}>Login</Text>

          <InputFloatingLabel label="E-mail" placeholder="email@provedor.com.br" textChange={setEmail} />
          <InputFloatingLabel
            label="Senha"
            style={{ marginTop: 25 }}
            secure
            placeholder="Digite a sua senha"
            type="default"
            textChange={setPassword}
          />
          <TouchableOpacity activeOpacity={0.7} style={styles.buttonContainer} onPress={handleLogin}>
            <LinearGradient
              colors={[Colors.green[900], Colors.green[900]]}
              start={{ x: 0.5, y: 0.0 }}
              end={{ x: 0.5, y: 1.0 }}
              locations={[1.0, 0.0]}
              style={styles.button}
            >
              {loading ? <ActivityIndicator color={Colors.white} /> : <Text style={styles.buttonText}>Acessar</Text>}
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    marginLeft: 24,
    marginBottom: 10,
  },
  form: {
    paddingTop: 32,
    paddingHorizontal: 24,
    width: "100%",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: Colors.gray[600],
    marginBottom: 30,
    fontFamily: Fonts.Manrope.bold,
  },

  buttonContainer: {
    marginVertical: 35,
    width: "100%",
    height: 43,
    elevation: 8,
    shadowColor: Colors.green.accent,
  },
  button: {
    borderRadius: 8,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontFamily: Fonts.Manrope.bold,
    fontSize: 14,
  },
});
