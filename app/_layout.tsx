import { Stack } from "expo-router";
import "./../assets/global.css";
import SplashScreen from "../components/SplashScreen";
import { useState } from "react";

export default function RootLayout(): React.JSX.Element {
  const [animating, setAnimating] = useState<boolean>(true);
  return animating ? <SplashScreen setAnimating={setAnimating} /> : <Stack />;
}
