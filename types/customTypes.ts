import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: { verseId: string };
  History: undefined;
  Notifications: undefined;
  Settings: undefined;
  TOC: undefined;
  PP: undefined;
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type BooleanSetState = React.Dispatch<React.SetStateAction<boolean>>;
interface SplashScreenProps {
  setAnimating: BooleanSetState;
}
export { SplashScreenProps, NavigationProp };
