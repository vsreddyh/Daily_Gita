import React from "react";
import { Text, View } from "react-native";

export default function Index(): React.JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="bg-green-300">
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
