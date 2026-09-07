"use client";

import { useState } from "react";
import type { CultureKitchenDish, CultureKitchenTheme } from "./types";

type Props = {
  title?: string;
  intro?: string;
  dishes: CultureKitchenDish[];
  theme: CultureKitchenTheme;
};

export default function CultureKitchen({
  title = "Culture Kitchen",
  intro = "Explore dishes from across the region, learn about their cultural connections and discover something you could cook yourself.",
  dishes,
  theme,
}: Props) {
  const [selectedDishId, setSelectedDishId] = useState<string | null>(null);

  const selectedDish = dishes.find((dish) => dish.id === selectedDishId);

  return (
    <section className="space-y-12">
      {/* INTRO */}
      <div className="mx-auto max-w-4xl text-center">
        <div
          className="mx-auto mb-6 h-[2px] w-20"
          style={{ backgroundColor: theme.primary }}
        />

        <p
          className="text-xs font-black uppercase tracking-[0.45em]"
          style={{ color: theme.primary }}
        >
          Taste • Cook • Discover
        </p>

        <h1
          className="mt-5 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl"
          style={{ color: theme.text }}
        >
          {title}
        </h1>

        <p
          className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed"
          style={{ color: theme.mutedText }}
        >
          {intro}
        </p>
      </div>

      {/* DISH GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish, index) => {
          const cardAccent = index % 2 === 0 ? theme.primary : theme.secondary;

          return (
            <button
              key={dish.id}
              type="button"
              onClick={() =>
                setSelectedDishId(selectedDishId === dish.id ? null : dish.id)
              }
              className="group relative overflow-hidden border text-left transition-all duration-300 hover:-translate-y-1.5"
              style={{
                borderColor: theme.border,
                backgroundColor: theme.surface,
                boxShadow: theme.cardShadow,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = theme.cardHoverShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = theme.cardShadow;
              }}
            >
              {/* IMAGE */}
              <div
                className="relative h-56 overflow-hidden"
                style={{ backgroundColor: theme.surfaceAlt }}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                <span
                  className="absolute left-4 top-4 border px-3 py-1.5 text-xs font-black uppercase tracking-[0.15em] backdrop-blur"
                  style={{
                    borderColor: `${theme.border}99`,
                    backgroundColor: `${theme.surface}E8`,
                    color: theme.text,
                  }}
                >
                  {dish.flag} {dish.country}
                </span>

                <span className="absolute bottom-4 right-4 font-serif text-5xl text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* CONTENT */}
              <div className="relative p-6">
                <div
                  className="absolute left-0 top-0 h-[3px] w-16"
                  style={{ backgroundColor: cardAccent }}
                />

                <h3
                  className="text-2xl font-black"
                  style={{ color: theme.text }}
                >
                  {dish.name}
                </h3>

                <p
                  className="mt-3 line-clamp-3 leading-relaxed"
                  style={{ color: theme.mutedText }}
                >
                  {dish.intro}
                </p>

                <div
                  className="mt-6 flex items-center justify-between gap-4 border-t pt-4"
                  style={{ borderColor: theme.softBorder }}
                >
                  <span
                    className="text-sm font-black"
                    style={{ color: theme.accent }}
                  >
                    {"★".repeat(dish.difficulty)}
                    <span style={{ color: theme.softBorder }}>
                      {"★".repeat(3 - dish.difficulty)}
                    </span>
                  </span>

                  <span
                    className="text-xs font-black uppercase tracking-[0.18em]"
                    style={{ color: cardAccent }}
                  >
                    Open recipe →
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* SELECTED DISH */}
      {selectedDish && (
        <article
          className="relative overflow-hidden border"
          style={{
            borderColor: theme.border,
            backgroundColor: theme.surface,
            boxShadow: theme.cardHoverShadow,
          }}
        >
          <div
            className="absolute left-0 top-0 z-10 h-1 w-full"
            style={{
              background: `linear-gradient(to right, ${theme.primary}, ${theme.accent}, ${theme.tertiary})`,
            }}
          />

          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[360px] overflow-hidden">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <p
                className="text-xs font-black uppercase tracking-[0.35em]"
                style={{ color: theme.primary }}
              >
                {selectedDish.flag} {selectedDish.country}
              </p>

              <h2
                className="mt-3 text-4xl font-black sm:text-5xl"
                style={{ color: theme.text }}
              >
                {selectedDish.name}
              </h2>

              <p
                className="mt-5 text-lg leading-relaxed"
                style={{ color: theme.mutedText }}
              >
                {selectedDish.intro}
              </p>

              <div
                className="my-8 h-px"
                style={{ backgroundColor: theme.softBorder }}
              />

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3
                    className="text-lg font-black uppercase tracking-[0.12em]"
                    style={{ color: theme.text }}
                  >
                    Ingredients
                  </h3>

                  <ul
                    className="mt-4 space-y-2"
                    style={{ color: theme.mutedText }}
                  >
                    {selectedDish.ingredients.map((ingredient) => (
                      <li key={ingredient} className="flex items-start gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0"
                          style={{ backgroundColor: theme.primary }}
                        />

                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3
                    className="text-lg font-black uppercase tracking-[0.12em]"
                    style={{ color: theme.text }}
                  >
                    Kitchen Skills
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedDish.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border px-3 py-2 text-sm font-bold"
                        style={{
                          borderColor: theme.border,
                          backgroundColor: theme.surfaceAlt,
                          color: theme.tertiary,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* METHOD */}
              <div className="mt-10">
                <h3
                  className="text-lg font-black uppercase tracking-[0.12em]"
                  style={{ color: theme.text }}
                >
                  Kitchen Challenge
                </h3>

                <ol className="mt-5 space-y-4">
                  {selectedDish.steps.map((step, index) => (
                    <li
                      key={step}
                      className="grid grid-cols-[36px_1fr] items-start gap-4"
                    >
                      <span
                        className="flex h-9 w-9 items-center justify-center font-black"
                        style={{
                          backgroundColor: theme.primary,
                          color: theme.surface,
                        }}
                      >
                        {index + 1}
                      </span>

                      <p
                        className="pt-1 leading-relaxed"
                        style={{ color: theme.mutedText }}
                      >
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* CULTURAL CONNECTION */}
              <div
                className="mt-10 border-l-4 p-5"
                style={{
                  borderColor: theme.tertiary,
                  backgroundColor: `${theme.tertiary}12`,
                }}
              >
                <p
                  className="text-xs font-black uppercase tracking-[0.25em]"
                  style={{ color: theme.tertiary }}
                >
                  Cultural Connection
                </p>

                <p
                  className="mt-2 leading-relaxed"
                  style={{ color: theme.text }}
                >
                  {selectedDish.culturalNote}
                </p>
              </div>

              {/* STUDENT CHALLENGE */}
              <div
                className="mt-5 border-l-4 p-5"
                style={{
                  borderColor: theme.accent,
                  backgroundColor: `${theme.accent}18`,
                }}
              >
                <p
                  className="text-xs font-black uppercase tracking-[0.25em]"
                  style={{ color: theme.accent }}
                >
                  Your Challenge
                </p>

                <p
                  className="mt-2 text-lg font-bold leading-relaxed"
                  style={{ color: theme.text }}
                >
                  {selectedDish.studentChallenge}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedDishId(null)}
                className="mt-8 border px-5 py-3 text-sm font-black uppercase tracking-[0.15em] transition"
                style={{
                  borderColor: theme.primary,
                  color: theme.primary,
                }}
              >
                Close recipe
              </button>
            </div>
          </div>
        </article>
      )}
    </section>
  );
}
("use client");

import { useState } from "react";
import type { CultureKitchenDish, CultureKitchenTheme } from "./types";

type Props = {
  title?: string;
  intro?: string;
  dishes: CultureKitchenDish[];
  theme: CultureKitchenTheme;
};

export default function CultureKitchen({
  title = "Culture Kitchen",
  intro = "Explore dishes from across the region, learn about their cultural connections and discover something you could cook yourself.",
  dishes,
  theme,
}: Props) {
  const [selectedDishId, setSelectedDishId] = useState<string | null>(null);

  const selectedDish = dishes.find((dish) => dish.id === selectedDishId);

  return (
    <section className="space-y-12">
      {/* INTRO */}
      <div className="mx-auto max-w-4xl text-center">
        <div
          className="mx-auto mb-6 h-[2px] w-20"
          style={{ backgroundColor: theme.primary }}
        />

        <p
          className="text-xs font-black uppercase tracking-[0.45em]"
          style={{ color: theme.primary }}
        >
          Taste • Cook • Discover
        </p>

        <h1
          className="mt-5 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl"
          style={{ color: theme.text }}
        >
          {title}
        </h1>

        <p
          className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed"
          style={{ color: theme.mutedText }}
        >
          {intro}
        </p>
      </div>

      {/* DISH GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish, index) => {
          const cardAccent = index % 2 === 0 ? theme.primary : theme.secondary;

          return (
            <button
              key={dish.id}
              type="button"
              onClick={() =>
                setSelectedDishId(selectedDishId === dish.id ? null : dish.id)
              }
              className="group relative overflow-hidden border text-left transition-all duration-300 hover:-translate-y-1.5"
              style={{
                borderColor: theme.border,
                backgroundColor: theme.surface,
                boxShadow: theme.cardShadow,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = theme.cardHoverShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = theme.cardShadow;
              }}
            >
              {/* IMAGE */}
              <div
                className="relative h-56 overflow-hidden"
                style={{ backgroundColor: theme.surfaceAlt }}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                <span
                  className="absolute left-4 top-4 border px-3 py-1.5 text-xs font-black uppercase tracking-[0.15em] backdrop-blur"
                  style={{
                    borderColor: `${theme.border}99`,
                    backgroundColor: `${theme.surface}E8`,
                    color: theme.text,
                  }}
                >
                  {dish.flag} {dish.country}
                </span>

                <span className="absolute bottom-4 right-4 font-serif text-5xl text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* CONTENT */}
              <div className="relative p-6">
                <div
                  className="absolute left-0 top-0 h-[3px] w-16"
                  style={{ backgroundColor: cardAccent }}
                />

                <h3
                  className="text-2xl font-black"
                  style={{ color: theme.text }}
                >
                  {dish.name}
                </h3>

                <p
                  className="mt-3 line-clamp-3 leading-relaxed"
                  style={{ color: theme.mutedText }}
                >
                  {dish.intro}
                </p>

                <div
                  className="mt-6 flex items-center justify-between gap-4 border-t pt-4"
                  style={{ borderColor: theme.softBorder }}
                >
                  <span
                    className="text-sm font-black"
                    style={{ color: theme.accent }}
                  >
                    {"★".repeat(dish.difficulty)}
                    <span style={{ color: theme.softBorder }}>
                      {"★".repeat(3 - dish.difficulty)}
                    </span>
                  </span>

                  <span
                    className="text-xs font-black uppercase tracking-[0.18em]"
                    style={{ color: cardAccent }}
                  >
                    Open recipe →
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* SELECTED DISH */}
      {selectedDish && (
        <article
          className="relative overflow-hidden border"
          style={{
            borderColor: theme.border,
            backgroundColor: theme.surface,
            boxShadow: theme.cardHoverShadow,
          }}
        >
          <div
            className="absolute left-0 top-0 z-10 h-1 w-full"
            style={{
              background: `linear-gradient(to right, ${theme.primary}, ${theme.accent}, ${theme.tertiary})`,
            }}
          />

          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[360px] overflow-hidden">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <p
                className="text-xs font-black uppercase tracking-[0.35em]"
                style={{ color: theme.primary }}
              >
                {selectedDish.flag} {selectedDish.country}
              </p>

              <h2
                className="mt-3 text-4xl font-black sm:text-5xl"
                style={{ color: theme.text }}
              >
                {selectedDish.name}
              </h2>

              <p
                className="mt-5 text-lg leading-relaxed"
                style={{ color: theme.mutedText }}
              >
                {selectedDish.intro}
              </p>

              <div
                className="my-8 h-px"
                style={{ backgroundColor: theme.softBorder }}
              />

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3
                    className="text-lg font-black uppercase tracking-[0.12em]"
                    style={{ color: theme.text }}
                  >
                    Ingredients
                  </h3>

                  <ul
                    className="mt-4 space-y-2"
                    style={{ color: theme.mutedText }}
                  >
                    {selectedDish.ingredients.map((ingredient) => (
                      <li key={ingredient} className="flex items-start gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0"
                          style={{ backgroundColor: theme.primary }}
                        />

                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3
                    className="text-lg font-black uppercase tracking-[0.12em]"
                    style={{ color: theme.text }}
                  >
                    Kitchen Skills
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedDish.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border px-3 py-2 text-sm font-bold"
                        style={{
                          borderColor: theme.border,
                          backgroundColor: theme.surfaceAlt,
                          color: theme.tertiary,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* METHOD */}
              <div className="mt-10">
                <h3
                  className="text-lg font-black uppercase tracking-[0.12em]"
                  style={{ color: theme.text }}
                >
                  Kitchen Challenge
                </h3>

                <ol className="mt-5 space-y-4">
                  {selectedDish.steps.map((step, index) => (
                    <li
                      key={step}
                      className="grid grid-cols-[36px_1fr] items-start gap-4"
                    >
                      <span
                        className="flex h-9 w-9 items-center justify-center font-black"
                        style={{
                          backgroundColor: theme.primary,
                          color: theme.surface,
                        }}
                      >
                        {index + 1}
                      </span>

                      <p
                        className="pt-1 leading-relaxed"
                        style={{ color: theme.mutedText }}
                      >
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* CULTURAL CONNECTION */}
              <div
                className="mt-10 border-l-4 p-5"
                style={{
                  borderColor: theme.tertiary,
                  backgroundColor: `${theme.tertiary}12`,
                }}
              >
                <p
                  className="text-xs font-black uppercase tracking-[0.25em]"
                  style={{ color: theme.tertiary }}
                >
                  Cultural Connection
                </p>

                <p
                  className="mt-2 leading-relaxed"
                  style={{ color: theme.text }}
                >
                  {selectedDish.culturalNote}
                </p>
              </div>

              {/* STUDENT CHALLENGE */}
              <div
                className="mt-5 border-l-4 p-5"
                style={{
                  borderColor: theme.accent,
                  backgroundColor: `${theme.accent}18`,
                }}
              >
                <p
                  className="text-xs font-black uppercase tracking-[0.25em]"
                  style={{ color: theme.accent }}
                >
                  Your Challenge
                </p>

                <p
                  className="mt-2 text-lg font-bold leading-relaxed"
                  style={{ color: theme.text }}
                >
                  {selectedDish.studentChallenge}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedDishId(null)}
                className="mt-8 border px-5 py-3 text-sm font-black uppercase tracking-[0.15em] transition"
                style={{
                  borderColor: theme.primary,
                  color: theme.primary,
                }}
              >
                Close recipe
              </button>
            </div>
          </div>
        </article>
      )}
    </section>
  );
}
