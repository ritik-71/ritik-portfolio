"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/shared/Magnetic";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Magnetic>
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative grid size-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-transform group-hover:scale-105">
                RK
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10" />
              </div>
              <span className="hidden text-sm font-bold tracking-tight text-foreground sm:inline group-hover:text-cyan-400 transition-colors">
                {siteConfig.name}
              </span>
            </Link>
          </Magnetic>

          <div className="hidden items-center gap-1 rounded-full border border-border bg-background/50 p-1.5 shadow-sm backdrop-blur-md md:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Magnetic key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium transition-all",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-bg"
                        className="absolute inset-0 rounded-full bg-accent shadow-[0_0_10px_rgba(34,211,238,0.1)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </Magnetic>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="hidden h-9 bg-foreground text-background hover:bg-cyan-400 hover:text-slate-950 transition-colors shadow-sm sm:inline-flex rounded-full px-5"
            >
              <a href={siteConfig.resume} download>
                Resume
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:bg-accent hover:text-cyan-400 md:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background/95 p-4 backdrop-blur-xl md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-cyan-400/10 text-cyan-400"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button
                asChild
                className="mt-2 w-full bg-foreground text-background hover:bg-cyan-400 hover:text-slate-950 rounded-xl"
              >
                <a href={siteConfig.resume} download onClick={() => setMobileMenuOpen(false)}>
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
