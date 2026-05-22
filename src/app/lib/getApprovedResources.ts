import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "@/firebaseConfig";

export async function getApprovedResources(region: string) {
  const q = query(
    collection(db, "resourceSubmissions"),
    where("status", "==", "approved"),
    where("region", "==", region),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,

      title: data.title,

      description: data.description,

      topic: data.topic,

      country: data.country,

      name: data.submittedBy,

      href: data.url,
    };
  });
}
