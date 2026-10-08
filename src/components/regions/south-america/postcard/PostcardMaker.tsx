"use client";

import {
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import useCreationExport from "@/components/shared/games/create-your-look/hooks/useCreationExport";

type Zone = {
  left: number;
  top: number;
  width: number;
  height: number;
};

type Sticker = {
  id: string;
  name: string;
  src: string;
  description: string;
  place: string;
  zone: Zone;
};

type PlacedSticker = Sticker & {
  x: number;
  y: number;
  rotation: number;
  correct: boolean;
};

type DragState = {
  sticker: Sticker;
  pointerId: number;
  clientX: number;
  clientY: number;
};

const STICKER_FEEDBACK: Record<string, string> = {
  "angel-falls": "That's right! Angel Falls is a spectacular waterfall in Venezuela.",
  "christ-redeemer": "That's right! Christ the Redeemer stands in Rio de Janeiro, Brazil, and was completed in 1931.",
  "salt-flats": 'Correct! Salar de Uyuni is a huge salt flat in Bolivia.',
  "machu-picchu": 'Correct! Machu Picchu was built by the Inca in what is now Peru.',
  "galapagos-tortoise": "That's right! Giant tortoises are native to Ecuador's Galápagos Islands.",
  "tango-shoes": 'Correct! Tango developed around the Río de la Plata, especially in Argentina and Uruguay.',
  "carnival-drum": "That's right! Drumming is an important part of Brazil's Carnival celebrations.",
  "football": 'Correct! Football is hugely popular in Brazil and an important part of its sporting culture.',
  "cajon": "That's right! The cajón has its roots in Afro-Peruvian musical traditions.",
  "cacao": 'Correct! Ecuador has a long history of cultivating cacao, used to make chocolate.',
  "empanada": "That's right! Empanadas are popular filled pastries in Argentina and many other South American countries.",
  "pan-flute": 'Correct! Panpipes have been played in Andean communities for centuries.',
  "arepa": "That's right! Arepas are traditional maize cakes especially popular in Colombia and Venezuela.",
  "yerba-mate": 'Correct! Yerba mate is widely enjoyed in Paraguay, Argentina, Uruguay and southern Brazil.',
  "giant-water-lily": "That's right! Giant water lilies grow in the rivers and wetlands of the Amazon basin.",
  "pink-river-dolphin": 'Correct! Pink river dolphins live in the Amazon and Orinoco river systems.',
  "llama": "That's right! Llamas have been raised by Andean communities for thousands of years.",
  "capybara": 'Correct! Capybaras live around wetlands, rivers and grasslands across much of South America.',
  "toucan": "That's right! Toucans inhabit tropical forests in several South American countries.",
};

const REQUIRED_FOR_POSTCARD = 6;

const STICKERS: Sticker[] = [
  {
    id: "angel-falls",
    name: "Angel Falls",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-angel-falls.png",
    description:
      "The world's highest uninterrupted waterfall, dropping from Auyán-tepui.",
    place: "Venezuela",
    zone: { left: 27, top: 4, width: 28, height: 16 },
  },
  {
    id: "christ-redeemer",
    name: "Christ the Redeemer",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-christ-redeemer.png",
    description:
      "The enormous Art Deco statue overlooking Rio de Janeiro.",
    place: "Brazil",
    zone: { left: 45, top: 19, width: 47, height: 38 },
  },
  {
    id: "salt-flats",
    name: "Salar de Uyuni",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-salt-flats.png",
    description:
      "A vast white salt flat high on the Altiplano.",
    place: "Bolivia",
    zone: { left: 29, top: 36, width: 26, height: 16 },
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-machu-picchu.png",
    description:
      "A famous Inca site built high in the Andes.",
    place: "Peru",
    zone: { left: 13, top: 26, width: 23, height: 21 },
  },
  {
    id: "galapagos-tortoise",
    name: "Galápagos Tortoise",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-galapagos-tortoise.png",
    description:
      "A giant tortoise found on Ecuador's Galápagos Islands.",
    place: "Galápagos Islands · Ecuador",
    zone: { left: 0, top: 13, width: 14, height: 15 },
  },
  {
    id: "tango-shoes",
    name: "Tango Shoes",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-tango-shoes.png",
    description:
      "Tango developed around the Río de la Plata and became strongly associated with Buenos Aires.",
    place: "Argentina",
    zone: { left: 29, top: 54, width: 28, height: 38 },
  },
  {
    id: "carnival-drum",
    name: "Carnival Drum",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-carnival-drum.png",
    description:
      "Drumming and percussion are an important part of Brazil's famous Carnival traditions.",
    place: "Brazil",
    zone: { left: 45, top: 19, width: 47, height: 38 },
  },
  {
    id: "football",
    name: "Football",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-football.png",
    description:
      "Football is hugely popular across South America. This sticker celebrates Brazil's famous football culture.",
    place: "Brazil",
    zone: { left: 45, top: 19, width: 47, height: 38 },
  },
  {
    id: "cajon",
    name: "Cajón",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-cajon.png",
    description:
      "A box-shaped percussion instrument with important Afro-Peruvian roots.",
    place: "Peru",
    zone: { left: 13, top: 26, width: 23, height: 21 },
  },
  {
    id: "cacao",
    name: "Cacao",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-cacao.png",
    description:
      "Cacao has a long history in tropical South America and is an important crop in Ecuador.",
    place: "Ecuador",
    zone: { left: 8, top: 18, width: 18, height: 13 },
  },
  {
    id: "empanada",
    name: "Empanada",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-empanada.png",
    description:
      "Filled pastries are eaten across South America, with many regional versions.",
    place: "Argentina",
    zone: { left: 29, top: 54, width: 28, height: 38 },
  },
  {
    id: "pan-flute",
    name: "Pan Flute",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-pan-flute.png",
    description:
      "Panpipes have a long history in Andean musical traditions.",
    place: "The Andes",
    zone: { left: 16, top: 24, width: 28, height: 34 },
  },
  {
    id: "arepa",
    name: "Arepa",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-arepa.png",
    description:
      "A round maize cake especially associated with Colombia and Venezuela.",
    place: "Colombia & Venezuela",
    zone: { left: 14, top: 4, width: 41, height: 22 },
  },
  {
    id: "yerba-mate",
    name: "Yerba Mate",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-yerba-mate.png",
    description:
      "A traditional caffeinated drink shared widely across the Southern Cone.",
    place: "Southern Cone",
    zone: { left: 34, top: 49, width: 33, height: 26 },
  },
  {
    id: "giant-water-lily",
    name: "Giant Water Lily",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-giant-water-lily.png",
    description:
      "Huge floating leaves grow in slow-moving waters of the Amazon basin.",
    place: "Amazon Basin",
    zone: { left: 37, top: 17, width: 48, height: 31 },
  },
  {
    id: "pink-river-dolphin",
    name: "Pink River Dolphin",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-pink-river-dolphin.png",
    description:
      "A freshwater dolphin found in the Amazon and Orinoco river systems.",
    place: "Amazon & Orinoco",
    zone: { left: 35, top: 12, width: 48, height: 34 },
  },
  {
    id: "llama",
    name: "Llama",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-llama.png",
    description:
      "Llamas have been important to Andean communities for thousands of years.",
    place: "The Andes",
    zone: { left: 18, top: 27, width: 27, height: 31 },
  },
  {
    id: "capybara",
    name: "Capybara",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-capybara.png",
    description:
      "The world's largest living rodent lives around rivers, wetlands and grasslands.",
    place: "Tropical South America",
    zone: { left: 42, top: 19, width: 46, height: 39 },
  },
  {
    id: "toucan",
    name: "Toucan",
    src: "/images/continents/south-america/postcard/stickers/sa-sticker-toucan.png",
    description:
      "These colourful birds live in tropical forests across northern and central South America.",
    place: "Tropical forests",
    zone: { left: 35, top: 12, width: 50, height: 34 },
  },
];

export default function PostcardMaker() {
  const mapRef = useRef<HTMLDivElement>(null);
  const postcardRef = useRef<HTMLDivElement>(null);

  const [creatorName, setCreatorName] = useState("");
  const [selectedId, setSelectedId] = useState(STICKERS[0].id);
  const [placed, setPlaced] = useState<PlacedSticker[]>([]);
  const [drag, setDrag] = useState<DragState | null>(null);
  const [message, setMessage] = useState(
    "Choose a sticker and decide where you think it belongs.",
  );
  const [postcardMode, setPostcardMode] = useState(false);

  const selected =
    STICKERS.find((sticker) => sticker.id === selectedId) ?? STICKERS[0];

  const placedIds = new Set(placed.map((sticker) => sticker.id));

  const {
    saveLook: savePostcard,
    submitLook: submitPostcard,
    isSubmitting,
  } = useCreationExport({
    previewRef: postcardRef,
    downloadFilename: "south-america-postcard.png",
    activity: "south-america-postcard",
    creatorName,
    setCreatorName,
    submissionMessage:
      "Your South America map has been sent to Fable Culture for approval!",
  });

  function isCorrect(sticker: Sticker, x: number, y: number) {
    const zone = sticker.zone;

    return (
      x >= zone.left &&
      x <= zone.left + zone.width &&
      y >= zone.top &&
      y <= zone.top + zone.height
    );
  }

  function selectSticker(sticker: Sticker) {
    setSelectedId(sticker.id);

    const alreadyPlaced = placed.find((item) => item.id === sticker.id);

    if (alreadyPlaced) {
      setMessage(
        alreadyPlaced.correct
          ? `✓ ${STICKER_FEEDBACK[sticker.id] ?? sticker.description}`
          : `? ${sticker.name} doesn't quite belong there. It's connected with ${sticker.place}. Drag it somewhere else to correct it.`,
      );
    } else {
      setMessage("Where do you think it belongs? Drag it onto the map.");
    }
  }

  function startTrayDrag(
    event: ReactPointerEvent<HTMLButtonElement>,
    sticker: Sticker,
  ) {
    if (placedIds.has(sticker.id)) return;

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);

    setSelectedId(sticker.id);
    setMessage(`Where would you put ${sticker.name}?`);

    setDrag({
      sticker,
      pointerId: event.pointerId,
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }

  function moveDrag(event: ReactPointerEvent<HTMLButtonElement>) {
    if (!drag || drag.pointerId !== event.pointerId) return;

    setDrag((current) =>
      current
        ? {
            ...current,
            clientX: event.clientX,
            clientY: event.clientY,
          }
        : null,
    );
  }

  function finishDrag(event: ReactPointerEvent<HTMLButtonElement>) {
    if (!drag || drag.pointerId !== event.pointerId) return;

    const sticker = drag.sticker;
    const clientX = event.clientX;
    const clientY = event.clientY;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setDrag(null);
    dropSticker(sticker, clientX, clientY);
  }

  function cancelDrag(event?: ReactPointerEvent<HTMLButtonElement>) {
    if (
      event &&
      event.currentTarget.hasPointerCapture(event.pointerId)
    ) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setDrag(null);
  }

  function startPlacedDrag(
    event: ReactPointerEvent<HTMLButtonElement>,
    sticker: PlacedSticker,
  ) {
    event.preventDefault();
    event.stopPropagation();

    event.currentTarget.setPointerCapture(event.pointerId);

    setSelectedId(sticker.id);
    setMessage(`Move ${sticker.name} wherever you think it belongs.`);

    setDrag({
      sticker,
      pointerId: event.pointerId,
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }

  function dropSticker(sticker: Sticker, clientX: number, clientY: number) {
    const map = mapRef.current;

    if (!map) return;

    const rect = map.getBoundingClientRect();

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    // Give the drop a little forgiveness around the edge of the board.
    // The pointer does not need to land perfectly inside the map.
    const overMap = x >= -5 && x <= 105 && y >= -5 && y <= 105;

    if (!overMap) {
      setMessage("Pop it somewhere on the map.");
      return;
    }

    // Keep the actual sticker safely inside the visible board.
    const safeX = Math.max(3, Math.min(97, x));
    const safeY = Math.max(3, Math.min(97, y));

    const correct = isCorrect(sticker, safeX, safeY);
    const existing = placed.find((item) => item.id === sticker.id);

    const newSticker: PlacedSticker = {
      ...sticker,
      x: safeX,
      y: safeY,
      correct,
      rotation:
        existing?.rotation ?? Math.round(Math.random() * 12 - 6),
    };

    setPlaced((current) => [
      ...current.filter((item) => item.id !== sticker.id),
      newSticker,
    ]);

    if (correct) {
      setMessage(`THUNK! ✓ ${STICKER_FEEDBACK[sticker.id] ?? sticker.description}`);
    } else {
      setMessage(
        `Hmm… ${sticker.name} doesn't really belong there. It's connected with ${sticker.place}. Grab it again if you want to move it.`,
      );
    }
  }

  function reset() {
    setPlaced([]);
    setDrag(null);
    setSelectedId(STICKERS[0].id);
    setMessage("Choose a sticker and decide where you think it belongs.");
    setCreatorName("");
    setPostcardMode(false);
  }

  if (postcardMode) {
    return (
      <main className="min-h-screen bg-[#153d2d] px-4 py-10 text-[#211f1b]">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-center text-xs font-black uppercase tracking-[0.3em] text-[#f4c542]">
            Your South America Map
          </p>

          <div
            ref={postcardRef}
            className="border-[8px] border-[#211f1b] bg-[#168c9e] p-[4%] shadow-[12px_12px_0_#b84432]"
          >
            <div className="mb-5 rotate-[-1deg]">
              <p className="text-sm font-black uppercase tracking-[0.25em]">
                Greetings from
              </p>

              <h1 className="text-5xl font-black uppercase leading-none text-[#f4c542] [text-shadow:3px_3px_0_#211f1b] sm:text-7xl">
                South America!
              </h1>
            </div>

            <div className="relative mx-auto max-w-[800px] overflow-hidden border-[6px] border-[#211f1b] bg-white">
              <img
                src="/images/continents/south-america/postcard/south-america-game-map.png"
                alt="South America map"
                className="block h-auto w-full"
              />

              {placed.map((sticker) => (
                <img
                  key={sticker.id}
                  src={sticker.src}
                  alt={sticker.name}
                  className="pointer-events-none absolute z-20 h-auto w-[14%] drop-shadow-[3px_5px_3px_rgba(0,0,0,0.4)]"
                  style={{
                    left: `${sticker.x}%`,
                    top: `${sticker.y}%`,
                    transform: `translate(-50%, -50%) rotate(${sticker.rotation}deg)`,
                  }}
                />
              ))}
            </div>

            <div className="mt-5 flex justify-end">
              <div className="rotate-[-3deg] border-[3px] border-[#211f1b] bg-[#f4c542] px-5 py-3 text-sm font-black uppercase tracking-[0.16em]">
                Made at Fable Culture
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-xl border-[5px] border-[#211f1b] bg-[#f4e5c4] p-5 shadow-[7px_7px_0_#b84432]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b84432]">
              Finished?
            </p>

            <h2 className="mt-1 text-2xl font-black uppercase">
              Save or send your map
            </h2>

            <div className="mt-5">
              <label
                htmlFor="postcard-creator-name"
                className="text-sm font-black uppercase tracking-[0.12em]"
              >
                Your Name
              </label>

              <input
                id="postcard-creator-name"
                type="text"
                value={creatorName}
                onChange={(event) => setCreatorName(event.target.value)}
                placeholder="Enter your name"
                className="mt-2 w-full border-[3px] border-[#211f1b] bg-white px-4 py-3 font-bold outline-none focus:bg-[#fff8e8]"
              />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => void savePostcard()}
                className="border-[4px] border-[#211f1b] bg-[#f4c542] px-5 py-4 font-black uppercase shadow-[4px_4px_0_#211f1b]"
              >
                ↓ Save My Map
              </button>

              <button
                type="button"
                onClick={() => void submitPostcard()}
                disabled={isSubmitting}
                className="border-[4px] border-[#211f1b] bg-[#b84432] px-5 py-4 font-black uppercase text-white shadow-[4px_4px_0_#211f1b] disabled:cursor-wait disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "↑ Submit to Fable Culture"}
              </button>
            </div>

            <p className="mt-4 text-center text-xs font-bold text-[#211f1b]/65">
              Submitted maps are checked before appearing in the Map Gallery.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3 border-t-[3px] border-[#211f1b] pt-5">
              <button
                type="button"
                onClick={() => setPostcardMode(false)}
                className="border-[3px] border-[#f4e5c4] bg-[#153d2d] px-5 py-3 font-black uppercase text-[#f4e5c4]"
              >
                ← Keep decorating
              </button>

              <button
                type="button"
                onClick={reset}
                className="border-[3px] border-[#211f1b] bg-white px-5 py-3 font-black uppercase"
              >
                ↻ Make another
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#efe0ba] text-[#211f1b]">
      {drag && (
        <div
          className="pointer-events-none fixed z-[999] w-28 -translate-x-1/2 -translate-y-1/2 sm:w-36"
          style={{ left: drag.clientX, top: drag.clientY }}
        >
          <img
            src={drag.sticker.src}
            alt=""
            className="h-auto w-full drop-shadow-[5px_7px_4px_rgba(0,0,0,0.4)]"
          />
        </div>
      )}

      <header className="border-b-[5px] border-[#211f1b] bg-[#153d2d] px-5 py-6 text-[#f4e5c4]">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-5">
          <div>
            <a
              href="/south-america"
              className="text-xs font-black uppercase tracking-[0.2em] text-[#f4c542]"
            >
              ← South America
            </a>

            <h1 className="mt-3 text-4xl font-black uppercase sm:text-6xl">
              Build Your South America Map
            </h1>

            <p className="mt-2 max-w-2xl font-bold text-[#f4e5c4]/75">
              Pick a sticker, decide where it belongs and build your own South
              America map.
            </p>
          </div>

          <div className="border-[3px] border-[#f4e5c4] bg-[#211f1b] px-5 py-3">
            <span className="text-3xl font-black text-[#f4c542]">
              {placed.length}
            </span>
            <span className="font-black text-[#f4e5c4]/60">
              {" "}stickers added
            </span>
          </div>
        </div>
      </header>

      <section className="px-3 py-6 md:px-6">
        <div className="mx-auto grid max-w-[1600px] gap-6 lg:grid-cols-[minmax(0,1fr)_370px]">
          <div>
            <div className="mb-5 flex items-center gap-4 border-[4px] border-[#211f1b] bg-[#f4c542] p-4 shadow-[5px_5px_0_#211f1b]">
              <img
                src={selected.src}
                alt=""
                className="h-24 w-24 shrink-0 object-contain"
              />

              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b84432]">
                  {selected.place}
                </p>

                <h2 className="text-2xl font-black uppercase">
                  {selected.name}
                </h2>

                <p className="mt-1 max-w-2xl font-bold leading-6">
                  {selected.description}
                </p>

                <p className="mt-2 text-sm font-black">{message}</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div
                ref={mapRef}
                className="relative w-full max-w-[900px] overflow-hidden border-[6px] border-[#211f1b] bg-white shadow-[10px_10px_0_#168c9e]"
              >
                <img
                  src="/images/continents/south-america/postcard/south-america-game-map.png"
                  alt="Map of South America"
                  draggable={false}
                  className="pointer-events-none block h-auto w-full select-none"
                />

                {placed.map((sticker) => (
                  <button
                    key={sticker.id}
                    type="button"
                    onClick={() => selectSticker(sticker)}
                    onPointerDown={(event) =>
                      startPlacedDrag(event, sticker)
                    }
                    onPointerMove={moveDrag}
                    onPointerUp={finishDrag}
                    onPointerCancel={cancelDrag}
                    onLostPointerCapture={() => setDrag(null)}
                    className="absolute z-20 w-[14%] touch-none border-0 bg-transparent p-0"
                    style={{
                      left: `${sticker.x}%`,
                      top: `${sticker.y}%`,
                      transform: `translate(-50%, -50%) rotate(${sticker.rotation}deg)`,
                    }}
                    aria-label={`Move ${sticker.name}`}
                  >
                    <img
                      src={sticker.src}
                      alt={sticker.name}
                      draggable={false}
                      className="pointer-events-none h-auto w-full select-none drop-shadow-[3px_5px_3px_rgba(0,0,0,0.4)]"
                    />

                    <span
                      className={`pointer-events-none absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#211f1b] text-sm font-black ${
                        sticker.correct
                          ? "bg-[#f4c542]"
                          : "bg-[#b84432] text-white"
                      }`}
                    >
                      {sticker.correct ? "✓" : "?"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit border-[5px] border-[#211f1b] bg-[#f8ebc9] p-4 shadow-[7px_7px_0_#b84432] lg:sticky lg:top-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b84432]">
              Your sticker collection
            </p>

            <h2 className="mt-1 text-2xl font-black uppercase">
              Where does it go?
            </h2>

            <p className="mt-2 text-xs font-bold leading-5">
              Drag a sticker anywhere onto the map. If it looks wrong, pick it
              back up and move it.
            </p>

            <div className="mt-4 grid max-h-[65vh] grid-cols-2 gap-3 overflow-y-auto pr-1">
              {STICKERS.map((sticker) => {
                const placedSticker = placed.find(
                  (item) => item.id === sticker.id,
                );

                return (
                  <button
                    key={sticker.id}
                    type="button"
                    disabled={Boolean(placedSticker)}
                    onClick={() => selectSticker(sticker)}
                    onPointerDown={(event) =>
                      startTrayDrag(event, sticker)
                    }
                    onPointerMove={moveDrag}
                    onPointerUp={finishDrag}
                    onPointerCancel={cancelDrag}
                    onLostPointerCapture={() => setDrag(null)}
                    className={`relative touch-none border-[3px] border-[#211f1b] p-2 transition ${
                      placedSticker
                        ? "bg-[#153d2d] opacity-35"
                        : selected.id === sticker.id
                          ? "bg-[#f4c542] shadow-[3px_3px_0_#211f1b]"
                          : "bg-white hover:-translate-y-1"
                    }`}
                  >
                    {placedSticker && (
                      <span
                        className={`absolute right-1 top-1 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#211f1b] text-sm font-black ${
                          placedSticker.correct
                            ? "bg-[#f4c542]"
                            : "bg-[#b84432] text-white"
                        }`}
                      >
                        {placedSticker.correct ? "✓" : "?"}
                      </span>
                    )}

                    <img
                      src={sticker.src}
                      alt=""
                      draggable={false}
                      className="pointer-events-none mx-auto h-24 w-full select-none object-contain"
                    />

                    <span className="pointer-events-none block text-[10px] font-black uppercase leading-tight">
                      {sticker.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 border-t-[4px] border-[#211f1b] pt-5">
              <button
                type="button"
                disabled={placed.length < REQUIRED_FOR_POSTCARD}
                onClick={() => setPostcardMode(true)}
                className="w-full border-[4px] border-[#211f1b] bg-[#b84432] px-4 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[5px_5px_0_#211f1b] disabled:cursor-not-allowed disabled:opacity-30"
              >
                🌎 Finish my map
              </button>

              {placed.length < REQUIRED_FOR_POSTCARD && (
                <p className="mt-3 text-center text-xs font-bold">
                  Add {REQUIRED_FOR_POSTCARD - placed.length} more{" "}
                  {REQUIRED_FOR_POSTCARD - placed.length === 1
                    ? "sticker"
                    : "stickers"}{" "}
                  to finish your map.
                </p>
              )}

              <button
                type="button"
                onClick={reset}
                className="mt-4 w-full border-[3px] border-[#211f1b] bg-white px-4 py-3 text-xs font-black uppercase tracking-[0.15em]"
              >
                ↻ Start again
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
