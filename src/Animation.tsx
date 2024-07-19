import { Lottie, LottieAnimationData } from "@remotion/lottie";
import { useEffect, useState } from "react";
import {
  cancelRender,
  continueRender,
  delayRender,
  staticFile,
} from "remotion";
 
export const Animation = () => {
  const [handle] = useState(() => delayRender("Loading Lottie animation"));
 
  const [animationData, setAnimationData] =
    useState<LottieAnimationData | null>(null);
 
  useEffect(() => {
    fetch(staticFile("animation.json"))
      .then((data) => data.json())
      .then((json) => {
        setAnimationData(json);
        continueRender(handle);
      })
      .catch((err) => {
        cancelRender(err);
        console.log("Animation failed to load", err);
      });
  }, [handle]);
 
  if (!animationData) {
    return null;
  }
 
  return <Lottie animationData={animationData} />;
};