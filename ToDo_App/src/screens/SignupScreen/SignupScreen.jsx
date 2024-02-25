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

export const SignupScreen = () => {
  const [fname, setFname] = useState(null);
  const [lname, setLname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigation = useNavigation();

  const handleSignup = () => {
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
          style={styles.signupFormContainer}
        >
          <View style={styles.signupFormNameContainer}>
            <TextInput
              style={styles.signupFormNameInput}
              placeholder="First Name"
              placeholderTextColor={"#64ED72"}
              onChangeText={(val) => setFname(val)}
            ></TextInput>
            <TextInput
              style={styles.signupFormNameInput}
              placeholder="Last Name"
              placeholderTextColor={"#64ED72"}
              onChangeText={(val) => setLname(val)}
            ></TextInput>
          </View>
          <View style={styles.signupFormEmailContainer}>
            <TextInput
              style={styles.signupFormInput}
              inputMode="email"
              placeholder="Email"
              placeholderTextColor={"#64ED72"}
              onChangeText={(val) => setEmail(val)}
            ></TextInput>
          </View>
          <View style={styles.signupFormPasswordContainer}>
            <TextInput
              style={styles.signupFormInput}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={"#64ED72"}
              onChangeText={(val) => setPassword(val)}
            ></TextInput>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.signupBtnContainer}>
          <TouchableOpacity style={styles.signupBtn} onPress={handleSignup}>
            <Text style={styles.signupText}>Sign Up</Text>
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
  signupFormContainer: {
    height: "50%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signupFormInput: {
    borderBottomWidth: 3,
    borderBottomColor: "#64ED72",
    fontFamily: "JotiOne",
    fontSize: 24,
    marginVertical: 30,
    width: 290,
    color: "white",
  },
  signupFormNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 290,
  },
  signupFormNameInput: {
    borderBottomWidth: 3,
    borderBottomColor: "#64ED72",
    fontFamily: "JotiOne",
    fontSize: 24,
    marginVertical: 30,
    color: "white",
    width: 130,
  },
  signupBtnContainer: {
    height: "20%",
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
});
