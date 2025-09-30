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
    <section className="py-8 max-w-2xl">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-2 text-gray-600">Reach out for expert support in GST, import-export, DGFT and compliance.</p>

      <form onSubmit={submit} className="mt-6 space-y-4">
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

        <button type="submit" className="rounded-full bg-brand-primary text-white px-5 py-2.5">Submit</button>
        {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
      </form>

      <div className="mt-8 text-sm text-gray-700">
        <p><strong>Address:</strong> 905-906-907, R K Iconic Tower-A, 150 FT Ring Road, Near Shital Park, Rajkot.</p>
        <p><strong>Phone:</strong> +91 75750 19198 | +91 75758 62625</p>
        <p><strong>Email:</strong> info@prikriti.in</p>
        <p><strong>Business Hours:</strong> Monday to Saturday, 10:00 AM – 7:00 PM</p>
      </div>
    </section>
  );
}
