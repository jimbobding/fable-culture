"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";

import { db } from "@/firebaseConfig";

type CreationSubmission = {
  id: string;
  activity: string;
  creatorName: string;
  imageUrl: string;
  status: string;
};

type DisplayStyle = "grid" | "postcard-wall";

type CreationGalleryProps = {
  activity: string;
  title: string;
  subtitle?: string;
  printable?: boolean;
  displayStyle?: DisplayStyle;
};

const postcardRotations = [
  "-rotate-[2deg]",
  "rotate-[1.5deg]",
  "-rotate-[1deg]",
  "rotate-[2.5deg]",
  "-rotate-[1.5deg]",
  "rotate-[1deg]",
];

const tapePositions = [
  "left-1/2 -translate-x-1/2",
  "left-[18%] -rotate-6",
  "right-[18%] rotate-6",
];

export default function CreationGallery({
  activity,
  title,
  subtitle,
  printable = false,
  displayStyle = "grid",
}: CreationGalleryProps) {
  const [submissions, setSubmissions] = useState<CreationSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCreation, setSelectedCreation] =
    useState<CreationSubmission | null>(null);

  useEffect(() => {
    const submissionsQuery = query(
      collection(db, "createYourLookSubmissions"),
      where("status", "==", "approved"),
    );

    const unsubscribe = onSnapshot(
      submissionsQuery,
      (snapshot) => {
        const approved = snapshot.docs
          .map((document) => {
            const data = document.data();

            return {
              id: document.id,
              activity: data.activity ?? "",
              creatorName: data.creatorName ?? "",
              imageUrl: data.imageUrl ?? "",
              status: data.status ?? "",
            };
          })
          .filter((submission) => submission.activity === activity);

        setSubmissions(approved);
        setLoading(false);
      },
      (error) => {
        console.error("Couldn't load approved creations:", error);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, [activity]);

  const visibleSubmissions = useMemo(
    () => submissions.filter((submission) => submission.imageUrl),
    [submissions],
  );

  function printCreation(submission: CreationSubmission) {
    const printWindow = window.open("", "_blank", "width=1000,height=800");

    if (!printWindow) {
      alert("Please allow pop-ups so the postcard can be printed.");
      return;
    }

    const safeCreatorName = submission.creatorName
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    const safeImageUrl = submission.imageUrl
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    printWindow.document.write(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Print Postcard</title>

          <style>
            @page {
              size: landscape;
              margin: 12mm;
            }

            * {
              box-sizing: border-box;
            }

            html,
            body {
              margin: 0;
              padding: 0;
              background: white;
              font-family: Arial, sans-serif;
            }

            body {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .print-card {
              width: 100%;
              text-align: center;
            }

            img {
              display: block;
              width: auto;
              max-width: 100%;
              max-height: 175mm;
              margin: 0 auto;
              object-fit: contain;
            }

            .creator {
              margin-top: 8mm;
              font-size: 14px;
              font-weight: 700;
              color: #222;
            }

            @media print {
              .creator {
                display: none;
              }
            }
          </style>
        </head>

        <body>
          <div class="print-card">
            <img
              id="postcard-image"
              src="${safeImageUrl}"
              alt="Postcard created by ${safeCreatorName}"
            />

            <div class="creator">
              Created by ${safeCreatorName || "Fable"}
            </div>
          </div>

          <script>
            const image = document.getElementById("postcard-image");

            function printPostcard() {
              window.focus();
              window.print();
            }

            if (image.complete) {
              setTimeout(printPostcard, 250);
            } else {
              image.onload = function () {
                setTimeout(printPostcard, 250);
              };
            }
          </script>
        </body>
      </html>
    `);

    printWindow.document.close();
  }

  function renderPostcardWall() {
    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-[#b99965] bg-[#c9a66b] px-4 py-12 shadow-inner sm:px-8 sm:py-16 lg:px-12">
        {/* Noticeboard texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255,255,255,0.55) 0 1px, transparent 1.5px),
              radial-gradient(circle at 70% 60%, rgba(80,50,25,0.35) 0 1px, transparent 1.5px)
            `,
            backgroundSize: "19px 19px, 23px 23px",
          }}
        />

        <div className="relative grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
          {visibleSubmissions.map((submission, index) => {
            const rotation =
              postcardRotations[index % postcardRotations.length];

            const tapePosition = tapePositions[index % tapePositions.length];

            return (
              <article
                key={submission.id}
                className={`group relative ${rotation} transition duration-300 hover:z-10 hover:rotate-0 hover:-translate-y-2 hover:scale-[1.03]`}
              >
                {/* Tape */}
                <div
                  className={`pointer-events-none absolute -top-4 z-20 h-8 w-20 ${tapePosition} bg-[#f4e2a7]/80 shadow-sm backdrop-blur-[1px]`}
                />

                {/* Postcard */}
                <div className="overflow-hidden border-[8px] border-[#fffdf7] bg-[#fffdf7] shadow-[0_14px_28px_rgba(67,45,24,0.35)]">
                  <button
                    type="button"
                    onClick={() => setSelectedCreation(submission)}
                    className="block w-full cursor-zoom-in bg-[#eee8dc]"
                    aria-label={`View postcard by ${
                      submission.creatorName || "Fable"
                    }`}
                  >
                    <img
                      src={submission.imageUrl}
                      alt={`Postcard created by ${
                        submission.creatorName || "Fable"
                      }`}
                      className="aspect-[3/2] w-full object-contain"
                    />
                  </button>

                  <div className="flex flex-wrap items-center justify-between gap-3 bg-[#fffdf7] px-3 pb-2 pt-3">
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#a83f35]">
                        Created by
                      </p>

                      <p className="truncate font-black text-[#263c32]">
                        {submission.creatorName || "Fable"}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedCreation(submission)}
                        className="rounded-full bg-[#263c32] px-3 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#344f42]"
                      >
                        👁 View
                      </button>

                      {printable ? (
                        <button
                          type="button"
                          onClick={() => printCreation(submission)}
                          className="rounded-full bg-[#a83f35] px-3 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#91352e]"
                        >
                          🖨️ Print
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  }

  function renderGrid() {
    return (
      <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
        {visibleSubmissions.map((submission) => (
          <article
            key={submission.id}
            className="overflow-hidden rounded-[2rem] border border-[#ddd1ae] bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <button
              type="button"
              onClick={() => setSelectedCreation(submission)}
              className="block w-full cursor-zoom-in bg-[#eee7d6] p-3"
              aria-label={`View creation by ${
                submission.creatorName || "Fable"
              }`}
            >
              <img
                src={submission.imageUrl}
                alt={`Creation by ${submission.creatorName || "Fable"}`}
                className="aspect-[3/2] w-full rounded-[1.35rem] object-contain"
              />
            </button>

            <div className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#a83f35]">
                Created by
              </p>

              <h3 className="mt-1 text-xl font-black text-[#263c32]">
                {submission.creatorName || "Fable"}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCreation(submission)}
                  className="rounded-full bg-[#263c32] px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#344f42]"
                >
                  👁 View
                </button>

                {printable ? (
                  <button
                    type="button"
                    onClick={() => printCreation(submission)}
                    className="rounded-full border-2 border-[#a83f35] bg-white px-5 py-2.5 text-sm font-bold text-[#a83f35] transition hover:-translate-y-0.5 hover:bg-[#fff3ee]"
                  >
                    🖨️ Print
                  </button>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <>
      <section className="mt-16 overflow-hidden rounded-[2.5rem] border border-[#d5c79f] bg-[#fffaf0] shadow-xl">
        <div className="relative overflow-hidden bg-[#263c32] px-6 py-10 text-center text-white sm:px-10">
          <div className="pointer-events-none absolute -left-10 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full border-[12px] border-white/5" />

          <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rotate-12 border-[10px] border-white/5" />

          <div className="relative">
            <div className="mb-3 text-4xl">📮</div>

            <p className="mb-2 text-xs font-black uppercase tracking-[0.28em] text-[#e8c66d]">
              Made at Fable
            </p>

            <h2 className="text-3xl font-black sm:text-4xl">{title}</h2>

            {subtitle ? (
              <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>

        <div className="px-4 py-8 sm:px-7 lg:px-9">
          {loading ? (
            <div className="py-12 text-center font-semibold text-[#5f665f]">
              Loading creations...
            </div>
          ) : visibleSubmissions.length === 0 ? (
            <div className="mx-auto max-w-xl py-12 text-center">
              <div className="mb-4 text-5xl">✉️</div>

              <h3 className="text-xl font-black text-[#263c32]">
                The postcard wall is waiting!
              </h3>

              <p className="mt-2 leading-7 text-[#68675f]">
                Once postcards have been created and approved, we&apos;ll pin
                them up here.
              </p>
            </div>
          ) : displayStyle === "postcard-wall" ? (
            renderPostcardWall()
          ) : (
            renderGrid()
          )}
        </div>
      </section>

      {selectedCreation ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedCreation(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-6xl rounded-[2rem] bg-[#fffaf0] p-4 shadow-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
            role="presentation"
          >
            <button
              type="button"
              onClick={() => setSelectedCreation(null)}
              className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#263c32] text-xl font-black text-white shadow-lg"
              aria-label="Close creation"
            >
              ×
            </button>

            <img
              src={selectedCreation.imageUrl}
              alt={`Creation by ${selectedCreation.creatorName || "Fable"}`}
              className="max-h-[75vh] w-full rounded-[1.5rem] object-contain"
            />

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 px-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a83f35]">
                  Created by
                </p>

                <p className="text-lg font-black text-[#263c32]">
                  {selectedCreation.creatorName || "Fable"}
                </p>
              </div>

              {printable ? (
                <button
                  type="button"
                  onClick={() => printCreation(selectedCreation)}
                  className="rounded-full bg-[#a83f35] px-6 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#91352e]"
                >
                  🖨️ Print Postcard
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
