import { AppProvider } from "@/context/ProjectContext";
import { ProjectSettings } from "@/components/ProjectSettings";
import { TrendForm } from "@/components/TrendForm";
import { AgentRunner } from "@/components/AgentRunner";
import { OutputPanels } from "@/components/OutputPanels";
import { RemotionPreview } from "@/components/RemotionPreview";

export default function Home() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans pb-20">
        <header className="bg-white border-b border-zinc-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text font-black">
                ViralOS
              </span>
              <span className="bg-zinc-100 text-zinc-600 text-xs px-2 py-1 rounded font-medium">MVP</span>
            </div>
            <div className="text-sm font-medium text-zinc-500">
              India Trend Comedy Studio
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left Column: Input & Controls */}
            <div className="lg:col-span-4 space-y-6">
              <TrendForm />
              <ProjectSettings />
              <AgentRunner />
            </div>

            {/* Right Column: Outputs */}
            <div className="lg:col-span-8 space-y-6">
              <RemotionPreview />
              <OutputPanels />
            </div>

          </div>
        </main>
      </div>
    </AppProvider>
  );
}