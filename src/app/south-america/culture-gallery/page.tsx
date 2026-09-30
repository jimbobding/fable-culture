import CultureGalleryPage from "@/components/shared/culture-gallery/CultureGalleryPage";

import {
  southAmericaCultureGallery,
  southAmericaCultureGalleryTheme,
} from "@/data/southAmerica/cultureGallery/cultureGallery";

export default function SouthAmericaCultureGalleryPage() {
  return (
    <CultureGalleryPage
      region="south-america"
      regionName="South America"
      backHref="/south-america"
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
      config={southAmericaCultureGallery}
      theme={southAmericaCultureGalleryTheme}
      presentation={{
        heroStyle: "poster",
        headingStyle: "stacked",
        imageStyle: "print",
        layoutStyle: "freeform",
        patternStyle: "textile",
        sectionStyle: "mural",
      }}
    />
  );
}
