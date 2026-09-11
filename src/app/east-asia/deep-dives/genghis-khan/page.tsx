import DeepDivePage from "@/components/shared/deep-dive/DeepDivePage";
import { genghisKhanDeepDive } from "@/data/eastAsia/deepDives/genghisKhan";

export default function GenghisKhanPage() {
  return <DeepDivePage config={genghisKhanDeepDive} />;
}
