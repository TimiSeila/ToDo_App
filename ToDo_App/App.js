import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "./src/screens/WelcomeScreen/WelcomeScreen.jsx";
import { LoginScreen } from "./src/screens/LoginScreen/LoginScreen.jsx";
import { SignupScreen } from "./src/screens/SignupScreen/SignupScreen.jsx";
import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen.jsx";
import { MainNavigator } from "./src/MainNavigator.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    JotiOne: require("./assets/fonts/JotiOne-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={SignupScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false, gestureEnabled: false }}
          name="Main"
          component={MainNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
