export const metadata = { title: "Testimonials — PRIKRITI GROUP" };

const testimonials = [
  { text: "PRIKRITI GROUP has transformed our export processes – their team is proactive, timely and always available.", author: "– Happy Client" },
  { text: "Our startup was struggling with GST notices – their experts resolved everything in a week!", author: "– Startup Founder" },
  { text: "Reliable and responsive – exactly what we needed during our EPCG license journey.", author: "– Exporter" },
];

export default function Testimonials() {
  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold">Testimonials</h1>
      <div className="mt-6 space-y-4">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="border-l-4 pl-4 italic text-gray-700 bg-white p-4 rounded-lg">
            <p>{t.text}</p>
            <cite className="block mt-2 text-sm text-gray-500">{t.author}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
