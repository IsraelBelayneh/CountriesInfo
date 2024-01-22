import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import Countries from "./Screens/Countries";
import CountryDetail from "./Screens/CountryDetail";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="country" component={Countries} />
          <Stack.Screen name="detail" component={CountryDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
