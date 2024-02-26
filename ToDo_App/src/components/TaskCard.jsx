import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const TaskCard = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.taskCardContainer}>
      <Text style={checked ? styles.taskNameActive : styles.taskName}>Moi</Text>
      <TouchableOpacity
        style={checked ? styles.taskCheckActive : styles.taskCheck}
        onPress={() => setChecked(true)}
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
    color: "#626262",
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
