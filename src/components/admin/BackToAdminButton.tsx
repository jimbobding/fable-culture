import Link from "next/link";

export default function BackToAdminButton() {
  return (
    <Link
      href="/admin"
      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-100 hover:shadow"
    >
      ← Back to Admin
    </Link>
  );
}
