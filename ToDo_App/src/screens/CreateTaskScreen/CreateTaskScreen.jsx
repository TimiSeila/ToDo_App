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

export const CreateTaskScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerLogo}>ToDo</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.createTaskContainer}
        >
          <View>
            <Text style={styles.createTaskHeader}>Create a task</Text>
          </View>
          <TextInput
            style={styles.createTaskInput}
            placeholder="Task Name"
            placeholderTextColor={"#64ED72"}
          ></TextInput>
          <TouchableOpacity style={styles.createTaskBtn}>
            <Text style={styles.createTaskText}>Create</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
  createTaskContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  createTaskHeader: {
    fontFamily: "JotiOne",
    color: "white",
    fontSize: 32,
  },
  createTaskInput: {
    width: 250,
    borderBottomWidth: 2,
    borderBottomColor: "#64ED72",
    fontFamily: "JotiOne",
    fontSize: 24,
    marginVertical: 82,
    color: "white",
  },
  createTaskBtn: {
    height: 68,
    width: 168,
    borderRadius: 99,
    backgroundColor: "#64ED72",
    alignItems: "center",
    justifyContent: "center",
  },
  createTaskText: {
    fontFamily: "JotiOne",
    color: "white",
    fontSize: 32,
  },
});
