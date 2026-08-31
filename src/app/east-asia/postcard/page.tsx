import Link from "next/link";
import CreateYourLook from "@/components/shared/games/create-your-look/CreateYourLook";
import { eastAsiaPostcardData } from "@/data/eastAsia/createYourLook/postcard";

export default function EastAsiaPostcardPage() {
  return (
    <main className="min-h-screen bg-[#f4eddf] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1700px]">
        <div className="mb-6">
          <Link
            href="/east-asia"
            className="inline-flex rounded-full border border-[#c7b98f] bg-white px-5 py-3 font-bold text-[#263c32] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            ← Back to East Asia
          </Link>
        </div>

        <CreateYourLook config={eastAsiaPostcardData} />
      </div>
    </main>
  );
}
