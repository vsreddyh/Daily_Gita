import { React, useState } from "react";
import {
  ScrollView,
  Pressable,
  Image,
  View,
  Text,
  Dimensions,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { NavigationProp } from "./../types/customTypes.ts";
import { Picker } from "@react-native-picker/picker";

const { height } = Dimensions.get("window");

export default function History(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp>();
  const [language, setLanguage] = useState<string>("en");

  const openDrawer = () => {
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
              style={{ width: height * 0.05, height: height * 0.05 }}
              source={
                require("./../assets/images/menu.png") as ImageSourcePropType
              }
            />
          </Pressable>

          <Text
            className="color-[#B7BA00] h-fit"
            style={{ fontSize: height * 0.04 }}
          >
            Settings
          </Text>

          <View
            className="w-fit h-full flex justify-center items-center "
            style={{ width: height * 0.05, height: height * 0.05 }}
          />
        </View>

        <View
          className="w-[90%]"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text
            className="flex-1 color-[#B7BA00]"
            style={{ fontSize: height * 0.02 }}
          >
            Language
          </Text>
          <Picker
            style={{
              flex: 1,
              color: "#B7BA00",
              backgroundColor: "#001F3F",
              fontSize: height * 0.02,
            }}
            dropdownIconColor="#B7BA00"
            selectedValue={language}
            onValueChange={(val) => setLanguage(val)}
          >
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Hindi" value="hi" />
            <Picker.Item label="Telugu" value="te" />
          </Picker>
        </View>
      </View>
    </ScrollView>
  );
}
