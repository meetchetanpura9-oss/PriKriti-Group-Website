
export const metadata = { title: "Resources — PRIKRITI GROUP" };

const files = [
  { name: "IEC registration checklist (PDF)", path: "/downloads/iec-checklist.pdf" },
  { name: "GST Due Dates Calendar (PDF)", path: "/downloads/gst-dates.pdf" },
  { name: "Guide to EPCG scheme (PDF)", path: "/downloads/epcg-guide.pdf" },
];

export default function Resources() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center text-center bg-gradient-to-r from-red-600 to-red-400">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-2">Resources & Downloads</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow">Essential guides, checklists, and tools for your business success.</p>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white min-h-[60vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {files.map(f => (
            <a
              key={f.path}
              className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl hover:shadow-2xl transition p-8 border-t-4 border-red-600 group"
              href={f.path}
              download
            >
              <svg className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" /></svg>
              <span className="font-semibold text-lg text-gray-800 text-center mb-2">{f.name}</span>
              <span className="text-sm text-gray-500">Click to download</span>
            </a>
          ))}
        </div>
        <p className="mt-10 text-sm text-gray-500 text-center">Put the PDF files inside <code>/public/downloads/</code>.</p>
      </section>
    </main>
  );
}
