import "./globals.css";

import Link from "next/link";

import SocialLinks from "@/components/SocialLinks";
import ClientComponents from "@/components/ClientComponents";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "PRIKRITI GROUP",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased min-h-screen flex flex-col">
        {/* ===== Header / Navbar ===== */}
        <Navbar />

        {/* ===== Main Content ===== */}
        <main className="mx-auto max-w-6xl p-4 sm:p-6 flex-1 w-full">{children}</main>

        {/* ===== Footer ===== */}
        <footer className="border-t mt-12 bg-gradient-to-r from-red-50 to-white">
          <div className="mx-auto max-w-6xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            {/* Brand & Copyright */}
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-bold text-red-700 tracking-wide">PRIKRITI GROUP</span>
              <span className="text-gray-500">Empowering Indian Businesses Since 2007</span>
              <span className="text-gray-400 mt-2">© {new Date().getFullYear()} PRIKRITI GROUP</span>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-1 mt-6 md:mt-0">
              <span className="font-semibold text-gray-700 mb-1">Quick Links</span>
              <Link href="/about" className="hover:text-red-600">About</Link>
              <Link href="/services" className="hover:text-red-600">Services</Link>
              <Link href="/industries" className="hover:text-red-600">Industries</Link>
              <Link href="/case-studies" className="hover:text-red-600">Case Studies</Link>
              <Link href="/faq" className="hover:text-red-600">FAQ</Link>
              <Link href="/team" className="hover:text-red-600">Team</Link>
              <Link href="/resources" className="hover:text-red-600">Resources</Link>
              <Link href="/contact" className="hover:text-red-600">Contact</Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 mt-6 md:mt-0">
              <span className="font-semibold text-gray-700 mb-1">Contact</span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0V8a4 4 0 018 0v4zm-4 4v2m0 0h-2a2 2 0 01-2-2v-2a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2z" /></svg>
                <span>+91 75750 19198 | +91 75758 62625</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116 16a7.963 7.963 0 01-1.343-1.343z" /></svg>
                <span>info@prikriti.in</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-2 mt-6 md:mt-0">
              <span className="font-semibold text-gray-700 mb-1">Follow Us</span>
              <SocialLinks />
            </div>
          </div>
        </footer>

        {/* ===== Client-only features (auto contact modal + cookie banner) ===== */}
        <ClientComponents />
      </body>
    </html>
  );
}
