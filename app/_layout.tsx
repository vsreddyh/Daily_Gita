import { Drawer } from "expo-router/drawer";
import "./../assets/global.css";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
//import SplashScreen from "../components/SplashScreen";
//import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export default function RootLayout(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      ></Drawer>
    </GestureHandlerRootView>
  );
  /*const [animating, setAnimating] = useState<boolean>(true);
  return animating ? <SplashScreen setAnimating={setAnimating} /> : <Stack />;*/
}

function CustomDrawerContent(props): React.JSX.Element {
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: "#1e293b" }}>
      <View
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: "#334155",
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          My App
        </Text>
      </View>

      <DrawerItem
        label="Home"
        icon={({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("_index")}
        labelStyle={{ color: "#94a3b8", fontSize: 16 }}
        activeTintColor="#60a5fa"
      />
    </DrawerContentScrollView>
  );
}
