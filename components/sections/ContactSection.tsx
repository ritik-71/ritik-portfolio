import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { MotionDiv, MotionSection, fadeUp } from "@/components/shared/Motion";
import { siteConfig } from "@/lib/portfolio-data";

export function ContactSection() {
  return (
    <MotionSection
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="border-t border-border bg-background px-4 py-24 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.05),transparent_50%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] items-start">
        <MotionDiv variants={fadeUp} className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-400">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let's build something incredible together.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I am currently open for full-stack development, software engineering, backend,
            data-oriented, and product-focused internship or fresher opportunities where
            strong fundamentals and ownership matter.
          </p>

          <div className="mt-10 grid gap-6 text-base text-muted-foreground">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-4 transition hover:text-cyan-400"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-transform group-hover:scale-110">
                <Mail className="size-5" />
              </span>
              <span className="font-medium text-foreground group-hover:text-cyan-400 transition-colors">{siteConfig.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="group flex items-center gap-4 transition hover:text-cyan-400"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-transform group-hover:scale-110">
                <Phone className="size-5" />
              </span>
              <span className="font-medium text-foreground group-hover:text-cyan-400 transition-colors">{siteConfig.phone}</span>
            </a>
            <div className="flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <MapPin className="size-5" />
              </span>
              <span className="font-medium text-foreground">{siteConfig.location}</span>
            </div>
          </div>
        </MotionDiv>

        <MotionDiv
          variants={fadeUp}
          className="rounded-3xl border border-border bg-background/50 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/5 to-emerald-400/5 -z-10 pointer-events-none" />
          <h3 className="text-2xl font-bold text-foreground mb-8">Send a message</h3>
          <ContactForm />
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
