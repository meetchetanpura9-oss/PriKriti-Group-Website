
export const metadata = { title: "About PRIKRITI GROUP", description: "Founded in 2007, PRIKRITI GROUP is a trusted consultancy for taxation, trade, and compliance." };

export default function About() {
  return (
    <main>
      {/* Hero Image Section */}
      <section className="relative h-[45vh] flex items-center justify-center text-center" style={{ backgroundImage: "url('/images/about-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-4">About Prikriti Group</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow">Empowering Indian businesses with expert consultancy since 2007</p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2007, PRIKRITI GROUP is a trusted consultancy firm offering professional services in taxation, international trade, and business compliance. We are committed to helping businesses of all sizes navigate India’s evolving regulatory landscape with confidence.
            </p>
            <p className="text-gray-700">
              What began as a boutique GST and licensing firm has evolved into a multi-service consultancy catering to industries ranging from manufacturing and pharma to textiles and logistics.
            </p>
          </div>
          <img src="/images/hero-4.jpg" alt="Our Team" className="w-full h-64 object-cover rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow p-8">
            <h3 className="text-xl font-semibold mb-2 text-red-600">Our Vision</h3>
            <p className="text-gray-700">To be India’s most trusted partner for compliance, licensing, and business advisory.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-8">
            <h3 className="text-xl font-semibold mb-2 text-red-600">Our Mission</h3>
            <p className="text-gray-700">To deliver accurate, timely, and tailored services that simplify business operations and empower sustainable growth.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
