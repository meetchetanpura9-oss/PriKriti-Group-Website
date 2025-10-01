"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "prikriti:cookieConsent"; // "accepted" | "rejected" | null

export default function CookieBanner({ onAccept }: { onAccept?: () => void }) {
  const [consent, setConsent] = useState<string | null>(null);


  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setConsent(saved);
    // Removed any auto-close logic. Banner will only close on user action.
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

  function close() {
    setConsent("closed");
  }


  if (consent === "accepted" || consent === "rejected" || consent === "closed") return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 md:left-auto md:right-6 md:w-96">
      <div className="bg-white border rounded-xl p-4 shadow-lg flex flex-col gap-3 relative">
        <button
          onClick={close}
          aria-label="Close cookie banner"
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl font-bold px-2"
        >
          ×
        </button>
        <div className="flex items-center gap-3">
          <div className="text-lg font-semibold">For better performance, accept cookies?</div>
        </div>
        <p className="text-sm text-gray-600">We use cookies to improve your experience. By accepting, you allow basic analytics and personalization. You can reject to block analytics.</p>
        <hr className="my-2" />
        <div className="flex gap-2 justify-between items-center">
          <button onClick={accept} className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition">Accept Cookies</button>
          <button onClick={reject} className="px-4 py-2 rounded-full border border-red-600 text-red-600 hover:bg-red-50 transition">Reject Cookies</button>
        </div>
      </div>
    </div>
  );
}
