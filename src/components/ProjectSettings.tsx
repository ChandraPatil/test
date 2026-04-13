"use client";

import React from "react";
import { useAppContext } from "../context/ProjectContext";

export const ProjectSettings = () => {
  const { state, updateContext } = useAppContext();
  const { projectContext } = state;

  return (
    <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <span className="bg-zinc-100 p-2 rounded-lg">⚙️</span>
        Channel Project Settings
      </h2>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Mission</label>
          <input
            type="text"
            value={projectContext.mission}
            onChange={(e) => updateContext({ mission: e.target.value })}
            className="w-full p-2 border border-zinc-300 rounded-md text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Tone</label>
            <input
              type="text"
              value={projectContext.tone}
              onChange={(e) => updateContext({ tone: e.target.value })}
              className="w-full p-2 border border-zinc-300 rounded-md text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Target Audience</label>
            <input
              type="text"
              value={projectContext.targetAudience}
              onChange={(e) => updateContext({ targetAudience: e.target.value })}
              className="w-full p-2 border border-zinc-300 rounded-md text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Recurring Characters (comma separated)</label>
          <input
            type="text"
            value={projectContext.recurringCharacters.join(", ")}
            onChange={(e) => updateContext({ recurringCharacters: e.target.value.split(",").map(s => s.trim()) })}
            className="w-full p-2 border border-zinc-300 rounded-md text-sm"
          />
        </div>
      </div>
    </div>
  );
};
