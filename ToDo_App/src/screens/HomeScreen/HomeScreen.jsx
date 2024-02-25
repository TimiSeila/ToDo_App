import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerLogo}>ToDo</Text>
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
