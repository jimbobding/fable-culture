import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Region = {
  name: string;
  slug: string;
  lat: number;
  lng: number;
};

const britishRegions: Region[] = [
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

export default function BritishMapTest() {
  return (
    <MapContainer
      center={[54.5, -3.0]}
      zoom={6}
      minZoom={6.5}
      scrollWheelZoom={false}
      style={{ height: "600px", width: "80%" }}
      maxBounds={[
        [49.8, -8.0], // bottom-left UK only
        [59.5, 1.8], // top-right UK only
      ]}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {britishRegions.map((region) => (
        <Marker key={region.slug} position={[region.lat, region.lng]}>
          <Popup>{region.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
