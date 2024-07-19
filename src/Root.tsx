import { Composition } from "remotion";
import { Animation } from "./Animation";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
           id="MyLottieAnimation"
           component={Animation}
           durationInFrames={225} 
           fps={30}
           width={720}
           height={1080}
         />
    </>
  );
};
