import { ProjectContext, AgentOutputs, RemotionPayload } from "../../types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const runAgentPipeline = async (
  context: ProjectContext,
  onProgress: (agentName: string, partialOutputs: Partial<AgentOutputs>) => void
) => {
  // 1. Chief Strategy / Context Keeper
  await delay(1000);
  console.log("Chief Strategy Agent initialized context...");

  // 2. Trend Intelligence Agent
  onProgress("Trend Intelligence", {});
  await delay(1500);
  const trendAnalysis = `Analysis for "${context.currentTrend}": High virality potential in Tier 1 & 2 cities. Relatable frustration. Focus on the everyday struggle aspect.`;
  const contentAngles = [
    "The panic of realizing it's out right before guests arrive",
    "Trying to cook a 5-course meal on a single induction plate",
    "The dramatic bargaining with the delivery guy"
  ];
  onProgress("Trend Intelligence", { trendAnalysis, contentAngles });

  // 3. Hook and Packaging Agent
  onProgress("Hook and Packaging", {});
  await delay(1500);
  const hooks = [
    `POV: You're halfway through making chai and the gas finishes.`,
    `When you have 10 guests coming and the cylinder runs out...`,
  ];
  onProgress("Hook and Packaging", { hooks });

  // 4. Comedy Script Architect
  onProgress("Comedy Script Architect", {});
  await delay(2000);
  const scripts = `
Scene 1:
(Frantic energy, looking into camera)
"Maa is going to kill me. The gas just died, and the chai is only lukewarm!"

Scene 2:
(Pans to the stove, perfectly quiet)
"Look at it. Just sitting there. Mocking me."

Scene 3:
(Pulls out phone)
"Hello, bhaiya? Kitna time lagega? Kya matlab kal aayega?!"
  `.trim();
  onProgress("Comedy Script Architect", { scripts });

  // 5. Character and Universe Designer
  onProgress("Character and Universe Designer", {});
  await delay(1000);
  console.log("Character Designer: Using 'Desi Mom' and 'Anxious Protagonist' archetypes.");

  // 6. Visual Director Agent
  onProgress("Visual Director", {});
  await delay(1500);
  const visualPrompts = [
    "Close up of a worried face looking down at a stove.",
    "A dead, cold gas stove burner.",
    "Split screen of someone yelling into a phone while staring at a half-made cup of tea."
  ];
  onProgress("Visual Director", { visualPrompts });

  // 7. Voice and Performance Director
  onProgress("Voice and Performance Director", {});
  await delay(1500);
  const voiceoverInstructions = "Tone should be panicked but comedic. Emphasize 'lukewarm' and 'kal aayega?!'. Pace should increase as the video progresses.";
  onProgress("Voice and Performance Director", { voiceoverInstructions });

  // 8. Remotion Motion Systems Editor
  onProgress("Remotion Editor", {});
  await delay(1500);
  const remotionPayload: RemotionPayload = {
    format: context.currentSelectedFormat,
    durationInFrames: 300, // 10 seconds at 30fps
    fps: 30,
    width: 1080,
    height: 1920,
    title: `${context.currentTrend} Parody`,
    scenes: [
      { id: "s1", durationInFrames: 90, text: "The moment you realize...", transitionType: "fade" },
      { id: "s2", durationInFrames: 120, text: "...it's over.", transitionType: "slide" },
      { id: "s3", durationInFrames: 90, text: "Subscribe for more pain.", transitionType: "none" }
    ],
    captions: [
      { text: "Maa is going to kill me.", startFrame: 0, endFrame: 60 },
      { text: "The gas just died!", startFrame: 60, endFrame: 120 },
    ],
    emphasisWords: ["kill", "died"],
    assetReferences: {},
    timing: { introDuration: 30, mainDuration: 240, outroDuration: 30 }
  };
  onProgress("Remotion Editor", { remotionPayload });

  // 9. QA and Retention Critic
  onProgress("QA and Retention Critic", {});
  await delay(1000);
  console.log("QA Critic: Pacing looks good. Hook is strong within first 2 seconds.");

  // 10. Publishing and Growth Agent
  onProgress("Publishing and Growth", {});
  await delay(1500);
  const publishingPackage = {
    title: `When the gas runs out mid-chai ☕💀 #relatable #shorts`,
    description: `Every desi household's worst nightmare! Drop a comment if this has happened to you. \n\n#comedy #indiancomedy #relatablememes #desimemes`,
    hashtags: ["#comedy", "#indiancomedy", "#relatablememes", "#desimemes", "#shorts"],
    thumbnailPrompt: "Exaggerated face of someone holding a raw packet of Maggi next to an empty cylinder."
  };
  onProgress("Publishing and Growth", { publishingPackage });

  // Complete
  onProgress("Done", {});
};
