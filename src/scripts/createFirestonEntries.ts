import { db, storage } from "../firebase"; // import your existing config
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, listAll } from "firebase/storage";

async function main() {
  // Reference to the root showcase folder
  const showcaseRef = ref(storage, "showcase");
  const folders = await listAll(showcaseRef);

  for (const folder of folders.prefixes) {
    // folder.name is the project name (e.g., Africa)
    const folderRef = ref(storage, `showcase/${folder.name}`);
    const files = await listAll(folderRef);

    for (const fileRef of files.items) {
      await addDoc(collection(db, "showcaseEntries"), {
        studentName: "Unknown",
        description: "Auto-generated entry",
        project: folder.name,
        imageName: fileRef.name,
        date: serverTimestamp(),
      });
      console.log(`Added Firestore entry for ${folder.name}/${fileRef.name}`);
    }
  }

  console.log("All done!");
}

main().catch(console.error);
