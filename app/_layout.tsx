import { Stack } from "expo-router";
import "./../assets/global.css";
import SplashScreen from "../components/SplashScreen";
import SplashScreen2 from "../components/SplashScreen2";
import { useState } from "react";
export default function RootLayout() {
  const [animating, setAnimating] = useState(true);
  return animating ? <SplashScreen setAnimating={setAnimating} /> : <Stack />;
}
