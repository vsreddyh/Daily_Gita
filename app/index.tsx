import { React } from "react";
import { ScrollView, View, Button } from "react-native";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
export default function Home(): React.JSX.Element {
  const navigation = useNavigation();

  const openDrawer: null = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View className="w-full items-center h-full bg-[#001F3F] pt-32">
        <Button title="Open Drawer" onPress={openDrawer} />
      </View>
    </ScrollView>
  );
}
