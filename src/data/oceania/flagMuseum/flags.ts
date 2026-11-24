import type { MuseumFlag } from "@/components/shared/flag-museum/FlagGallery";

export type OceaniaMuseumFlag = MuseumFlag & {
  regionId: string;
  status: "independent" | "territory" | "self-governing";
};

const flagImage = (countryCode: string) =>
  `https://flagcdn.com/w320/${countryCode}.png`;

export const oceaniaMuseumFlags: OceaniaMuseumFlag[] = [
  // AUSTRALIA & NEW ZEALAND
  {
    id: "australia",
    name: "Australia",
    image: flagImage("au"),
    regionId: "australia-new-zealand",
    status: "independent",
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    image: flagImage("nz"),
    regionId: "australia-new-zealand",
    status: "independent",
  },

  // MELANESIA
  {
    id: "papua-new-guinea",
    name: "Papua New Guinea",
    image: flagImage("pg"),
    regionId: "melanesia",
    status: "independent",
  },
  {
    id: "fiji",
    name: "Fiji",
    image: flagImage("fj"),
    regionId: "melanesia",
    status: "independent",
  },
  {
    id: "solomon-islands",
    name: "Solomon Islands",
    image: flagImage("sb"),
    regionId: "melanesia",
    status: "independent",
  },
  {
    id: "vanuatu",
    name: "Vanuatu",
    image: flagImage("vu"),
    regionId: "melanesia",
    status: "independent",
  },
  {
    id: "new-caledonia",
    name: "New Caledonia",
    image: flagImage("nc"),
    regionId: "melanesia",
    status: "territory",
  },

  // POLYNESIA
  {
    id: "samoa",
    name: "Samoa",
    image: flagImage("ws"),
    regionId: "polynesia",
    status: "independent",
  },
  {
    id: "tonga",
    name: "Tonga",
    image: flagImage("to"),
    regionId: "polynesia",
    status: "independent",
  },
  {
    id: "tuvalu",
    name: "Tuvalu",
    image: flagImage("tv"),
    regionId: "polynesia",
    status: "independent",
  },
  {
    id: "cook-islands",
    name: "Cook Islands",
    image: flagImage("ck"),
    regionId: "polynesia",
    status: "self-governing",
  },
  {
    id: "niue",
    name: "Niue",
    image: flagImage("nu"),
    regionId: "polynesia",
    status: "self-governing",
  },
  {
    id: "tokelau",
    name: "Tokelau",
    image: flagImage("tk"),
    regionId: "polynesia",
    status: "territory",
  },
  {
    id: "french-polynesia",
    name: "French Polynesia",
    image: flagImage("pf"),
    regionId: "polynesia",
    status: "territory",
  },
  {
    id: "american-samoa",
    name: "American Samoa",
    image: flagImage("as"),
    regionId: "polynesia",
    status: "territory",
  },

  // MICRONESIA
  {
    id: "federated-states-of-micronesia",
    name: "Federated States of Micronesia",
    image: flagImage("fm"),
    regionId: "micronesia",
    status: "independent",
  },
  {
    id: "palau",
    name: "Palau",
    image: flagImage("pw"),
    regionId: "micronesia",
    status: "independent",
  },
  {
    id: "marshall-islands",
    name: "Marshall Islands",
    image: flagImage("mh"),
    regionId: "micronesia",
    status: "independent",
  },
  {
    id: "kiribati",
    name: "Kiribati",
    image: flagImage("ki"),
    regionId: "micronesia",
    status: "independent",
  },
  {
    id: "nauru",
    name: "Nauru",
    image: flagImage("nr"),
    regionId: "micronesia",
    status: "independent",
  },
  {
    id: "guam",
    name: "Guam",
    image: flagImage("gu"),
    regionId: "micronesia",
    status: "territory",
  },
  {
    id: "northern-mariana-islands",
    name: "Northern Mariana Islands",
    image: flagImage("mp"),
    regionId: "micronesia",
    status: "territory",
  },
];

export function getOceaniaFlagsByRegion(regionId: string): OceaniaMuseumFlag[] {
  return oceaniaMuseumFlags.filter((flag) => flag.regionId === regionId);
}
