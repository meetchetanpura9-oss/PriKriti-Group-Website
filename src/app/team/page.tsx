export const metadata = { title: "Our Team — PRIKRITI GROUP" };

const team = [
  
  {
    name: "Mrs. Bansari Manek",
    role: "Founder Partner",
    bio: "Strategic leader shaping growth strategy and client relationships since 2007.",
    img: "/images/team/krishna.jpg",
  },
  {
    name: "Mr. Nikunj Nathwani",
    role: "Associate Partner",
    bio: "Expert in regulatory compliance and DGFT matters.",
    img: "/images/team/nikunj.jpg",
  },
  {
    name: "Mr. Vijay Makwana",
    role: "Associate Partner",
    bio: "Leads client relations & operations ensuring smooth deliveries.",
    img: "/images/team/vijay.jpg",
  },
];

export default function TeamPage() {
  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold">Our Team</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m) => (
          <div key={m.name} className="border rounded-xl p-4 text-center bg-white">
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden bg-gray-100">
              <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="mt-3 font-semibold">{m.name}</h3>
            <p className="text-sm text-gray-600">{m.role}</p>
            <p className="mt-2 text-sm text-gray-700">{m.bio}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-500">You can add photos at <code>/public/images/team/</code> with the filenames shown above.</p>
    </section>
  );
}
