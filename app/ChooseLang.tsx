import { React } from "react";
import { Text, View, Dimensions } from "react-native";
const { height } = Dimensions.get("window");
export default function ChooseLang(): React.JSX.ELement {
  return (
    <View className="w-full h-full bg-[#001F3F] flex justify-center items-center">
      <Text className="color-white mb-[8%]" style={{ fontSize: height * 0.04 }}>
        Choose Your Language
      </Text>

      <View className="h-[45%] w-full flex justify-evenly items-center">
        <View className="h-[25%] w-[75%] border border-[#B7BA00] rounded-2xl flex items-center justify-center">
          <Text className="color-[#B7BA00]" style={{ fontSize: height * 0.05 }}>
            Bhagavad Gita
          </Text>
        </View>
        <View className="h-[25%] w-[75%] border border-[#B7BA00] rounded-2xl flex items-center justify-center">
          <Text className="color-[#B7BA00]" style={{ fontSize: height * 0.05 }}>
            భగవద్గీత
          </Text>
        </View>
        <View className="h-[25%] w-[75%] border border-[#B7BA00] rounded-2xl flex items-center justify-center">
          <Text className="color-[#B7BA00]" style={{ fontSize: height * 0.05 }}>
            भागवत गीता
          </Text>
        </View>
      </View>
    </View>
  );
}
