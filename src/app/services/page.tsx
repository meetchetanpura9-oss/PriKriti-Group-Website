
export const metadata = { title: "Services — PRIKRITI GROUP", description: "GST, Import-Export Licensing, Business Setup, DGFT services and more." };

const services = [
  {
    title: "Foreign Trade & Export Promotion",
    image: "/images/services/foreign-trade.jpg", // Save your image here
    items: [
      "DGFT & Licensing Advisory",
      "Foreign Trade Policy (FTP) Support",
      "Subsidy & Incentive Structuring",
    ],
  },
  {
    title: "Indirect Taxation & Regulatory Compliance",
    image: "/images/services/indirect-tax.jpg", // Save your image here
    items: [
      "GST (Goods & Services Tax) Solutions",
      "Customs Advisory & Compliance",
    ],
  },
  {
    title: "Legal & Representation Services",
    image: "/images/services/legal.jpg", // Save your image here
    items: [
      "Litigation & Adjudication Support",
      "Authority Representation & Dispute Resolution",
    ],
  },
  {
    title: "Strategic Growth Advisory",
    image: "/images/services/strategic-growth.jpg", // Save your image here
    items: [
      "Global Strategic Business Planning",
      "Impactful Business Solutions",
    ],
  },
];

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center text-center" style={{ backgroundImage: "url('/images/services/services-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-4">Our Services</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow">Comprehensive solutions for Indian businesses, from GST to global trade.</p>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-16 px-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden flex flex-col">
              <img src={s.image} alt={s.title} className="w-full h-40 object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-semibold text-xl mb-3 text-red-600">{s.title}</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm flex-1">
                  {s.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
