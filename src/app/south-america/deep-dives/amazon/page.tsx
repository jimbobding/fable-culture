import JourneyPage from "@/components/shared/deep-dive/journey/JourneyPage";
import { amazonJourney } from "@/data/southAmerica/deepDives/amazon";

export default function AmazonDeepDivePage() {
  return <JourneyPage config={amazonJourney} />;
}
