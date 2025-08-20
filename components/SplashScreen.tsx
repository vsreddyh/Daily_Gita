import { View, Animated, Dimensions } from "react-native";
import { useEffect, useRef } from "react";

const { width, height } = Dimensions.get("window");

export default function SplashScreen() {
  const opacity = useRef(new Animated.Value(1)).current;
  const viewHeight = useRef(new Animated.Value(0.15)).current;
  const viewWidth = useRef(new Animated.Value(0.3)).current;
  const left = useRef(new Animated.Value(0.55)).current;
  const top = useRef(new Animated.Value(0.085)).current;
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
          toValue: 0.25,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(viewWidth, {
          toValue: 0.5,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(left, {
          toValue: 0.23,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(top, {
          toValue: 0.4,
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
  }, [opacity, viewHeight, viewWidth, left, top, fontSize]);
  return (
    <View className="w-full h-full bg-[#001F3F]">
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
          width: width * viewWidth,
          transform: [
            { translateX: Animated.multiply(width, left) },
            { translateY: Animated.multiply(height, top) },
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
