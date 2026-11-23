import HistoryExpedition from "@/components/shared/history/HistoryExpedition";
import { oceaniaHistory } from "@/data/history/oceania";

export const metadata = {
  title: "Oceania History | Fable Culture",
  description:
    "Explore the history of Oceania through interactive expeditions, historical discoveries and challenges.",
};

export default function OceaniaHistoryPage() {
  return <HistoryExpedition expedition={oceaniaHistory} />;
}
