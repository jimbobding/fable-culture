"use client";

import { useState } from "react";

type GalleryStory = {
  id: string;
  title: string;
  location: string;
  image: string;
  imageAlt: string;
  summary: string;
  discovery: string;
  learnMoreLabel: string;
  learnMoreUrl: string;
};

const stories: GalleryStory[] = [
  {
    id: "voyaging",
    title: "The Voyages Continue",
    location: "Across the Pacific",
    image: "/images/history/oceania/living-history/voyaging-canoe.jpeg",
    imageAlt: "A traditional Pacific voyaging canoe at sea",
    summary: "Traditional ocean navigation is still practised today.",
    discovery:
      "Modern Pacific voyagers continue to learn and share navigation skills, including reading stars, winds and ocean swells. These voyages celebrate knowledge passed between generations.",
    learnMoreLabel: "Explore traditional wayfinding",
    learnMoreUrl: "https://worldwidevoyage.hokulea.com/education-at-sea/polynesian-navigation/polynesian-non-instrument-wayfinding/",
  },
  {
    id: "art",
    title: "Stories Through Art",
    location: "Pacific communities",
    image: "/images/history/oceania/living-history/tapa-cloth.jpeg",
    imageAlt: "Traditional Pacific textile patterns",
    summary: "Art and textiles can carry stories and cultural knowledge.",
    discovery:
      "Across the Pacific, people create and share art such as tapa cloth, weaving and carving. These traditions can express family connections, community identity and important events.",
    learnMoreLabel: "Discover Pacific tapa art",
    learnMoreUrl: "https://www.tepapa.govt.nz/digital-museum/explore-digital-museum/tapa-barkcloth-art-in-the-pacific",
  },
  {
    id: "memory",
    title: "Remembering the Past",
    location: "New Caledonia",
    image: "/images/history/oceania/living-history/tjibaou-cultural-centre.jpeg",
    imageAlt: "The Tjibaou Cultural Centre in New Caledonia",
    summary: "Communities preserve and interpret their histories.",
    discovery:
      "The Tjibaou Cultural Centre in New Caledonia celebrates Kanak culture. Cultural centres, museums and community projects help people share different perspectives on the past.",
    learnMoreLabel: "Explore the Tjibaou Cultural Centre",
    learnMoreUrl: "https://centretjibaou.nc/english",
  },
  {
    id: "culture",
    title: "Living Cultures",
    location: "Across Oceania",
    image: "/images/history/oceania/living-history/pacific-dance.jpeg",
    imageAlt: "A contemporary Pacific cultural celebration",
    summary: "Pacific languages, celebrations and traditions are alive.",
    discovery:
      "Pacific communities continue to teach languages, celebrate cultural events and develop new ways to share their heritage. History is not only about the past — it shapes life today.",
    learnMoreLabel: "Explore Pacific dance and storytelling",
    learnMoreUrl: "https://www.tepapa.govt.nz/visit/event/tapa-pacific-histories-in-cloth-art-making-and-community",
  },
];

