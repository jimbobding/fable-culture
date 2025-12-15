export type Region = {
  name: string; // Display name
  slug: string; // URL slug
  lat: number; // Latitude
  lng: number; // Longitude
};

export const britishRegions: Region[] = [
  { name: "England", slug: "england", lat: 52.3555, lng: -1.1743 },
  { name: "Scotland", slug: "scotland", lat: 56.4907, lng: -4.2026 },
  { name: "Wales", slug: "wales", lat: 52.1307, lng: -3.7837 },
  {
    name: "Northern Ireland",
    slug: "northern-ireland",
    lat: 54.6079,
    lng: -6.444,
  },
];
