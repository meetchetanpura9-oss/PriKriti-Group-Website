"use client";

import { useState } from "react";


export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setForm({ name: "", email: "", phone: "", message: "" });
      setStatus("Thanks! We will contact you soon.");
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center text-center bg-gradient-to-r from-red-600 to-red-400">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-2">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow">Reach out for expert support in GST, import-export, DGFT, and compliance.</p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white min-h-[60vh]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form onSubmit={submit} className="bg-white rounded-2xl shadow-xl p-8 space-y-5 border-t-4 border-red-600">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Send us a message</h2>
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="+91-" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 w-full rounded-lg border px-3 py-2" rows={4} placeholder="Tell us about your needs" />
            </div>
            <button type="submit" className="rounded-full bg-red-600 text-white px-5 py-2.5 hover:bg-red-700 transition">Submit</button>
            {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
          </form>

          {/* Contact Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-red-600 flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Contact Details</h2>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-red-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116 16a7.963 7.963 0 01-1.343-1.343z" /></svg>
              <span><strong>Address:</strong> 905-906-907, R K Iconic Tower-A, 150 FT Ring Road, Near Shital Park, Rajkot.</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3.6 7.59a1 1 0 00.92.41h7.16a1 1 0 00.92-.41L21 5H5m-2 0a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
              <span><strong>Phone:</strong> +91 75750 19198 | +91 75758 62625</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0V8a4 4 0 018 0v4zm-4 4v2m0 0h-2a2 2 0 01-2-2v-2a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2z" /></svg>
              <span><strong>Email:</strong> info@prikriti.in</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 4h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z" /></svg>
              <span><strong>Business Hours:</strong> Monday to Saturday, 10:00 AM – 7:00 PM</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
