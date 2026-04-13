export type OutputFormat =
  | "POV comedy"
  | "breaking news parody"
  | "fake cinematic trailer"
  | "character sketch"
  | "meme explainer parody";

export interface ProjectContext {
  mission: string;
  targetAudience: string;
  tone: string;
  platform: string;
  contentPillars: string[];
  recurringCharacters: string[];
  currentTrend: string;
  currentSelectedFormat: OutputFormat;
  currentProjectConstraints: string;
  performanceGoals: string;
}

export interface AgentOutputs {
  trendAnalysis?: string;
  contentAngles?: string[];
  hooks?: string[];
  scripts?: string;
  visualPrompts?: string[];
  voiceoverInstructions?: string;
  remotionPayload?: RemotionPayload;
  publishingPackage?: {
    title: string;
    description: string;
    hashtags: string[];
    thumbnailPrompt: string;
  };
}

export interface Scene {
  id: string;
  durationInFrames: number;
  text?: string;
  imageUrl?: string;
  videoUrl?: string;
  transitionType?: "fade" | "slide" | "none";
}

export interface Caption {
  text: string;
  startFrame: number;
  endFrame: number;
}

export interface RemotionPayload {
  format: OutputFormat;
  durationInFrames: number;
  fps: number;
  width: number;
  height: number;
  title: string;
  scenes: Scene[];
  captions: Caption[];
  emphasisWords: string[];
  assetReferences: Record<string, string>;
  timing: {
    introDuration: number;
    mainDuration: number;
    outroDuration: number;
  };
}

// Full app state
export interface AppState {
  projectContext: ProjectContext;
  outputs: AgentOutputs;
  isGenerating: boolean;
  activeAgent: string | null;
}
