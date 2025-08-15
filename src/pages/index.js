import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [cultures, setCultures] = useState([]);

  useEffect(() => {
    const fetchCultures = async () => {
      const snapshot = await getDocs(collection(db, "cultures"));
      setCultures(snapshot.docs.map((doc) => doc.data()));
    };
    fetchCultures();
  }, []);

  return (
    <div>
      <h1>Fable-Culture</h1>
      {cultures.map((c, i) => (
        <div key={i}>
          <h2>{c.name}</h2>
          <p>{c.description}</p>
        </div>
      ))}
    </div>
  );
}
