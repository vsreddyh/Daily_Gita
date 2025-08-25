import { React } from "react";
import {
  ScrollView,
  TextInput,
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

const { height, width } = Dimensions.get("window");

export default function Home(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp>();

  const openDrawer: null = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View className="w-full items-center h-full bg-[#001F3F] pt-14">
        <View className=" w-[90%] h-[5%] flex-row justify-between items-center">
          <Pressable className="w-fit h-fit" onPress={openDrawer}>
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
          <TextInput
            className="bg-white w-[85%] h-[80%] rounded-3xl pl-4 pb-0 pt-0"
            autoComplete="off"
            autoCorrect={false}
            placeholder="Enter Verse(eg:- 2.11)"
          />
        </View>
        <View className="w-[90%] flex items-center h-[100%]">
          <Text
            className="color-[#B7BA00] my-9"
            style={{ fontSize: height * 0.042 }}
          >
            Chapter 1 Verse 1
          </Text>
          <View className="flex-row w-[95%] mb-9 items-center justify-between">
            <Pressable className="h-fit w-fit">
              <Image
                style={{
                  width: height * 0.03,
                  height: height * 0.03,
                }}
                source={
                  require("./../assets/images/back.png") as ImageSourcePropType
                }
                onPress={openDrawer}
              />
            </Pressable>
            <View>
              <Text
                className="color-[#B7BA00]"
                style={{ fontSize: height * 0.02 }}
              >
                Sanskrit Verse
              </Text>
            </View>
            <Pressable className="h-fit w-fit">
              <Image
                style={{
                  width: height * 0.03,
                  height: height * 0.03,
                }}
                source={
                  require("./../assets/images/forward.png") as ImageSourcePropType
                }
                onPress={openDrawer}
              />
            </Pressable>
          </View>
          <Text
            className="color-white mb-9"
            style={{ fontSize: height * 0.02 }}
          >
            English Verse
          </Text>
          <Text
            className="color-white mb-9"
            style={{ fontSize: height * 0.02 }}
          >
            English definition
          </Text>
          <Text
            className="color-[#B7BA00] mb-5"
            style={{ fontSize: height * 0.03 }}
          >
            Word to word meaning
          </Text>
          <View>
            <Text
              className="color-white mb-9"
              style={{ fontSize: height * 0.02 }}
            >
              Meaning 1
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
