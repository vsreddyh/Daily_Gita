import { React } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  ImageSourcePropType,
  Dimensions,
} from "react-native";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { NavigationProp } from "./../types/customTypes.ts";

const { height } = Dimensions.get("window");

export default function History(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp>();

  const openDrawer: null = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View className="w-full items-center h-full bg-[#001F3F] pt-14">
        <View className=" w-[90%] h-[5%] flex-row justify-between items-center mb-8">
          <Pressable
            className="w-fit h-full flex justify-center items-center "
            onPress={openDrawer}
          >
            <Image
              style={{
                width: height * 0.05,
                height: height * 0.05,
              }}
              source={
                require("./../assets/images/menu.png") as ImageSourcePropType
              }
              onPress={openDrawer}
            />
          </Pressable>
          <Text
            className="color-[#B7BA00] h-fit"
            style={{ fontSize: height * 0.04 }}
          >
            History
          </Text>
          <Pressable
            className="w-fit h-full flex justify-center items-center "
            onPress={openDrawer}
          >
            <Image
              style={{
                width: height * 0.05,
                height: height * 0.05,
              }}
              source={
                require("./../assets/images/delete.png") as ImageSourcePropType
              }
              onPress={openDrawer}
            />
          </Pressable>
        </View>
        <View className="w-[90%] flex items-center">
          <View className="flex w-full">
            <Text
              className="color-[#B7BA00] pb-3"
              style={{ fontSize: height * 0.025 }}
            >
              13/08/25
            </Text>
          </View>
          <View className="w-[90%] flex-row justify-between items-center">
            <Text
              className="color-[#B7BA00] pb-1"
              style={{ fontSize: height * 0.025 }}
            >
              14:20
            </Text>
            <Text
              className="color-[#B7BA00] pb-1"
              style={{ fontSize: height * 0.025 }}
            >
              Chapter 2 Verse 11
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
