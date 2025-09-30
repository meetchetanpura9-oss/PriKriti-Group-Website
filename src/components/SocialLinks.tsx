import Link from "next/link";

export default function SocialLinks({ compact = false }: { compact?: boolean }) {
  // replace with your real profile URLs
  const profiles = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/prikriti-group" },
    { name: "Twitter", href: "https://twitter.com/prikriti" },
    { name: "Instagram", href: "https://instagram.com/prikriti" },
  ];

  return (
    <div className={`${compact ? "flex gap-3" : "flex flex-col gap-2"}`}>
      {profiles.map((p) => (
        <Link key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-brand-primary">
          {p.name}
        </Link>
      ))}
    </div>
  );
}
