import React from "react";

type BooleanSetState = React.Dispatch<React.SetStateAction<boolean>>;
interface SplashScreenProps {
  setAnimating: BooleanSetState;
}
export { SplashScreenProps };
