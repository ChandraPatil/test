"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { AppState, ProjectContext, AgentOutputs, OutputFormat } from "../types";

const defaultContext: ProjectContext = {
  mission: "Create highly engaging short-form comedy tailored for Indian audiences",
  targetAudience: "Gen Z & Millennials in India",
  tone: "Satirical, fast-paced, relatable",
  platform: "Instagram Reels & YouTube Shorts",
  contentPillars: ["Daily life struggles", "Pop culture reactions", "Corporate life parodies"],
  recurringCharacters: ["The Overthinking Boss", "Desi Mom", "Tech Bro"],
  currentTrend: "",
  currentSelectedFormat: "POV comedy",
  currentProjectConstraints: "Must be under 60 seconds, no swear words",
  performanceGoals: "10k views in first hour, high shareability",
};

const defaultOutputs: AgentOutputs = {};

const initialState: AppState = {
  projectContext: defaultContext,
  outputs: defaultOutputs,
  isGenerating: false,
  activeAgent: null,
};

interface AppContextProps {
  state: AppState;
  updateContext: (updates: Partial<ProjectContext>) => void;
  updateOutputs: (updates: Partial<AgentOutputs>) => void;
  setGenerating: (isGenerating: boolean, activeAgent?: string | null) => void;
  resetOutputs: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppState>(initialState);

  const updateContext = (updates: Partial<ProjectContext>) => {
    setState((prev) => ({
      ...prev,
      projectContext: { ...prev.projectContext, ...updates },
    }));
  };

  const updateOutputs = (updates: Partial<AgentOutputs>) => {
    setState((prev) => ({
      ...prev,
      outputs: { ...prev.outputs, ...updates },
    }));
  };

  const setGenerating = (isGenerating: boolean, activeAgent: string | null = null) => {
    setState((prev) => ({
      ...prev,
      isGenerating,
      activeAgent,
    }));
  };

  const resetOutputs = () => {
    setState((prev) => ({
      ...prev,
      outputs: {},
    }));
  };

  return (
    <AppContext.Provider value={{ state, updateContext, updateOutputs, setGenerating, resetOutputs }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
