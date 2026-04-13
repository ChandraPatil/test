import { AbsoluteFill, Sequence, useCurrentFrame } from "remotion";
import React from "react";
import { RemotionPayload } from "../types";

export const BreakingNews: React.FC<{ payload: RemotionPayload }> = ({ payload }) => {
  return (
    <AbsoluteFill className="bg-blue-900 text-white font-sans">
      <AbsoluteFill className="flex flex-col items-center justify-center">
         <div className="text-6xl font-black text-red-500 uppercase tracking-tighter mb-8 bg-white px-4 py-2">
            BREAKING NEWS
         </div>
      </AbsoluteFill>
      {payload.scenes.map((scene, index) => {
        const startFrame = payload.scenes.slice(0, index).reduce((acc, s) => acc + s.durationInFrames, 0);
        return (
          <Sequence key={scene.id} from={startFrame} durationInFrames={scene.durationInFrames}>
            <AbsoluteFill className="justify-end pb-24 px-8">
               <div className="bg-red-600 border-l-8 border-white p-6 shadow-2xl">
                 <h2 className="text-4xl font-bold uppercase">{scene.text}</h2>
               </div>
            </AbsoluteFill>
          </Sequence>
        );
      })}

      {/* Ticker */}
      <AbsoluteFill className="justify-end pb-8">
         <div className="bg-white text-black font-bold h-16 flex items-center px-4 overflow-hidden text-2xl whitespace-nowrap">
           <TickerText text="Live Updates • The situation is developing • More at 11 • " />
         </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const TickerText: React.FC<{ text: string }> = ({ text }) => {
    const frame = useCurrentFrame();
    return (
        <div style={{ transform: `translateX(${-frame * 5}px)` }} className="flex whitespace-nowrap">
            {text}{text}{text}{text}{text}{text}
        </div>
    )
}