export const metadata = { title: "FAQ — PRIKRITI GROUP", description: "Frequently asked questions about our services." };

export default function FAQ() {
  const faqs = [
    { q: "How long does IEC registration take?", a: "Usually 2–3 working days with proper documentation." },
    { q: "Can I get GST and Import-Export services together?", a: "Absolutely. We offer bundled compliance packages." },
    { q: "Do you offer services across India?", a: "Yes, we serve clients pan-India and NRIs as well." },
    { q: "Can PRIKRITI help with DGFT inquiries or pending licenses?", a: "Yes. We specialize in DGFT representations and follow-ups." },
  ];

  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <div className="mt-6 space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
