import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerLogo}>ToDo</Text>
        <Text style={styles.headerInfo}>Plan, Prioritize, Conquer</Text>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.loginOptionContainer}>
          <Text style={styles.loginOptionText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginOptionBtn}> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#192B37",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    height: "50%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerLogo: {
    color: "white",
    fontSize: 96,
    fontFamily: "JotiOne",
  },
  headerInfo: {
    color: "white",
    fontSize: 20,
    fontFamily: "JotiOne",
  },
  actionsContainer: {
    height: "50%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signupBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 68,
    backgroundColor: "#64ED72",
    borderRadius: 99,
  },
  signupText: {
    color: "white",
    fontSize: 24,
    fontFamily: "JotiOne",
  },
  loginOptionContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  loginOptionText: {
    color: "white",
    fontFamily: "JotiOne",
  },
  loginOptionBtn: {
    color: "#64ED72",
    fontFamily: "JotiOne",
  },
});
