"use client";

import React, { useState } from "react";
import { useAppContext } from "../context/ProjectContext";
import { Download, Code, Play } from "lucide-react";
import { Player } from "@remotion/player";
import { POVSketch, BreakingNews, FakeTrailer } from "../remotion";

export const RemotionPreview = () => {
  const { state } = useAppContext();
  const { remotionPayload } = state.outputs;
  const [showJson, setShowJson] = useState(false);

  if (!remotionPayload) return null;

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(remotionPayload, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "remotion-payload.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const renderTemplate = () => {
    switch (remotionPayload.format) {
      case "POV comedy":
      case "character sketch":
      case "meme explainer parody":
        return POVSketch;
      case "breaking news parody":
        return BreakingNews;
      case "fake cinematic trailer":
        return FakeTrailer;
      default:
        return POVSketch;
    }
  };

  const TemplateComponent = renderTemplate();

  return (
    <div className="bg-zinc-900 text-zinc-100 p-6 rounded-xl border border-zinc-800 shadow-xl space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="bg-zinc-800 p-2 rounded-lg">🎬</span>
          Remotion Video Preview
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setShowJson(!showJson)}
            className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <Code className="w-4 h-4" />
            {showJson ? "Hide JSON" : "View JSON"}
          </button>
          <button
            onClick={handleExport}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export JSON
          </button>
        </div>
      </div>

      {showJson ? (
        <div className="bg-zinc-950 p-4 rounded-lg overflow-x-auto max-h-96">
          <pre className="text-xs text-blue-300 font-mono">
            {JSON.stringify(remotionPayload, null, 2)}
          </pre>
        </div>
      ) : (
        <div className="bg-zinc-800 p-6 rounded-lg text-center space-y-4 flex flex-col items-center">
          <div className="w-full max-w-[300px] aspect-[9/16] bg-black rounded-lg overflow-hidden border-2 border-zinc-700 shadow-2xl relative">
            <Player
              component={TemplateComponent as any}
              inputProps={{ payload: remotionPayload }}
              durationInFrames={remotionPayload.durationInFrames}
              compositionWidth={remotionPayload.width || 1080}
              compositionHeight={remotionPayload.height || 1920}
              fps={remotionPayload.fps || 30}
              style={{
                width: "100%",
                height: "100%",
              }}
              controls
              autoPlay
              loop
            />
          </div>
          <p className="text-xs text-zinc-500 mt-4 max-w-sm">
            Live preview powered by <code className="bg-zinc-900 px-1 py-0.5 rounded">@remotion/player</code>.
            Template dynamically selected based on Output Format.
          </p>
        </div>
      )}
    </div>
  );
};
