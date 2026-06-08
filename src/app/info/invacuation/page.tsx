export default function InvacuationPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* HEADER */}
        <section className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-300">
            Emergency Response Guide
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            Invacuation & Lockdown Response
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            Follow the guidance below and await further instructions from the
            Leadership Team and emergency services.
          </p>
        </section>

        {/* LEVEL 1 */}
        <section className="rounded-[2rem] border-4 border-green-500 bg-green-50 p-8 shadow-xl">
          <h2 className="text-4xl font-black text-green-800">
            🟢 LEVEL 1 – LOW LEVEL RESPONSE
          </h2>

          <div className="mt-6 space-y-3 text-lg text-slate-800">
            <p>• Alert via WhatsApp group & walkie talkies.</p>
            <p>• Leadership Team circulates to confirm alert.</p>
            <p>• Lockdown doors engaged to prevent unauthorised exit.</p>
            <p>
              • Staff off-site contacted by phone; do not return until safe.
            </p>
            <p>• Remain indoors; continue indoor activities.</p>
            <p>• Lock external doors & gates.</p>
            <p>
              • Attendance Officer completes register and checks for missing
              students.
            </p>
            <p>
              • Tutors complete register and notify Attendance Officer of
              missing students.
            </p>
            <p>• Continue lessons in classrooms.</p>
            <p>• Parents notified via text/email if end-of-day is affected.</p>
          </div>
        </section>

        {/* LEVEL 2 */}
        <section className="rounded-[2rem] border-4 border-amber-500 bg-amber-50 p-8 shadow-xl">
          <h2 className="text-4xl font-black text-amber-800">
            🟠 LEVEL 2 – MEDIUM LEVEL RESPONSE
          </h2>

          <div className="mt-6 space-y-3 text-lg text-slate-800">
            <p>• Alert via WhatsApp group & walkie talkies.</p>
            <p>• Leadership Team circulates.</p>
            <p>• Lockdown doors engaged.</p>
            <p>
              • Staff off-site contacted by phone; do not return until safe.
            </p>
            <p>
              • Students remain in current classroom or move to a secure
              classroom with staff.
            </p>
            <p>• Close all doors and windows.</p>
            <p>• Non-teaching staff stay in office bases.</p>
            <p>
              • Tutors complete register and notify Attendance Officer of
              missing students.
            </p>
            <p>• Parents notified via text/email if end-of-day is affected.</p>
          </div>
        </section>

        {/* LEVEL 3 */}
        <section className="rounded-[2rem] border-4 border-red-600 bg-red-50 p-8 shadow-xl">
          <h2 className="text-4xl font-black text-red-800">
            🔴 LEVEL 3 – HIGH LEVEL RESPONSE
          </h2>

          <div className="mt-6 space-y-3 text-lg font-medium text-slate-900">
            <p>• Alert immediately via walkie talkie.</p>
            <p>• Lockdown doors engaged.</p>
            <p>• Communicate via mobile/email for staff on/off-site.</p>
            <p>• Do not leave your current area.</p>
            <p>• Lock classroom doors.</p>
            <p>• Barricade with tables if doors cannot lock.</p>
            <p>• Open-area sessions move to nearest secure classroom/office.</p>
            <p>• Outdoor sessions move to café area if risk is inside.</p>
            <p>• Stay out of sight.</p>
            <p>• Stay away from windows and doors.</p>
            <p>• Lights off.</p>
            <p>• Hide under desks.</p>
            <p>
              • Teachers/staff complete register and notify Attendance Officer.
            </p>
            <p>
              • Parents notified once site is deemed safe by emergency services.
            </p>
            <p>• Head Teacher & Leadership Team decide when safe.</p>
            <p>
              • Leadership Team circulates to confirm threat ended and check
              welfare.
            </p>
          </div>
        </section>

        {/* POLICY */}
        <section className="rounded-[2rem] bg-white p-8 text-center shadow-xl">
          <h2 className="text-3xl font-black text-slate-900">
            Full Invacuation Policy
          </h2>

          <p className="mt-4 text-slate-600">
            For detailed procedures, responsibilities, training requirements,
            and supporting information please view the full policy document.
          </p>

          <a
            href="/policies/Invacuation-Policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-8 py-4 text-lg font-bold text-white transition hover:bg-slate-800"
          >
            📄 View Full Invacuation Policy
          </a>
        </section>
      </div>
    </main>
  );
}
