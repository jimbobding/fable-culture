"use client";

import { useMemo, useState } from "react";
import AdminTimelineCard from "@/components/admin/Timeline/AdminTimelineCard";

type TimelineSubmission = {
  id: string;
  title?: string;
  explanation?: string;
  region?: string;
  country?: string;
  periodKey?: string;
  studentName?: string;
  status?: string;
  createdAt?: any;
};

type Props = {
  submissions: TimelineSubmission[];
};

export default function AdminTimelineClient({ submissions }: Props) {
  const [localSubs, setLocalSubs] = useState(submissions);

  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");
  const [countryFilter, setCountryFilter] = useState("all");
  const [periodFilter, setPeriodFilter] = useState("all");

  const regions = useMemo(
    () => Array.from(new Set(localSubs.map((s) => s.region).filter(Boolean))),
    [localSubs],
  );

  const countries = useMemo(
    () => Array.from(new Set(localSubs.map((s) => s.country).filter(Boolean))),
    [localSubs],
  );

  const periods = useMemo(
    () =>
      Array.from(new Set(localSubs.map((s) => s.periodKey).filter(Boolean))),
    [localSubs],
  );

  const filtered = useMemo(() => {
    return localSubs
      .filter((s) => {
        const matchStatus = statusFilter === "all" || s.status === statusFilter;

        const matchRegion = regionFilter === "all" || s.region === regionFilter;

        const matchCountry =
          countryFilter === "all" || s.country === countryFilter;

        const matchPeriod =
          periodFilter === "all" || s.periodKey === periodFilter;

        const matchSearch =
          search === "" ||
          s.title?.toLowerCase().includes(search.toLowerCase()) ||
          s.explanation?.toLowerCase().includes(search.toLowerCase()) ||
          s.studentName?.toLowerCase().includes(search.toLowerCase());

        return (
          matchStatus &&
          matchRegion &&
          matchCountry &&
          matchPeriod &&
          matchSearch
        );
      })
      .sort((a, b) => {
        const aTime = a.createdAt?.seconds || 0;
        const bTime = b.createdAt?.seconds || 0;

        return bTime - aTime; // 🔥 newest first
      });
  }, [
    localSubs,
    statusFilter,
    regionFilter,
    countryFilter,
    periodFilter,
    search,
  ]);

  const pending = filtered.filter((s) => s.status === "pending");
  const approved = filtered.filter((s) => s.status === "approved");

  return (
    <>
      {/* Filters */}
      <section className="mb-8 rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Filters</h2>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search title, name, or idea..."
          className="mb-4 w-full rounded-xl border border-stone-300 px-3 py-2 text-sm"
        />

        <div className="grid gap-4 md:grid-cols-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl border p-2"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
          </select>

          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="rounded-xl border p-2"
          >
            <option value="all">All Regions</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>

          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="rounded-xl border p-2"
          >
            <option value="all">All Countries</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            value={periodFilter}
            onChange={(e) => setPeriodFilter(e.target.value)}
            className="rounded-xl border p-2"
          >
            <option value="all">All Periods</option>
            {periods.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Pending */}
      <section className="mb-16 rounded-3xl border border-amber-200 bg-amber-50/50 p-8 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold">Pending</h2>

        {pending.length === 0 ? (
          <div className="rounded-2xl border bg-white p-6">
            No pending submissions.
          </div>
        ) : (
          <div className="grid gap-6">
            {pending.map((item) => (
              <AdminTimelineCard key={item.id} {...item} />
            ))}
          </div>
        )}
      </section>

      {/* Approved */}
      <section className="rounded-3xl border border-green-200 bg-green-50/40 p-8 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold">Approved</h2>

        {approved.length === 0 ? (
          <div className="rounded-2xl border bg-white p-6">
            No approved submissions.
          </div>
        ) : (
          <div className="grid gap-6">
            {pending.map((item) => (
              <AdminTimelineCard key={item.id} {...item} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
