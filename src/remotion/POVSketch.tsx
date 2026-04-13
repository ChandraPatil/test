import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import React from "react";
import { RemotionPayload, Scene } from "../types";

export const POVSketch: React.FC<{ payload: RemotionPayload }> = ({ payload }) => {
  return (
    <AbsoluteFill className="bg-zinc-900 text-white flex flex-col items-center justify-center font-sans">
      {payload.scenes.map((scene, index) => {
        const startFrame = payload.scenes.slice(0, index).reduce((acc, s) => acc + s.durationInFrames, 0);

        return (
          <Sequence key={scene.id} from={startFrame} durationInFrames={scene.durationInFrames}>
            <SceneContent scene={scene} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

const SceneContent: React.FC<{ scene: Scene }> = ({ scene }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 10, scene.durationInFrames - 10, scene.durationInFrames],
    scene.transitionType === "fade" ? [0, 1, 1, 0] : [1, 1, 1, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const translateY = interpolate(
    frame,
    [0, 10],
    scene.transitionType === "slide" ? [50, 0] : [0, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      className="flex flex-col items-center justify-center p-8 text-center"
      style={{ opacity, transform: `translateY(${translateY}px)` }}
    >
      <div className="text-5xl font-bold mb-4">POV Sketch</div>
      {scene.text && (
        <h2 className="text-4xl font-bold bg-black/50 p-4 rounded-xl leading-tight">
          {scene.text}
        </h2>
      )}
    </AbsoluteFill>
  );
};