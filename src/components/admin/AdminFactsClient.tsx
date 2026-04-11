"use client";

import { useMemo, useState } from "react";
import AdminFactCard from "@/components/admin/AdminFactCard";
import type { Fact } from "@/app/admin/facts/page";

type Props = {
  facts: Fact[];
};

export default function AdminFactsClient({ facts }: Props) {
  const [localFacts, setLocalFacts] = useState<Fact[]>(facts);
  const [statusFilter, setStatusFilter] = useState("all");
  const [continentFilter, setContinentFilter] = useState("all");
  const [regionFilter, setRegionFilter] = useState("all");

  const continents = useMemo(() => {
    return Array.from(
      new Set(localFacts.map((fact) => fact.continent).filter(Boolean)),
    ).sort();
  }, [localFacts]);

  const regions = useMemo(() => {
    return Array.from(
      new Set(localFacts.map((fact) => fact.regionKey).filter(Boolean)),
    ).sort();
  }, [localFacts]);

  const filteredFacts = useMemo(() => {
    return localFacts.filter((fact: Fact) => {
      const matchesStatus =
        statusFilter === "all" || fact.status === statusFilter;
      const matchesContinent =
        continentFilter === "all" || fact.continent === continentFilter;
      const matchesRegion =
        regionFilter === "all" || fact.regionKey === regionFilter;

      return matchesStatus && matchesContinent && matchesRegion;
    });
  }, [localFacts, statusFilter, continentFilter, regionFilter]);

  const pendingFacts = filteredFacts.filter(
    (fact: Fact) => fact.status === "pending",
  );

  const approvedFacts = filteredFacts.filter(
    (fact: Fact) => fact.status === "approved",
  );

  return (
    <>
      <section className="mb-8 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-stone-900">Filters</h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-medium text-stone-700">
              Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2"
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-stone-700">
              Continent
            </label>
            <select
              value={continentFilter}
              onChange={(e) => setContinentFilter(e.target.value)}
              className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2"
            >
              <option value="all">All</option>
              {continents.map((continent) => (
                <option key={continent} value={continent}>
                  {continent}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-stone-700">
              Region
            </label>
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2"
            >
              <option value="all">All</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="mb-16 rounded-3xl border border-amber-200 bg-amber-50/50 p-8 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-stone-900">
          Pending Facts
        </h2>

        {pendingFacts.length === 0 ? (
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            No pending facts.
          </div>
        ) : (
          <div className="grid gap-6">
            {pendingFacts.map((fact) => (
              <AdminFactCard
                key={fact.id}
                {...fact}
                setLocalFacts={setLocalFacts}
              />
            ))}
          </div>
        )}
      </section>

      <section className="rounded-3xl border border-green-200 bg-green-50/40 p-8 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-stone-900">
          Approved Facts
        </h2>

        {approvedFacts.length === 0 ? (
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            No approved facts.
          </div>
        ) : (
          <div className="grid gap-6">
            {approvedFacts.map((fact) => (
              <AdminFactCard
                key={fact.id}
                {...fact}
                setLocalFacts={setLocalFacts}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
