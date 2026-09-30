import CultureKitchenPage from "@/components/shared/culture-kitchen/CultureKitchenPage";

import {
  southAmericaCultureKitchen,
  southAmericaCultureKitchenTheme,
} from "@/data/southAmerica/cultureKitchen/cultureKitchen";

export default function SouthAmericaCultureKitchenPage() {
  return (
    <CultureKitchenPage
      region="south-america"
      regionName="South America"
      backHref="/south-america"
      dishes={southAmericaCultureKitchen}
      theme={southAmericaCultureKitchenTheme}
      countries={[
        "Argentina",
        "Bolivia",
        "Brazil",
        "Chile",
        "Colombia",
        "Ecuador",
        "Guyana",
        "Paraguay",
        "Peru",
        "Suriname",
        "Uruguay",
        "Venezuela",
      ]}
    />
  );
}
