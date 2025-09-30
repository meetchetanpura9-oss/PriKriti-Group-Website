"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "prikriti:cookieConsent"; // "accepted" | "rejected" | null

export default function CookieBanner({ onAccept }: { onAccept?: () => void }) {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setConsent(saved);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
    if (onAccept) onAccept();
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setConsent("rejected");
  }

  if (consent) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 md:left-auto md:right-6 md:w-96">
      <div className="bg-white border rounded-xl p-4 shadow-lg flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div className="text-lg font-semibold">Cookie preferences</div>
          <div className="ml-auto text-sm text-gray-500">We use cookies to improve your experience.</div>
        </div>
        <p className="text-sm text-gray-600">By accepting you allow basic analytics and personalization. You can reject to block analytics.</p>
        <div className="flex gap-2">
          <button onClick={accept} className="px-4 py-2 rounded-full bg-brand-primary text-white">Accept</button>
          <button onClick={reject} className="px-4 py-2 rounded-full border">Reject</button>
          <button onClick={() => alert("We store minimal cookies only for site functionality.")} className="ml-auto text-sm text-gray-500">Learn more</button>
        </div>
      </div>
    </div>
  );
}
