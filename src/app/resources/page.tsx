export const metadata = { title: "Resources — PRIKRITI GROUP" };

export default function Resources() {
  const files = [
    { name: "IEC registration checklist (PDF)", path: "/downloads/iec-checklist.pdf" },
    { name: "GST Due Dates Calendar (PDF)", path: "/downloads/gst-dates.pdf" },
    { name: "Guide to EPCG scheme (PDF)", path: "/downloads/epcg-guide.pdf" },
  ];

  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold">Resources & Downloads</h1>
      <div className="mt-6 space-y-3">
        {files.map(f => (
          <a key={f.path} className="block p-4 border rounded-lg bg-white" href={f.path} download>
            {f.name}
          </a>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-500">Put the PDF files inside <code>/public/downloads/</code>.</p>
    </section>
  );
}
