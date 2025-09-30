export const metadata = { title: "PRIKRITI GROUP — Home", description: "Empowering Indian businesses since 2007." };

export default function Home() {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/hero-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-white max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Empowering Indian Businesses Since 2007
        </h1>
        <p className="mt-4 text-lg">
          GST · Import-Export · DGFT · Compliance · Business Advisory
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/services"
            className="px-6 py-3 bg-brand-primary rounded-full text-white font-semibold hover:bg-red-700"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-white text-brand-primary rounded-full font-semibold hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
