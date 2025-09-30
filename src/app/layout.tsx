import "./globals.css";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import ClientComponents from "@/components/ClientComponents";

export const metadata = {
  title: "PRIKRITI GROUP",
  description:
    "PRIKRITI GROUP — GST, Import-Export, DGFT, and Business Advisory",
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
        <header className="border-b">
          <nav className="mx-auto max-w-6xl p-4 flex items-center gap-6">
            <Link
              href="/"
              className="font-bold text-lg text-brand-primary"
            >
              PRIKRITI GROUP
            </Link>

            <div className="ml-auto flex gap-4 text-sm items-center">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/industries">Industries</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/team">Team</Link>
              <Link href="/resources">Resources</Link>
              <Link
                href="/contact"
                className="px-3 py-1.5 rounded-full bg-brand-primary text-white hover:bg-red-700"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {/* ===== Main Content ===== */}
        <main className="mx-auto max-w-6xl p-6 flex-1">{children}</main>

        {/* ===== Footer ===== */}
        <footer className="border-t mt-12">
          <div className="mx-auto max-w-6xl p-6 flex items-start justify-between gap-6">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()}{" "}
              <span className="text-brand-primary font-semibold">
                PRIKRITI GROUP
              </span>{" "}
              — 905-906-907, R K Iconic Tower-A, Rajkot.
            </div>
            <div className="hidden md:block">
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
