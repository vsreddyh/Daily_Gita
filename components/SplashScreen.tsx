import { Text, View, Animated, Dimensions } from "react-native";
import { useEffect, useRef } from "react";

const { width, height } = Dimensions.get("window");

export default function SplashScreen() {
  const positionX = useRef(new Animated.Value(0)).current;
  const positionY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const anim = Animated.sequence([
      Animated.parallel([
        Animated.timing(positionX, {
          toValue: -1.7 * width,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(positionY, {
          toValue: -2.05 * height,
          duration: 3000,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(1000),
    ]);

    anim.start(() => {
      console.log("Wait");
    });
  }, []);
  return (
    <View className="w-screen h-screen flex justify-center items-center">
      <Animated.Image
        source={require("../assets/images/BG.jpg")}
        style={{
          width: "100%",
          height: "100%",
        }}
        resizeMode="stretch"
      />
    </View>
  );
}
