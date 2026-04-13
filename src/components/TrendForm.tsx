"use client";

import React from "react";
import { useAppContext } from "../context/ProjectContext";
import { OutputFormat } from "../types";

export const TrendForm = () => {
  const { state, updateContext } = useAppContext();
  const { projectContext } = state;

  const formats: OutputFormat[] = [
    "POV comedy",
    "breaking news parody",
    "fake cinematic trailer",
    "character sketch",
    "meme explainer parody"
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <span className="bg-zinc-100 p-2 rounded-lg">🔥</span>
        Trend Discovery
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Enter Viral Trend or Topic</label>
          <textarea
            rows={3}
            placeholder="e.g. LPG / cooking gas shortage, new India movie release..."
            value={projectContext.currentTrend}
            onChange={(e) => updateContext({ currentTrend: e.target.value })}
            className="w-full p-3 border border-zinc-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Select Output Format</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {formats.map((format) => (
              <button
                key={format}
                onClick={() => updateContext({ currentSelectedFormat: format })}
                className={`px-3 py-2 text-sm rounded-md border text-left transition-colors ${
                  projectContext.currentSelectedFormat === format
                    ? 'bg-blue-50 border-blue-500 text-blue-700 font-medium'
                    : 'bg-white border-zinc-200 hover:bg-zinc-50'
                }`}
              >
                {format}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
