import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import React from "react";
import { RemotionPayload, Scene } from "../types";

export const FakeTrailer: React.FC<{ payload: RemotionPayload }> = ({ payload }) => {
  return (
    <AbsoluteFill className="bg-black text-white font-serif">
      {payload.scenes.map((scene, index) => {
        const startFrame = payload.scenes.slice(0, index).reduce((acc, s) => acc + s.durationInFrames, 0);
        return (
          <Sequence key={scene.id} from={startFrame} durationInFrames={scene.durationInFrames}>
            <TrailerScene scene={scene} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

const TrailerScene: React.FC<{ scene: Scene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [0, 15, scene.durationInFrames - 15, scene.durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const scale = interpolate(
      frame,
      [0, scene.durationInFrames],
      [1, 1.1]
  );

  return (
    <AbsoluteFill className="flex items-center justify-center p-12 text-center" style={{ opacity }}>
      <div style={{ transform: `scale(${scale})` }} className="text-5xl font-bold uppercase tracking-widest text-emerald-400">
        {scene.text}
      </div>
    </AbsoluteFill>
  );
};