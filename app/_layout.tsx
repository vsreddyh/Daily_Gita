import { Drawer } from "expo-router/drawer";
import "./../assets/global.css";
import { View, Text, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Octicons from "@expo/vector-icons/Octicons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StatusBar } from "expo-status-bar";
//import SplashScreen from "../components/SplashScreen";
//import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";

const { height, width } = Dimensions.get("window");

export default function RootLayout(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <StatusBar style="light" />
      <Drawer
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={(props: DrawerContentComponentProps) => (
          <CustomDrawerContent {...props} />
        )}
      ></Drawer>
    </GestureHandlerRootView>
  );
  /*const [animating, setAnimating] = useState<boolean>(true);
  return animating ? <SplashScreen setAnimating={setAnimating} /> : <Stack />;*/
}

function CustomDrawerContent(
  props: DrawerContentComponentProps,
): React.JSX.Element {
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: "#001F3F" }}>
      <View className="py-5 flex items-center justify-center">
        <Text className="color-[#B7BA00]" style={{ fontSize: height * 0.06 }}>
          Gita
        </Text>
      </View>

      <DrawerItem
        label="Home"
        icon={() => (
          <Ionicons name="home" size={height * 0.031} color="#B7BA00" />
        )}
        onPress={() => props.navigation.navigate("index")}
        labelStyle={{
          color: "#B7BA00",
          fontSize: height * 0.031,
          height: height * 0.035,
        }}
      />
      <DrawerItem
        label="History"
        icon={() => (
          <Octicons name="history" size={height * 0.031} color="#B7BA00" />
        )}
        onPress={() => props.navigation.navigate("History")}
        labelStyle={{
          color: "#B7BA00",
          fontSize: height * 0.031,
          height: height * 0.035,
        }}
      />
      <DrawerItem
        label="Settings"
        icon={() => (
          <Ionicons name="settings" size={height * 0.031} color="#B7BA00" />
        )}
        onPress={() => props.navigation.navigate("Settings")}
        labelStyle={{
          color: "#B7BA00",
          fontSize: height * 0.031,
          height: height * 0.035,
        }}
      />
      <DrawerItem
        label="Terms Of Service"
        icon={() => (
          <Entypo
            name="text-document-inverted"
            size={height * 0.031}
            color="#B7BA00"
          />
        )}
        onPress={() => props.navigation.navigate("TOS")}
        labelStyle={{
          color: "#B7BA00",
          fontSize: height * 0.031,
          height: height * 0.035,
        }}
      />
      <DrawerItem
        label="Privacy Policy"
        icon={() => (
          <MaterialIcons
            name="security"
            size={height * 0.031}
            color="#B7BA00"
          />
        )}
        onPress={() => props.navigation.navigate("PP")}
        labelStyle={{
          color: "#B7BA00",
          fontSize: height * 0.031,
          height: height * 0.035,
        }}
      />
      <DrawerItem
        label="Feedback & Support"
        icon={() => (
          <MaterialIcons
            name="feedback"
            size={height * 0.031}
            color="#B7BA00"
          />
        )}
        onPress={() => props.navigation.navigate("Feedback")}
        labelStyle={{
          color: "#B7BA00",
          fontSize: height * 0.031,
          height: height * 0.035,
        }}
      />
    </DrawerContentScrollView>
  );
}
