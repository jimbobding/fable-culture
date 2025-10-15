"use client";

import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { storage, db } from "@/firebaseConfig";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [studentName, setStudentName] = useState("");
  const [project, setProject] = useState("africa");

  const handleUpload = async () => {
    if (!file) {
      alert("File or user missing!");
      return;
    }

    const fileName = file.name;
    const storageRef = ref(storage, `showcase/${project}/${fileName}`);

    try {
      await uploadBytes(storageRef, file);
      await addDoc(collection(db, "showcaseEntries"), {
        studentName,
        project,
        description,
        imageName: fileName,
        date: serverTimestamp(),
        approved: false,
      });
      alert("Upload successful!");
    } catch (err) {
      console.error("Upload failed:", err);
    }
    setFile(null);
    setDescription("");
    setProject("");
    setStudentName("");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <select
        value={project}
        onChange={(e) => setProject(e.target.value)}
        className="border p-2 mb-2 w-full"
      >
        <option value="africa">Africa</option>
        <option value="europe">Europe</option>
      </select>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-2 w-full"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white p-2 w-full rounded"
      >
        Upload
      </button>
    </div>
  );
}
