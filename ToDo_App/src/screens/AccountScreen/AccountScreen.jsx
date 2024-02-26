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

export const AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerLogo}>ToDo</Text>
      </View>
      <View style={styles.accountContainer}>
        <Text style={styles.userName}>{auth.currentUser.displayName}</Text>
        <TouchableOpacity
          style={styles.signoutBtn}
          onPress={() => {
            signOut(auth);
            navigation.navigate("Welcome");
          }}
        >
          <Text style={styles.signoutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  accountContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    fontSize: 40,
    color: "white",
    fontFamily: "JotiOne",
  },
  signoutBtn: {
    marginVertical: 32,
    width: 250,
    height: 68,
    borderRadius: 99,
    backgroundColor: "#64ED72",
    alignItems: "center",
    justifyContent: "center",
  },
  signoutText: {
    color: "white",
    fontFamily: "JotiOne",
    fontSize: "24",
  },
});
