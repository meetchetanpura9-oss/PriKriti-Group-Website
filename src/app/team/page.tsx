
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
    <main>
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center text-center bg-gradient-to-r from-red-600 to-red-400">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-2">Meet Our Team</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow">The people behind our success and your growth.</p>
        </div>
      </section>

      {/* Team Video Section */}
      <section className="py-10 px-4 bg-white flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Meet Our Team in Action</h2>
        <div className="w-full flex justify-center">
          <video
            src="/videos/team.mp4"
            controls
            poster="/images/team/krishna.jpg"
            className="w-full max-w-2xl rounded-xl shadow-lg border mb-8 object-cover aspect-video max-h-[320px] sm:max-h-[400px] md:max-h-[480px]"
            style={{ background: '#000' }}
          >
            Sorry, your browser does not support embedded videos.
          </video>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white min-h-[60vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((m) => (
            <div key={m.name} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition p-8 flex flex-col items-center border-t-4 border-red-600">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-200 shadow mb-4">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-1">{m.name}</h3>
              <p className="text-red-600 font-medium mb-2">{m.role}</p>
              <p className="text-gray-700 text-center text-base">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
