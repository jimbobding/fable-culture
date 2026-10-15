"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebaseConfig";
import type { CultureKitchenTheme } from "./types";

type Props = {
  region: string;
  countries: string[];
  theme: CultureKitchenTheme;
};

async function compressImage(file: File): Promise<File> {
  const bitmap = await createImageBitmap(file);
  try {
    const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));

    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Could not process photograph");

    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

    const blob = await new Promise<Blob>((resolve, reject) =>
      canvas.toBlob(
        result => result ? resolve(result) : reject(new Error("Compression failed")),
        "image/jpeg",
        0.8
      )
    );

    if (blob.size >= 5 * 1024 * 1024)
      throw new Error("Photograph is still too large after compression");

    return new File([blob], "photo.jpg", { type: "image/jpeg" });
  } finally {
    bitmap.close();
  }
}

export default function CultureKitchenSubmissionForm({
  region, countries, theme
}: Props) {
  const [creatorName, setCreatorName] = useState("");
  const [dishName, setDishName] = useState("");
  const [inspiration, setInspiration] = useState("");
  const [method, setMethod] = useState<"write" | "attach" | "link">("write");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [recipeFile, setRecipeFile] = useState<File | null>(null);
  const [recipeUrl, setRecipeUrl] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const fieldStyle = {
    backgroundColor: theme.surface,
    borderColor: theme.border,
    color: theme.text
  };

  async function upload(file: File, folder: string) {
    const path = `culture-kitchen/${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    const fileRef = ref(storage, path);
    await uploadBytes(fileRef, file, { contentType: file.type });
    return { url: await getDownloadURL(fileRef), path };
  }

  async function submit() {
    setError("");
    setSuccess(false);

    if (!creatorName.trim() || !dishName.trim() || !inspiration) {
      setError("Please enter your name, recipe name and country.");
      return;
    }

    if (method === "write" && (!ingredients.trim() || !steps.trim())) {
      setError("Please add your ingredients and cooking instructions.");
      return;
    }

    if (method === "attach" && !recipeFile) {
      setError("Please attach your recipe.");
      return;
    }

    if (method === "link") {
      try {
        const url = new URL(recipeUrl.trim());
        if (!["https:", "http:"].includes(url.protocol))
          throw new Error("Invalid protocol");
      } catch {
        setError("Please enter a valid recipe website URL.");
        return;
      }
    }

    if (recipeFile && recipeFile.size >= 5 * 1024 * 1024) {
      setError("Please use a recipe attachment smaller than 5 MB.");
      return;
    }

    if (recipeFile && ![
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ].includes(recipeFile.type)) {
      setError("Recipe attachments must be PDF, DOC or DOCX files.");
      return;
    }

    setSubmitting(true);

    try {
      let imageUrl = "";
      let storagePath = "";
      let recipeFileUrl = "";
      let recipeStoragePath = "";

      if (photo) {
        const compressed = await compressImage(photo);
        const uploaded = await upload(compressed, "photos");
        imageUrl = uploaded.url;
        storagePath = uploaded.path;
      }

      if (method === "attach" && recipeFile) {
        const uploaded = await upload(recipeFile, "recipes");
        recipeFileUrl = uploaded.url;
        recipeStoragePath = uploaded.path;
      }

      await addDoc(collection(db, "cultureKitchenSubmissions"), {
        creatorName: creatorName.trim(),
        dishName: dishName.trim(),
        inspiration,
        region,
        description: method === "write" ? steps.trim() : "",
        keyIngredients: method === "write" ? ingredients.trim() : "",
        adaptation: "",
        makeAgain: "yes",
        recipeMethod: method,
        recipeUrl: method === "link" ? recipeUrl.trim() : "",
        recipeSteps: method === "write" ? steps.trim() : "",
        recipeFileUrl,
        recipeStoragePath,
        imageUrl,
        storagePath,
        status: "pending",
        submittedAt: serverTimestamp()
      });

      setSuccess(true);
      setCreatorName("");
      setDishName("");
      setInspiration("");
      setIngredients("");
      setSteps("");
      setRecipeFile(null);
      setRecipeUrl("");
      setPhoto(null);
      setMethod("write");

      document.querySelectorAll<HTMLInputElement>(
        'input[data-kitchen-file="true"]'
      ).forEach(input => { input.value = ""; });

    } catch (err) {
      console.error(err);
      setError("Submission failed. Check Firebase upload permissions and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      className="rounded-[2rem] border p-6 sm:p-9"
      style={{
        backgroundColor: theme.surfaceAlt,
        borderColor: theme.border,
        boxShadow: theme.featureShadow
      }}
    >
      <p className="text-sm font-black uppercase tracking-widest"
        style={{ color: theme.primary }}>
        🍽️ Fable Culture Kitchen
      </p>

      <h2 className="mt-3 text-3xl font-black sm:text-4xl"
        style={{ color: theme.text }}>
        Share Your Recipe
      </h2>

      <p className="mt-3" style={{ color: theme.mutedText }}>
        Share something you have cooked or a recipe inspired by this region.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="font-bold" style={{ color: theme.text }}>
            Your name or initials *
          </span>
          <input className="w-full rounded-xl border p-3"
            style={fieldStyle} value={creatorName}
            onChange={e => setCreatorName(e.target.value)}
            placeholder="Name or initials" />
        </label>

        <label className="block space-y-2">
          <span className="font-bold" style={{ color: theme.text }}>
            Recipe name *
          </span>
          <input className="w-full rounded-xl border p-3"
            style={fieldStyle} value={dishName}
            onChange={e => setDishName(e.target.value)}
            placeholder="What are you making?" />
        </label>

        <label className="block space-y-2 sm:col-span-2">
          <span className="font-bold" style={{ color: theme.text }}>
            Country inspired by *
          </span>
          <select className="w-full rounded-xl border p-3"
            style={fieldStyle} value={inspiration}
            onChange={e => setInspiration(e.target.value)}>
            <option value="">Choose a country</option>
            {countries.map(country =>
              <option key={country} value={country}>{country}</option>
            )}
          </select>
        </label>
      </div>

      <h3 className="mt-8 text-xl font-black" style={{ color: theme.text }}>
        How would you like to share your recipe?
      </h3>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {(["write", "attach", "link"] as const).map(option => (
          <button key={option} type="button"
            onClick={() => setMethod(option)}
            className="rounded-2xl border-2 p-5 text-left font-bold"
            style={{
              backgroundColor: method === option ? theme.primary : theme.surface,
              borderColor: theme.primary,
              color: method === option ? theme.surface : theme.text
            }}>
            {option === "write" ? "✏️ Write my recipe" : option === "attach" ? "📎 Attach my recipe" : "🔗 Share a recipe link"}
          </button>
        ))}
      </div>

      {method === "write" ? (
        <div className="mt-6 space-y-5">
          <label className="block space-y-2">
            <span className="font-bold" style={{ color: theme.text }}>
              🥕 Ingredients *
            </span>
            <textarea className="w-full rounded-xl border p-4"
              style={fieldStyle} rows={5} value={ingredients}
              onChange={e => setIngredients(e.target.value)}
              placeholder={"List your ingredients here..."} />
          </label>

          <label className="block space-y-2">
            <span className="font-bold" style={{ color: theme.text }}>
              👩‍🍳 How to make it *
            </span>
            <textarea className="w-full rounded-xl border p-4"
              style={fieldStyle} rows={6} value={steps}
              onChange={e => setSteps(e.target.value)}
              placeholder="Step 1... Step 2... Step 3..." />
          </label>
        </div>
      ) : method === "link" ? (
        <label className="mt-6 block space-y-3">
          <span className="font-bold" style={{ color: theme.text }}>
            🔗 Recipe website URL *
          </span>
          <input
            type="url"
            value={recipeUrl}
            onChange={e => setRecipeUrl(e.target.value)}
            placeholder="https://www.bbcgoodfood.com/recipes/..."
            className="w-full rounded-xl border p-4"
            style={fieldStyle}
          />
          <span className="block text-sm" style={{ color: theme.mutedText }}>
            Paste a link to the recipe you would like to share.
          </span>
        </label>
      ) : (
        <div className="mt-6 rounded-2xl border p-5"
          style={{ borderColor: theme.border, backgroundColor: theme.surface }}>
          <label className="block space-y-3">
            <span className="font-bold" style={{ color: theme.text }}>
              📄 Attach a recipe (PDF or Word) *
            </span>
            <input data-kitchen-file="true" type="file"
              accept=".pdf,.doc,.docx"
              onChange={e => setRecipeFile(e.target.files?.[0] ?? null)}
              className="block w-full text-sm" style={{ color: theme.text }} />
          </label>
          <p className="mt-2 text-xs" style={{ color: theme.mutedText }}>
            Maximum 5 MB. Document uploads require Firebase permissions.
          </p>
        </div>
      )}

      <div className="mt-6 rounded-2xl border p-5"
        style={{ borderColor: theme.border, backgroundColor: theme.surface }}>
        <label className="block space-y-3">
          <span className="font-bold" style={{ color: theme.text }}>
            📷 Add a food photograph (optional)
          </span>
          <input data-kitchen-file="true" type="file" accept="image/*"
            onChange={e => setPhoto(e.target.files?.[0] ?? null)}
            className="block w-full text-sm" style={{ color: theme.text }} />
        </label>
        <p className="mt-2 text-xs" style={{ color: theme.mutedText }}>
          Large photographs are automatically compressed.
        </p>
      </div>

      <button type="button" onClick={submit} disabled={submitting}
        className="mt-7 rounded-full px-8 py-4 font-black disabled:opacity-50"
        style={{ backgroundColor: theme.primary, color: theme.surface }}>
        {submitting ? "Submitting..." : "🚀 Submit for Approval"}
      </button>

      {error && <p role="alert" className="mt-4 font-bold text-red-600">{error}</p>}
      {success && <p className="mt-4 font-bold text-green-700">
        ✓ Recipe submitted for staff approval!
      </p>}

      <p className="mt-5 text-sm" style={{ color: theme.mutedText }}>
        Your recipe will be checked before appearing in Culture Kitchen.
        Use initials rather than full names for student privacy.
      </p>
    </section>
  );
}
