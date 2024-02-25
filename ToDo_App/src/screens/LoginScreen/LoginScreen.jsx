import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export const LoginScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerLogo}>ToDo</Text>
          <Text style={styles.headerInfo}>Plan, Prioritize, Conquer</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.loginFormContainer}
        >
          <View style={styles.loginFormEmailContainer}>
            <TextInput
              style={styles.loginFormInput}
              inputMode="email"
              placeholder="Email"
              placeholderTextColor={"#64ED72"}
              onChangeText={(val) => setEmail(val)}
            ></TextInput>
          </View>
          <View style={styles.loginFormPasswordContainer}>
            <TextInput
              style={styles.loginFormInput}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={"#64ED72"}
              onChangeText={(val) => setPassword(val)}
            ></TextInput>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.loginBtnContainer}>
          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
    height: "30%",
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
  loginFormContainer: {
    height: "40%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginFormInput: {
    borderBottomWidth: 3,
    borderBottomColor: "#64ED72",
    fontFamily: "JotiOne",
    fontSize: 24,
    marginVertical: 30,
    width: 290,
    color: "white",
  },
  loginBtnContainer: {
    height: "30%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 68,
    backgroundColor: "#64ED72",
    borderRadius: 99,
  },
  loginText: {
    color: "white",
    fontSize: 24,
    fontFamily: "JotiOne",
  },
});
