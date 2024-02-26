import { deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { db } from "../../config/firebase";

export const TaskCard = ({ taskName, id }) => {
  const [checked, setChecked] = useState(false);

  const waitMSeconds = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const deleteTask = async (id) => {
    setChecked(true);
    await waitMSeconds(3000);
    const taskDoc = doc(db, "tasks", id);
    await deleteDoc(taskDoc);
  };

  return (
    <View style={styles.taskCardContainer}>
      <Text style={checked ? styles.taskNameActive : styles.taskName}>
        {taskName}
      </Text>
      <TouchableOpacity
        style={checked ? styles.taskCheckActive : styles.taskCheck}
        onPress={() => deleteTask(id)}
      ></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskCardContainer: {
    width: "100%",
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskName: {
    color: "#64ED72",
    fontFamily: "JotiOne",
    fontSize: 32,
  },
  taskNameActive: {
    color: "grey",
    fontFamily: "JotiOne",
    fontSize: 32,
  },
  taskCheck: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 17,
    width: 34,
    height: 34,
  },
  taskCheckActive: {
    borderWidth: 2,
    backgroundColor: "#64ED72",
    borderColor: "#64ED72",
    borderRadius: 17,
    width: 34,
    height: 34,
  },
});
