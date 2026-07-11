import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <div className="w-full bg-[#0A1626] pb-24">
      {/* 1st Section: The Main Hero Console */}
      <Hero />

      {/* Remaining sections will follow underneath cleanly */}
      <div className="max-w-7xl mx-auto px-6 pt-16 font-mono text-xs text-[#7C8FA9] text-center">
        [ Telemetry sections 2 through 7 initializing next... ]
      </div>
    </div>
  );
}