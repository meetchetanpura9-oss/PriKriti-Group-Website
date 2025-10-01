
export const metadata = { title: "FAQ — PRIKRITI GROUP", description: "Frequently asked questions about our services." };

const faqs = [
  { q: "How long does IEC registration take?", a: "Usually 2–3 working days with proper documentation." },
  { q: "Can I get GST and Import-Export services together?", a: "Absolutely. We offer bundled compliance packages." },
  { q: "Do you offer services across India?", a: "Yes, we serve clients pan-India and NRIs as well." },
  { q: "Can PRIKRITI help with DGFT inquiries or pending licenses?", a: "Yes. We specialize in DGFT representations and follow-ups." },
];

export default function FAQ() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center text-center bg-gradient-to-r from-red-600 to-red-400">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-2">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow">Find answers to common queries about our services and processes.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white min-h-[60vh]">
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((f, i) => (
            <details key={i} className="group border-l-4 border-red-600 bg-white rounded-xl shadow-md p-6 transition-all">
              <summary className="font-semibold text-lg cursor-pointer text-gray-800 group-open:text-red-600 transition-all flex items-center">
                <span className="mr-2">Q{i + 1}.</span> {f.q}
              </summary>
              <p className="mt-3 text-gray-700 text-base leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
