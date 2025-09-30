export const metadata = { title: "Industries We Serve", description: "Textiles, Pharma, Engineering, Agro, E-commerce exports and logistics." };

export default function Industries() {
  const industries = [
    "Textile & Garments Exporters",
    "Pharmaceutical & Bulk Drug Manufacturers",
    "Engineering Goods Suppliers",
    "Agro & Food Processing Units",
    "E-commerce Export Startups",
    "Logistics & Shipping Firms",
  ];

  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold">Industries We Serve</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {industries.map((i) => (
          <div key={i} className="p-4 border rounded-lg bg-white">
            <p className="font-medium">{i}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
