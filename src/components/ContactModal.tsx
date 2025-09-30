"use client";

import { useEffect, useState } from "react";

export default function ContactModal({ apiPath = "/api/leads" }: { apiPath?: string }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  // show modal after 10 seconds only if not shown in this session
  useEffect(() => {
    const shown = sessionStorage.getItem("prikriti:contactShown");
    if (shown === "true") return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("prikriti:contactShown", "true");
    }, 10000); // 10000 ms = 10s
    return () => clearTimeout(t);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const res = await fetch(apiPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setForm({ name: "", email: "", phone: "", message: "" });
      setStatus("Thanks! We will contact you soon.");
      // auto close after success
      setTimeout(() => setOpen(false), 1400);
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold">Get in touch — PRIKRITI GROUP</h3>
            <button onClick={() => setOpen(false)} className="text-gray-600 hover:text-gray-900">✕</button>
          </div>

          <form onSubmit={submit} className="mt-4 space-y-3">
            <div>
              <label className="block text-sm">Name</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm">Email</label>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm">Phone</label>
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm">Message</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={3} className="mt-1 w-full rounded-md border px-3 py-2" />
            </div>

            <div className="flex items-center gap-3">
              <button type="submit" className="rounded-full bg-brand-primary text-white px-4 py-2">Send</button>
              <button type="button" onClick={() => setOpen(false)} className="text-sm text-gray-600">Close</button>
            </div>
            {status && <p className="text-sm text-gray-700 mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
