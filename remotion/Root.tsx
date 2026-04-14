import { Composition } from 'remotion';
import { SolarSystemVideo } from './SolarSystemVideo';

export const RemotionRoot = () => {
  return (
    <Composition
      id="SolarSystemVideo"
      component={SolarSystemVideo}
      durationInFrames={300}
      fps={30}
      width={1280}
      height={720}
    />
  );
};
