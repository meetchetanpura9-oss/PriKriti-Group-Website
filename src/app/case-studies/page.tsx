export const metadata = { title: "Case Studies", description: "Client success stories from PRIKRITI GROUP." };

export default function CaseStudies() {
  const cases = [
    { title: "Textile Exporter — DGFT advisory", summary: "A Gujarat-based textile exporter saved ₹48 lakhs through Advance License optimisation." },
    { title: "Health Supplements Startup", summary: "Entered 5 new international markets after IEC, RCMC & EPCG work completed within 20 days." },
    { title: "Pharma Client — MEIS claims", summary: "Helped client claim ₹1.2 Cr in MEIS benefits over 3 years via documentation & follow-ups." },
  ];

  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold">Client Success Stories</h1>
      <div className="mt-6 space-y-6">
        {cases.map((c) => (
          <article key={c.title} className="border rounded-lg p-6 bg-white">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="mt-2 text-gray-700">{c.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
