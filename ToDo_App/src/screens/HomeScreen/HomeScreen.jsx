import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TaskCard } from "../../components/TaskCard";
import { useGetTasks } from "../../hooks/useGetTasks";

export const HomeScreen = () => {
  const { tasks } = useGetTasks();

  if (!tasks || tasks.length == 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerLogo}>ToDo</Text>
        </View>
        <View style={styles.noTaskContainer}>
          <Text style={styles.noTaskText}>
            You have no tasks yet. Try creating one by pressing "+"
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerLogo}>ToDo</Text>
      </View>
      <ScrollView style={styles.taskCardListContainer}>
        {tasks.map((task) => {
          return (
            <TaskCard key={task.id} taskName={task.taskName} id={task.id} />
          );
        })}
      </ScrollView>
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
  taskCardListContainer: {
    width: "100%",
  },
  noTaskContainer: {
    flex: 1,
    justifyContent: "center",
  },
  noTaskText: {
    fontFamily: "JotiOne",
    color: "grey",
    fontSize: 12,
    width: "80%",
    textAlign: "center",
  },
});
