"use client";

import React from "react";
import { useAppContext } from "../context/ProjectContext";
import { runAgentPipeline } from "../lib/agents/mock-providers";
import { Loader2, Play } from "lucide-react";

export const AgentRunner = () => {
  const { state, setGenerating, updateOutputs, resetOutputs } = useAppContext();

  const agents = [
    "Chief Strategy",
    "Trend Intelligence",
    "Hook and Packaging",
    "Comedy Script Architect",
    "Character and Universe Designer",
    "Visual Director",
    "Voice and Performance Director",
    "Remotion Editor",
    "QA and Retention Critic",
    "Publishing and Growth"
  ];

  const handleRunPipeline = async () => {
    if (!state.projectContext.currentTrend) {
      alert("Please enter a trend first.");
      return;
    }

    resetOutputs();
    setGenerating(true, agents[0]);

    await runAgentPipeline(state.projectContext, (agentName, newOutputs) => {
      updateOutputs(newOutputs);
      setGenerating(agentName !== "Done", agentName === "Done" ? null : agentName);
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="bg-zinc-100 p-2 rounded-lg">🤖</span>
          Agent Runner
        </h2>
        <button
          onClick={handleRunPipeline}
          disabled={state.isGenerating || !state.projectContext.currentTrend}
          className="bg-black hover:bg-zinc-800 disabled:bg-zinc-400 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
        >
          {state.isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
          {state.isGenerating ? "Agents Running..." : "Run Pipeline"}
        </button>
      </div>

      <div className="space-y-2">
        {agents.map((agent) => {
          const isActive = state.activeAgent === agent;
          const isDone = !state.isGenerating && Object.keys(state.outputs).length > 0;

          return (
            <div
              key={agent}
              className={`flex items-center gap-3 p-3 rounded-lg border ${
                isActive ? 'bg-blue-50 border-blue-200 shadow-inner' : 'bg-zinc-50 border-transparent'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                isActive ? 'bg-blue-500 text-white' :
                isDone ? 'bg-green-500 text-white' : 'bg-zinc-200 text-zinc-500'
              }`}>
                {isActive ? <Loader2 className="w-3 h-3 animate-spin" /> : isDone ? "✓" : "-"}
              </div>
              <span className={`font-medium text-sm ${isActive ? 'text-blue-700' : 'text-zinc-700'}`}>
                {agent}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
