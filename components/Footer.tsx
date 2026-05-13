import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { navItems, siteConfig } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 text-xs font-bold text-slate-950 shadow-sm">
              RK
            </span>
            <p className="font-bold text-foreground">{siteConfig.name}</p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            B.Tech CSE student focused on React, Java, REST APIs, SQL databases,
            and recruiter-ready full-stack engineering work.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:items-end">
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
            {navItems.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-cyan-400">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
            {siteConfig.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1 transition-colors hover:text-cyan-400"
              >
                {social.label}
                <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/50 bg-background/50 px-4 py-6 text-center text-xs font-medium text-muted-foreground/60">
        © {new Date().getFullYear()} {siteConfig.name}. Designed with precision.
      </div>
    </footer>
  );
}
