import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, View } from "react-native";
import { AccountScreen } from "./screens/AccountScreen/AccountScreen";
import { CreateTaskScreen } from "./screens/CreateTaskScreen/CreateTaskScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ top: -20, justifyContent: "center", alignItems: "center" }}
  >
    <View style={{ width: 80, height: 80, borderRadius: 40 }}>{children}</View>
  </TouchableOpacity>
);

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#1A2227",
          borderTopWidth: 0,
          height: 90,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#64ED72",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "account") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={"home"}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"add"}
        component={CreateTaskScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name={"add-circle"} size={80} color={"#64ED72"} />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={"account"}
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
