import CultureKitchenPage from "@/components/shared/culture-kitchen/CultureKitchenPage";
import {
  eastAsiaCultureKitchen,
  eastAsiaCultureKitchenTheme,
} from "@/data/eastAsia/cultureKitchen/cultureKitchen";

export default function EastAsiaCultureKitchenPage() {
  return (
    <CultureKitchenPage
      region="east-asia"
      regionName="East Asia"
      backHref="/east-asia"
      dishes={eastAsiaCultureKitchen}
      theme={eastAsiaCultureKitchenTheme}
      countries={[
        "China",
        "Japan",
        "South Korea",
        "North Korea",
        "Mongolia",
        "Taiwan",
      ]}
    />
  );
}