export default function HistoryLivingGallery() {
  const [opened, setOpened] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  const [learnerName, setLearnerName] = useState("");
  const [visited, setVisited] = useState<string[]>([]);

  function toggleStory(id: string) {
    setVisited((current) =>
      current.includes(id) ? current : [...current, id]
    );

    setOpened((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  async function downloadCertificate() {
    if (!finished || visited.length !== stories.length) return;

    try {
      const element = document.getElementById(
        "oceania-certificate-print"
      );

      if (!element) return;

      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: "#f5ead4",
        useCORS: true,
        logging: false,
      });

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = 297;
      const pageHeight = 210;
      const margin = 8;
      const availableWidth = pageWidth - margin * 2;
      const availableHeight = pageHeight - margin * 2;

      const ratio = Math.min(
        availableWidth / canvas.width,
        availableHeight / canvas.height
      );

      const width = canvas.width * ratio;
      const height = canvas.height * ratio;

      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        (pageWidth - width) / 2,
        (pageHeight - height) / 2,
        width,
        height
      );

      pdf.save("oceania-history-explorer-certificate.pdf");
    } catch (error) {
      console.error("Certificate download failed:", error);
      alert("Sorry, the certificate could not be downloaded. Please try again.");
    }
  }

  return (
    <div className="mt-12">
      <div className="rounded-3xl border-2 border-[#b6a17d] bg-[#f8efdc] p-6 sm:p-8">
        <p className="text-sm font-black uppercase tracking-widest text-[#806346]">
          Your Final Destination
        </p>

        <h3 className="mt-3 text-3xl font-black">
          The Pacific Story Continues
        </h3>

        <p className="mt-4 max-w-3xl text-lg leading-relaxed">
          You have explored voyages, encounters and resistance.
          Now discover how Pacific communities continue to share
          their cultures and histories today.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {stories.map((story) => {
          const isOpen = opened.includes(story.id);

          return (
            <article
              key={story.id}
              className="overflow-hidden rounded-3xl border-2 border-[#b6a17d] bg-white shadow-md"
            >
              <div className="flex aspect-[16/9] items-center justify-center bg-[#e6dcc6]">
                {story.image ? (
                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-4xl" aria-hidden="true">🌊</p>
                    <p className="mt-3 text-sm font-bold text-[#66553e]">
                      Photograph coming soon
                    </p>
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-widest text-[#806346]">
                  {story.location}
                </p>

                <h4 className="mt-2 text-2xl font-black">
                  {story.title}
                </h4>

                <p className="mt-3 leading-relaxed">
                  {story.summary}
                </p>

                <button
                  type="button"
                  onClick={() => toggleStory(story.id)}
                  aria-expanded={isOpen}
                  className="mt-5 rounded-full bg-[#244e58] px-5 py-3 font-bold text-white transition hover:bg-[#356b76]"
                >
                  {isOpen ? "Close Discovery ↑" : "Discover More ↓"}
                </button>

                {isOpen && (
                  <div className="mt-5 rounded-xl bg-[#f8efdc] p-5">
                    <p className="font-black">Living History</p>
                    <p className="mt-2 leading-relaxed">
                      {story.discovery}
                    </p>

                    <a
                      href={story.learnMoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex rounded-full bg-[#244e58] px-5 py-3 font-bold text-white transition hover:bg-[#356b76] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244e58]"
                    >
                      {story.learnMoreLabel} ↗
                    </a>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-12">
        {!finished ? (
          <div className="rounded-3xl border-2 border-[#b89a65] bg-[#f5ead4] p-8 text-center">
            <p className="text-4xl" aria-hidden="true">🧭</p>

            <h3 className="mt-4 text-3xl font-black text-[#244e58]">
              Your Final Explorer Stamp Awaits
            </h3>

            <p className="mt-4 text-[#66553e]">
              Explore all four Living History stories to unlock
              your Oceania History Explorer certificate.
            </p>

            <p className="mt-5 text-xl font-black text-[#244e58]">
              {visited.length} / {stories.length} stories explored
            </p>

            <button
              type="button"
              disabled={visited.length !== stories.length}
              onClick={() => setFinished(true)}
              className="mt-6 rounded-full bg-[#244e58] px-7 py-3 font-black text-white hover:bg-[#356b76] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Complete the Expedition 🏅
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#b89a65] bg-white p-5">
              <label
                htmlFor="oceania-learner-name"
                className="block font-black text-[#244e58]"
              >
                Name for your certificate (optional)
              </label>

              <input
                id="oceania-learner-name"
                type="text"
                maxLength={40}
                value={learnerName}
                onChange={(event) =>
                  setLearnerName(event.target.value)
                }
                placeholder="First name or initials"
                className="mt-3 w-full rounded-xl border-2 border-[#b89a65] p-3"
              />

              <p className="mt-2 text-sm text-[#66553e]">
                Your name is only used to create this certificate.
                It is not saved to our database.
              </p>
            </div>

            <div
              id="oceania-certificate-print"
              className="rounded-3xl border-[5px] border-[#b89a65] bg-[#f5ead4] p-6 text-center text-[#244e58] sm:p-10"
            >
              <p className="text-sm font-black uppercase tracking-widest text-[#806346]">
                Fable Culture · The Great Pacific Expedition
              </p>

              <p className="mt-4 text-5xl" aria-hidden="true">🧭</p>

              <h3 className="mt-3 text-3xl font-black sm:text-4xl">
                Certificate of Exploration
              </h3>

              <p className="mt-3 text-xl font-bold text-[#806346]">
                Oceania History Explorer
              </p>

              <p className="mt-5">
                Proudly awarded to
              </p>

              <p className="mx-auto mt-2 max-w-lg border-b-2 border-[#b89a65] pb-2 text-2xl font-black">
                {learnerName.trim() || "Pacific History Explorer"}
              </p>

              <p className="mt-5 font-semibold">
                For completing five chapters exploring the
                history and cultures of Oceania.
              </p>

              <div className="mx-auto mt-6 max-w-2xl border-t border-[#b89a65] pt-5 text-left">
                <p className="text-center font-black text-[#806346]">
                  During this expedition, you discovered:
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed sm:text-base">
                  <li>⛵ How Pacific navigators travelled using traditional wayfinding skills.</li>
                  <li>🏝️ How Pacific societies developed their cultures and ways of life.</li>
                  <li>🤝 How encounters with Europeans brought different perspectives and changes.</li>
                  <li>📜 How Pacific communities responded to colonisation and defended their rights.</li>
                  <li>🌺 How Pacific peoples preserve and share their heritage today.</li>
                </ul>
              </div>

              <div className="mt-6 flex justify-center gap-3 text-2xl" aria-hidden="true">
                <span>⛵</span>
                <span>🏝️</span>
                <span>🤝</span>
                <span>📜</span>
                <span>🌺</span>
              </div>

              <p className="mt-6 text-xl font-black italic text-[#806346]">
                The voyage ends. The story continues.
              </p>

              <p className="mt-4 font-black">
                ✓ Expedition Complete
              </p>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={downloadCertificate}
                className="rounded-full bg-[#244e58] px-8 py-4 text-lg font-black text-white hover:bg-[#356b76]"
              >
                Download Certificate (PDF) ↓
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
