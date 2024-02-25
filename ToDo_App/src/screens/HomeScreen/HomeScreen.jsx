import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { auth } from "../../../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerLogo}>ToDo</Text>
      </View>
      <Text>Hello {auth.currentUser.displayName}</Text>
      <TouchableOpacity
        onPress={() => {
          signOut(auth);
          navigation.navigate("Welcome");
        }}
      >
        <Text>Sign Out</Text>
      </TouchableOpacity>
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
    justifyContent: "flex-start",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerLogo: {
    color: "white",
    fontSize: 40,
    fontFamily: "JotiOne",
  },
});
