// src/components/ContinentCard.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

interface ContinentCardProps {
  name: string;
  image: string;
  href: string;
}

export default function ContinentCard({
  name,
  image,
  href,
}: ContinentCardProps) {
  return (
    <Link href={href}>
      <div className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 p-4 text-white font-bold text-center">
          {name}
        </div>
      </div>
    </Link>
  );
}
