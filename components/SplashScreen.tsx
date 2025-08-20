import { View, Animated, Dimensions, ImageSourcePropType } from "react-native";
import { useEffect, useRef } from "react";
import { SplashScreenProps } from "./../types/customTypes";

const { width, height } = Dimensions.get("window");

export default function SplashScreen({
  setAnimating,
}: SplashScreenProps): React.JSX.Element {
  const opacity: Animated.Value = useRef(new Animated.Value(0)).current;
  const viewHeight: Animated.Value = useRef(new Animated.Value(0.25)).current;
  const viewWidth: Animated.Value = useRef(new Animated.Value(0.5)).current;
  const left: Animated.Value = useRef(new Animated.Value(0.23)).current;
  const top: Animated.Value = useRef(new Animated.Value(0.4)).current;
  const fontSize: Animated.Value = useRef(new Animated.Value(0.06)).current;

  useEffect(() => {
    const anim: Animated.CompositeAnimation = Animated.sequence([
      Animated.delay(2000),
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(viewHeight, {
          toValue: 0.15,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(viewWidth, {
          toValue: 0.3,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(left, {
          toValue: 0.55,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(top, {
          toValue: 0.085,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(fontSize, {
          toValue: 0.04,
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
        source={require("../assets/images/BG.jpg") as ImageSourcePropType}
        className="w-full h-full"
        resizeMode="stretch"
        style={{ opacity: opacity }}
      />
      <Animated.View
        className="absolute flex justify-evenly items-center"
        style={{
          height: Animated.multiply(height, viewHeight),
          width: Animated.multiply(width, viewWidth),
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
