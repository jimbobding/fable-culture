type StaffMember = {
  id: string;
  name: string;
};

type StaffAbsenceSelectorProps = {
  staff: StaffMember[];
  absentStaffIds: string[];
  onToggleStaff: (staffId: string) => void;
};

export default function StaffAbsenceSelector({
  staff,
  absentStaffIds,
  onToggleStaff,
}: StaffAbsenceSelectorProps) {
  return (
    <section className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">Staff off</h2>

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        {staff.map((member) => (
          <button
            key={member.id}
            onClick={() => onToggleStaff(member.id)}
            className={`rounded-xl border px-4 py-3 text-left font-semibold ${
              absentStaffIds.includes(member.id)
                ? "border-red-300 bg-red-50 text-red-800"
                : "border-slate-200 bg-white"
            }`}
          >
            {member.name}
          </button>
        ))}
      </div>
    </section>
  );
}
