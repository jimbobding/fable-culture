import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { deleteObject, ref } from "firebase/storage";

import { db, storage } from "@/firebaseConfig";

/* =========================================================
   TYPES
========================================================= */

export type FirebaseArtRoomExampleImage = {
  imageUrl: string;
  storagePath?: string;
  alt?: string;
  caption?: string;
  order: number;
};

export type FirebaseArtRoomProject = {
  id: string;

  region: string;
  regionName: string;
  country?: string;

  title: string;
  description?: string;
  task?: string;

  image?: string;
  imageStoragePath?: string;

  exampleImages: FirebaseArtRoomExampleImage[];

  materials: string[];
  instructions: string[];

  order: number;
  published: boolean;

  createdAt?: unknown;
  updatedAt?: unknown;
};

/* =========================================================
   COLLECTION
========================================================= */

export const CULTURE_GALLERY_ART_ROOM_COLLECTION = "cultureGalleryArtRoom";

/* =========================================================
   SMALL SAFETY HELPERS
========================================================= */

function safeString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function safeStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item): item is string => typeof item === "string");
}

function safeExampleImages(value: unknown): FirebaseArtRoomExampleImage[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const images: FirebaseArtRoomExampleImage[] = [];

  value.forEach((example, index) => {
    if (typeof example !== "object" || example === null) {
      return;
    }

    const item = example as Record<string, unknown>;

    /*
      We support both imageUrl and src here.

      imageUrl = Firebase/admin version
      src      = shared Culture Gallery version

      This keeps the loader forgiving while we're moving
      from static data to Firebase.
    */

    const imageUrl = safeString(item.imageUrl) || safeString(item.src);

    if (!imageUrl) {
      return;
    }

    images.push({
      imageUrl,

      storagePath: safeString(item.storagePath) || undefined,

      alt: safeString(item.alt) || undefined,

      caption: safeString(item.caption) || undefined,

      order: typeof item.order === "number" ? item.order : index + 1,
    });
  });

  return images.sort((a, b) => a.order - b.order);
}

/* =========================================================
   NORMALISE FIRESTORE DATA

   IMPORTANT:
   Every project returned from this function ALWAYS has:

   exampleImages: []
   materials: []
   instructions: []

   even if those fields do not exist in Firebase.

   That means the admin can safely use .map() on them.
========================================================= */

function normaliseProject(
  id: string,
  data: Record<string, unknown>,
): FirebaseArtRoomProject {
  return {
    id,

    region: safeString(data.region),

    regionName: safeString(data.regionName),

    country: safeString(data.country) || undefined,

    title: safeString(data.title),

    description: safeString(data.description) || undefined,

    task: safeString(data.task) || undefined,

    image: safeString(data.image) || undefined,

    imageStoragePath: safeString(data.imageStoragePath) || undefined,

    exampleImages: safeExampleImages(data.exampleImages),

    materials: safeStringArray(data.materials),

    instructions: safeStringArray(data.instructions),

    order: typeof data.order === "number" ? data.order : 999,

    published: typeof data.published === "boolean" ? data.published : false,

    createdAt: data.createdAt,

    updatedAt: data.updatedAt,
  };
}

/* =========================================================
   GET ALL PROJECTS

   Used by the admin.
========================================================= */

export async function getAllCultureGalleryArtRoomProjects() {
  const snapshot = await getDocs(
    collection(db, CULTURE_GALLERY_ART_ROOM_COLLECTION),
  );

  return snapshot.docs
    .map((document) =>
      normaliseProject(document.id, document.data() as Record<string, unknown>),
    )
    .sort((a, b) => {
      const regionCompare = a.region.localeCompare(b.region);

      if (regionCompare !== 0) {
        return regionCompare;
      }

      return a.order - b.order;
    });
}

/* =========================================================
   GET PUBLISHED PROJECTS FOR ONE REGION

   Used by the public Culture Gallery.
========================================================= */

export async function getPublishedCultureGalleryArtRoomProjects(
  region: string,
) {
  const projects = await getAllCultureGalleryArtRoomProjects();

  return projects
    .filter(
      (project) => project.region === region && project.published === true,
    )
    .sort((a, b) => a.order - b.order);
}

