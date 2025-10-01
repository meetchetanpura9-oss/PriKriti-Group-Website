
export const metadata = { title: "Industries We Serve", description: "Textiles, Pharma, Engineering, Agro, E-commerce exports and logistics." };

const industries = [
  {
    name: "Spinning",
    image: "/images/industries/textile.jpg",
  },
  {
    name: "Ceramic",
    image: "/images/industries/engineering.jpg",
  },
  {
    name: "Rubber",
    image: "/images/industries/engineering.jpg",
  },
  {
    name: "Wooven and Non Wooven",
    image: "/images/industries/textile.jpg",
  },
  {
    name: "Textile & Garments Exporters",
    image: "/images/industries/textile.jpg",
  },
  {
    name: "Pharmaceutical & Bulk Drug Manufacturers",
    image: "/images/industries/pharma.jpg",
  },
  {
    name: "Engineering Goods Suppliers",
    image: "/images/industries/engineering.jpg",
  },
  {
    name: "Agro & Food Processing Units",
    image: "/images/industries/agro.jpg",
  },
  {
    name: "E-commerce Export Startups",
    image: "/images/industries/ecommerce.jpg",
  },
  {
    name: "Logistics & Shipping Firms",
    image: "/images/industries/logistics.jpg",
  },
];

export default function Industries() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[35vh] flex items-center justify-center text-center" style={{ backgroundImage: "url('/images/industries/industries-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-4">Industries We Serve</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow">Expertise across diverse sectors for Indian business growth.</p>
        </div>
      </section>

      {/* Industries Cards Section */}
      <section className="py-16 px-4 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((ind) => (
            <div key={ind.name} className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden flex flex-col items-center">
              <img src={ind.image} alt={ind.name} className="w-full h-40 object-cover" />
              <div className="p-6 flex-1 flex flex-col items-center">
                <p className="font-semibold text-lg text-red-600 text-center">{ind.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
