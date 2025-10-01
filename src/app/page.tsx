
export const metadata = { title: "PRIKRITI GROUP — Home", description: "Empowering Indian businesses since 2007." };



import BackgroundSlider from "@/components/BackgroundSlider";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <main>
      {/* Live Animated Background Hero Section */}
  <section className="relative h-[70vh] md:h-[90vh] w-screen min-h-[400px] md:min-h-[600px] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none flex items-center justify-center">
        <BackgroundSlider
          images={["/images/hero-2.jpg", "/images/hero-3.jpg", "/images/hero-4.jpg", "/images/hero%20banner.jpg"]}
          interval={6000}
          transitionMs={1200}
          overlay={
            <>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg text-white break-words">
                <Typewriter
                  words={["Empowering Indian Businesses Since 2007", "Your Trusted GST & Compliance Partner", "Expert Guidance for Growth", "Simplifying Import-Export & DGFT"]}
                  typingSpeed={70}
                  pauseTime={1800}
                  className="inline"
                />
              </h1>
              <p className="mt-4 text-base xs:text-lg text-white/90">
                GST · Import-Export · DGFT · Compliance · Business Advisory
              </p>
              <div className="mt-6 flex flex-col xs:flex-row justify-center gap-4 w-full max-w-xs mx-auto">
                <a
                  href="/services"
                  className="px-6 py-3 bg-red-600 rounded-full text-white font-semibold hover:bg-red-700 transition text-center"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 bg-white text-red-600 rounded-full font-semibold hover:bg-red-700 hover:text-white transition text-center"
                >
                  Contact Us
                </a>
              </div>
            </>
          }
        />
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">About Prikriti Group</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Prikriti Group has been a trusted partner for Indian businesses since 2007, providing expert guidance in GST, import-export, DGFT, compliance, and business advisory. Our mission is to empower your growth with reliable, professional services.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-2 sm:px-4 bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-100 rounded-lg p-4 sm:p-6 shadow hover:shadow-lg transition flex flex-col items-center">
            <img src="/images/services/gst.jpg.webp" alt="GST" className="w-full h-32 sm:h-40 object-cover rounded mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">GST Solutions</h3>
            <p className="text-gray-600 text-center">Comprehensive GST registration, filing, and advisory services for businesses of all sizes.</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 sm:p-6 shadow hover:shadow-lg transition flex flex-col items-center">
            <img src="/images/hero-2.jpg" alt="Import Export" className="w-full h-32 sm:h-40 object-cover rounded mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Import-Export</h3>
            <p className="text-gray-600 text-center">Expert support for import-export licensing, documentation, and compliance with DGFT regulations.</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 sm:p-6 shadow hover:shadow-lg transition flex flex-col items-center">
            <img src="/images/hero-3.jpg" alt="Business Advisory" className="w-full h-32 sm:h-40 object-cover rounded mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Business Advisory</h3>
            <p className="text-gray-600 text-center">Strategic business consulting to help you grow, stay compliant, and succeed in a competitive market.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 bg-red-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="mb-8 text-lg">Contact our experts today for a free consultation and discover how we can help you achieve your goals.</p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-red-600 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}