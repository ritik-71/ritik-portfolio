import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ritik Kumar Singh for internships, placements, and full-stack software engineering opportunities.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_36%),#020617] pt-16">
      <ContactSection />
    </div>
  );
}
