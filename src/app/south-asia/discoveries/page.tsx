import StudentDiscoveries from "@/components/shared/StudentDiscoveries";
import { southAsiaDiscoveries } from "@/data/southAsia/discoveries";

export default function DiscoveriesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fff3e0] via-[#fde2d1] to-[#f8e7d8] p-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <StudentDiscoveries items={southAsiaDiscoveries} />
      </div>
    </main>
  );
}
