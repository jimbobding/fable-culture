import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

import { db, storage } from "@/firebaseConfig";

type SubmitCreateYourLookParams = {
  imageDataUrl: string;
  activity: string;
  creatorName: string;
};

export async function submitCreateYourLook({
  imageDataUrl,
  activity,
  creatorName,
}: SubmitCreateYourLookParams) {
  console.log("Starting Create Your Look submission");

  const fileName = `${activity}-${Date.now()}.png`;
  const imageRef = ref(storage, `create-your-look/${activity}/${fileName}`);

  console.log("Uploading image to Storage");

  await uploadString(imageRef, imageDataUrl, "data_url", {
    contentType: "image/png",
  });

  console.log("Getting image URL");

  const imageUrl = await getDownloadURL(imageRef);

  console.log("Writing Firestore document", imageUrl);

  const docRef = await addDoc(collection(db, "createYourLookSubmissions"), {
    activity,
    creatorName,
    imageUrl,
    status: "pending",
    createdAt: serverTimestamp(),
  });

  console.log("Firestore document created", docRef.id);

  return imageUrl;
}
