// src/components/ClientComponents.tsx
"use client";

import dynamic from "next/dynamic";
import CookieBanner from "./CookieBanner";

// dynamic import ContactModal client-side only
const ContactModal = dynamic(() => import("./ContactModal"), { ssr: false });

// If SocialLinks is purely presentational it can remain server-side.
// Put any other client-only things here.
export default function ClientComponents() {
  return (
    <>
      <ContactModal />
      <CookieBanner onAccept={() => {
        // optional: example analytics loader; keep or replace
        if (typeof window !== "undefined") {
          if (!document.getElementById("prikriti-analytics")) {
            const s = document.createElement("script");
            s.id = "prikriti-analytics";
            // s.src = "https://example.com/analytics.js"; // replace as needed
            document.head.appendChild(s);
          }
        }
      }} />
    </>
  );
}
