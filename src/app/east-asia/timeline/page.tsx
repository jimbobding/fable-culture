import RegionalTimelinePage from "@/components/shared/regional-timeline/RegionalTimelinePage";
import { eastAsiaTimeline } from "@/data/eastAsia/timeline/timeline";

export default function EastAsiaTimelinePage() {
  return <RegionalTimelinePage config={eastAsiaTimeline} />;
}
