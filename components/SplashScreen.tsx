import { View, Animated, Dimensions } from "react-native";
import { useEffect, useRef } from "react";

const { width, height } = Dimensions.get("window");

export default function SplashScreen() {
  const opacity = useRef(new Animated.Value(1)).current;
  const viewHeight = useRef(new Animated.Value(0.15)).current;
  const left = useRef(new Animated.Value(0.2)).current;
  const top = useRef(new Animated.Value(0.25)).current;
  const fontSize = useRef(new Animated.Value(0.04)).current;

  useEffect(() => {
    const anim = Animated.sequence([
      Animated.delay(2000),
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(viewHeight, {
          toValue: 0.168,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(left, {
          toValue: 0.095,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(top, {
          toValue: 0.8,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(fontSize, {
          toValue: 0.06,
          duration: 2000,
          useNativeDriver: false,
        }),
      ]),
      Animated.delay(2000),
    ]);

    anim.start(() => {
      console.log("HEll");
    });
  }, [opacity, viewHeight, left, top, fontSize]);
  return (
    <View className="w-screen h-screen bg-[#001F3F]">
      <Animated.Image
        source={require("../assets/images/BG.jpg")}
        className="w-full h-full"
        resizeMode="stretch"
        style={{ opacity: opacity }}
      />
      <Animated.View
        className="absolute flex justify-evenly items-center"
        style={{
          height: height * viewHeight,
          transform: [
            { translateX: Animated.multiply(height, left) },
            { translateY: Animated.multiply(width, top) },
          ],
        }}
      >
        <Animated.Text
          className=" text-[#B7BA00]"
          style={{ fontSize: Animated.multiply(height, fontSize) }}
        >
          Shrimad
        </Animated.Text>
        <Animated.Text
          className="text-[#B7BA00]"
          style={{ fontSize: Animated.multiply(height, fontSize) }}
        >
          Bhagavad
        </Animated.Text>
        <Animated.Text
          className="text-[#B7BA00]"
          style={{ fontSize: Animated.multiply(height, fontSize) }}
        >
          Gita
        </Animated.Text>
      </Animated.View>
    </View>
  );
}
