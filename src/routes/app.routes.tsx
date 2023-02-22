import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WalletScreen } from "../screens/Wallet";
import Wallet from "../assets/wallet.svg";
import Investments from "../assets/investments.svg";
import Oportunities from "../assets/oportunities.svg";
import Indicators from "../assets/indicators.svg";
import Profile from "../assets/profile.svg";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import { Login } from "../screens/Login";
import { Page404 } from "../screens/404";
import Colors from "../../Colors";
import Fonts from "../../Fonts";
const routes = {
  wallet: <Wallet />,
  oportunities: <Oportunities />,
  investments: <Investments />,
  indicators: <Indicators />,
  profile: <Profile />,
};
const portugueseRoutes = {
  wallet: "Carteira",
  oportunities: "Oportunidades",
  investments: "Investimentos",
  indicators: "Indicadores",
  profile: "Perfil",
};

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          const routeName = route.name;
          return routes[routeName as keyof typeof routes];
        },
        tabBarStyle: {
          height: 64,
        },
        tabBarLabelStyle: {
          marginTop: -9,
          marginBottom: 13,
          fontFamily: Fonts.Manrope.extraBold,
          textTransform: "capitalize",
        },
        headerShown: false,
        tabBarLabel: portugueseRoutes[route.name as keyof typeof portugueseRoutes],
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: Colors.gray[300],
      })}
    >
      <Tab.Screen name="wallet" component={WalletScreen} />
      <Tab.Screen name="oportunities" component={Page404} />
      <Tab.Screen name="investments" component={Page404} />
      <Tab.Screen name="indicators" component={Page404} />
      <Tab.Screen name="profile" component={Page404} />
    </Tab.Navigator>
  );
}

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="tabs" component={BottomTab} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
