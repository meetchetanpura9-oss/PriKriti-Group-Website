
export const metadata = { title: "Case Studies", description: "Client success stories from PRIKRITI GROUP." };

const cases = [
  { title: "Textile Exporter — DGFT advisory", summary: "A Gujarat-based textile exporter saved ₹48 lakhs through Advance License optimisation." },
  { title: "Health Supplements Startup", summary: "Entered 5 new international markets after IEC, RCMC & EPCG work completed within 20 days." },
  { title: "Pharma Client — MEIS claims", summary: "Helped client claim ₹1.2 Cr in MEIS benefits over 3 years via documentation & follow-ups." },
];

export default function CaseStudies() {
  return (
    <main>
      {/* Hero Section with background image */}
      <section className="relative h-[35vh] flex items-center justify-center text-center" style={{ backgroundImage: "url('/images/case-studies/case-studies-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-red-700/80 to-black/60" />
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-4">Client Success Stories</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow">Real results for real businesses — see how we’ve made a difference.</p>
        </div>
      </section>

      {/* Case Studies Cards Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white min-h-[60vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((c, idx) => (
            <article key={c.title} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition p-8 flex flex-col items-center border-t-4 border-red-600">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-red-600 font-bold">{idx + 1}</span>
              </div>
              <h3 className="font-semibold text-xl text-center mb-2 text-gray-800">{c.title}</h3>
              <p className="text-gray-600 text-center">{c.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
