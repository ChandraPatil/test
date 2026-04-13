"use client";

import React from "react";
import { useAppContext } from "../context/ProjectContext";

export const OutputPanels = () => {
  const { state } = useAppContext();
  const { outputs } = state;

  if (Object.keys(outputs).length === 0) {
    return (
      <div className="bg-white p-12 rounded-xl border border-zinc-200 border-dashed flex flex-col items-center justify-center text-zinc-400">
        <p>Run the agent pipeline to generate outputs.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {outputs.trendAnalysis && (
        <OutputCard title="Trend Analysis" icon="📊">
          <p className="text-zinc-700">{outputs.trendAnalysis}</p>
          {outputs.contentAngles && (
            <div className="mt-4">
              <strong className="text-sm">Angles:</strong>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-zinc-600">
                {outputs.contentAngles.map((angle, i) => <li key={i}>{angle}</li>)}
              </ul>
            </div>
          )}
        </OutputCard>
      )}

      {outputs.hooks && (
        <OutputCard title="Hooks & Packaging" icon="🎣">
          <ul className="list-disc pl-5 space-y-2 text-zinc-700">
            {outputs.hooks.map((hook, i) => <li key={i}>{hook}</li>)}
          </ul>
        </OutputCard>
      )}

      {outputs.scripts && (
        <OutputCard title="Script Architect" icon="📜">
          <pre className="whitespace-pre-wrap font-sans text-sm text-zinc-700 bg-zinc-50 p-4 rounded-lg">
            {outputs.scripts}
          </pre>
        </OutputCard>
      )}

      {outputs.visualPrompts && (
        <OutputCard title="Visual Prompts" icon="🎨">
          <ul className="list-decimal pl-5 space-y-2 text-sm text-zinc-700">
            {outputs.visualPrompts.map((prompt, i) => <li key={i}>{prompt}</li>)}
          </ul>
        </OutputCard>
      )}

      {outputs.voiceoverInstructions && (
        <OutputCard title="Voice Instructions" icon="🎙️">
          <p className="text-zinc-700 text-sm italic">&quot;{outputs.voiceoverInstructions}&quot;</p>
        </OutputCard>
      )}

      {outputs.publishingPackage && (
        <OutputCard title="Publishing Package" icon="🚀">
          <div className="space-y-3 text-sm">
            <div>
              <strong className="block text-zinc-500">Title</strong>
              <p className="font-medium text-lg">{outputs.publishingPackage.title}</p>
            </div>
            <div>
              <strong className="block text-zinc-500">Description</strong>
              <p className="whitespace-pre-wrap">{outputs.publishingPackage.description}</p>
            </div>
            <div>
              <strong className="block text-zinc-500">Thumbnail Prompt</strong>
              <p className="italic">{outputs.publishingPackage.thumbnailPrompt}</p>
            </div>
          </div>
        </OutputCard>
      )}
    </div>
  );
};

const OutputCard = ({ title, icon, children }: { title: string, icon: string, children: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
      <span className="bg-zinc-100 p-1.5 rounded-md text-sm">{icon}</span>
      {title}
    </h3>
    {children}
  </div>
);
