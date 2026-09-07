import CultureGalleryPage from "@/components/shared/culture-gallery/CultureGalleryPage";

import {
  eastAsiaCultureGallery,
  eastAsiaCultureGalleryTheme,
} from "@/data/eastAsia/cultureGallery/cultureGallery";

export default function EastAsiaCultureGalleryPage() {
  return (
    <CultureGalleryPage
      region="east-asia"
      regionName="East Asia"
      backHref="/east-asia"
      countries={[
        "China",
        "Japan",
        "South Korea",
        "North Korea",
        "Mongolia",
        "Taiwan",
      ]}
      config={eastAsiaCultureGallery}
      theme={eastAsiaCultureGalleryTheme}
    />
  );
}
