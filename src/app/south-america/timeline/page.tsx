import RegionalTimelinePage from "@/components/shared/regional-timeline/RegionalTimelinePage";
import { southAmericaTimeline } from "@/data/southAmerica/timeline/timeline";

export default function SouthAmericaTimelinePage() {
  return <RegionalTimelinePage config={southAmericaTimeline} />;
}
