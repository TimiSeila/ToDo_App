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

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../../config/firebase";
import { useNavigation } from "@react-navigation/native";

export const CreateTaskScreen = () => {
  const [taskName, setTaskName] = useState(null);
  const [creating, setCreating] = useState(false);

  const navigation = useNavigation();

  const handleTaskCreate = async () => {
    if (taskName) {
      try {
        Keyboard.dismiss();
        setCreating(true);
        const collectionRef = collection(db, "tasks");

        await addDoc(collectionRef, {
          uid: auth.currentUser.uid,
          taskName,
          createdAt: serverTimestamp(),
        });
      } catch (err) {
        console.error(err);
      } finally {
        setCreating(false);
        setTaskName(null);
        navigation.navigate("home");
      }
    }
  };

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
            onChangeText={(val) => setTaskName(val)}
            value={taskName}
          ></TextInput>
          <TouchableOpacity
            style={styles.createTaskBtn}
            onPress={handleTaskCreate}
          >
            <Text style={styles.createTaskText}>
              {creating ? "Creating..." : "Create"}
            </Text>
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