/* =========================================================
   SAVE PROJECT
========================================================= */

export async function saveCultureGalleryArtRoomProject(
  project: FirebaseArtRoomProject,
  isNew: boolean,
) {
  const projectRef = doc(db, CULTURE_GALLERY_ART_ROOM_COLLECTION, project.id);

  /*
    These fallbacks are intentional.

    Even if something strange gets passed into this helper,
    Firebase receives arrays rather than undefined values.
  */

  const exampleImages = Array.isArray(project.exampleImages)
    ? project.exampleImages
    : [];

  const materials = Array.isArray(project.materials) ? project.materials : [];

  const instructions = Array.isArray(project.instructions)
    ? project.instructions
    : [];

  const data = {
    region: project.region ?? "",
    regionName: project.regionName ?? "",
    country: project.country ?? "",

    title: project.title ?? "",
    description: project.description ?? "",
    task: project.task ?? "",

    image: project.image ?? "",
    imageStoragePath: project.imageStoragePath ?? "",

    exampleImages: exampleImages.map((image, index) => ({
      imageUrl: image.imageUrl ?? "",

      storagePath: image.storagePath ?? "",

      alt: image.alt ?? "",

      caption: image.caption ?? "",

      order: index + 1,
    })),

    materials,

    instructions,

    order: typeof project.order === "number" ? project.order : 999,

    published:
      typeof project.published === "boolean" ? project.published : false,

    updatedAt: serverTimestamp(),

    ...(isNew
      ? {
          createdAt: serverTimestamp(),
        }
      : {}),
  };

  await setDoc(projectRef, data, {
    merge: true,
  });
}

/* =========================================================
   PUBLISH / UNPUBLISH
========================================================= */

export async function setCultureGalleryArtRoomPublished(
  id: string,
  published: boolean,
) {
  const projectRef = doc(db, CULTURE_GALLERY_ART_ROOM_COLLECTION, id);

  await setDoc(
    projectRef,
    {
      published,
      updatedAt: serverTimestamp(),
    },
    {
      merge: true,
    },
  );
}

/* =========================================================
   DELETE A STORAGE FILE SAFELY
========================================================= */

export async function deleteCultureGalleryArtRoomImage(storagePath?: string) {
  if (!storagePath) {
    return;
  }

  try {
    await deleteObject(ref(storage, storagePath));
  } catch (error) {
    console.warn("Could not delete Culture Gallery Art Room image:", error);
  }
}

/* =========================================================
   DELETE WHOLE PROJECT
========================================================= */

export async function deleteCultureGalleryArtRoomProject(
  project: FirebaseArtRoomProject,
) {
  if (project.imageStoragePath) {
    await deleteCultureGalleryArtRoomImage(project.imageStoragePath);
  }

  const exampleImages = Array.isArray(project.exampleImages)
    ? project.exampleImages
    : [];

  for (const image of exampleImages) {
    if (image.storagePath) {
      await deleteCultureGalleryArtRoomImage(image.storagePath);
    }
  }

  await deleteDoc(doc(db, CULTURE_GALLERY_ART_ROOM_COLLECTION, project.id));
}

/* =========================================================
   CONVERT FIREBASE PROJECT FOR SHARED CULTURE GALLERY
========================================================= */

export function convertFirebaseArtRoomProject(project: FirebaseArtRoomProject) {
  const exampleImages = Array.isArray(project.exampleImages)
    ? project.exampleImages
    : [];

  const materials = Array.isArray(project.materials) ? project.materials : [];

  const instructions = Array.isArray(project.instructions)
    ? project.instructions
    : [];

  return {
    id: project.id,

    title: project.title,

    country: project.country || undefined,

    image: project.image || undefined,

    description: project.description || undefined,

    task: project.task || undefined,

    exampleImages: exampleImages.map((image) => ({
      src: image.imageUrl,

      alt: image.alt || undefined,

      caption: image.caption || undefined,
    })),

    materials: materials.length > 0 ? materials : undefined,

    instructions: instructions.length > 0 ? instructions : undefined,
  };
}
