// import type { NextApiRequest, NextApiResponse } from "next";
// import { db } from @firebaseConfig;
// import { doc, getDoc } from "firebase/firestore";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { region } = req.query;

//   if (!region || typeof region !== "string") {
//     return res.status(400).json({ error: "Region missing" });
//   }

//   const docRef = doc(db, "regions", region);
//   const docSnap = await getDoc(docRef);

//   if (!docSnap.exists()) {
//     return res.status(404).json({ error: "Region not found" });
//   }

//   res.status(200).json(docSnap.data());
// }
