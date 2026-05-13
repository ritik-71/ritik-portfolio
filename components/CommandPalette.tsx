"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import {
  Briefcase,
  Code2,
  FileText,
  Home,
  Mail,
  Moon,
  Search,
  Sun,
  User,
} from "lucide-react";
import { navItems, siteConfig } from "@/lib/portfolio-data";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] sm:pt-[20vh]">
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <Command
        className="relative z-[101] flex w-full max-w-[640px] flex-col overflow-hidden rounded-xl border border-white/10 bg-slate-950/90 shadow-2xl backdrop-blur-xl sm:w-[90%]"
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
      >
        <div className="flex items-center border-b border-white/10 px-4">
          <Search className="mr-2 h-5 w-5 text-white/40" />
          <Command.Input
            autoFocus
            placeholder="Type a command or search..."
            className="flex h-14 w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
          />
          <kbd className="hidden rounded border border-white/20 bg-white/10 px-2 py-0.5 text-xs font-light text-white/60 sm:block">
            ESC
          </kbd>
        </div>

        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-white/40">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigation" className="text-xs font-medium text-white/40 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5">
            {navItems.map((item) => (
              <Command.Item
                key={item.href}
                onSelect={() => runCommand(() => router.push(item.href))}
                className="flex cursor-pointer items-center rounded-md px-2 py-2.5 text-sm text-white/80 transition hover:bg-white/10 aria-selected:bg-white/10 aria-selected:text-white"
              >
                {item.label === "Home" && <Home className="mr-2 h-4 w-4" />}
                {item.label === "About" && <User className="mr-2 h-4 w-4" />}
                {item.label === "Projects" && <Code2 className="mr-2 h-4 w-4" />}
                {item.label === "Experience" && <Briefcase className="mr-2 h-4 w-4" />}
                {item.label === "Contact" && <Mail className="mr-2 h-4 w-4" />}
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Actions" className="text-xs font-medium text-white/40 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5">
            <Command.Item
              onSelect={() => runCommand(() => window.open(siteConfig.resume, "_blank"))}
              className="flex cursor-pointer items-center rounded-md px-2 py-2.5 text-sm text-white/80 transition hover:bg-white/10 aria-selected:bg-white/10 aria-selected:text-white"
            >
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => setTheme("light"))}
              className="flex cursor-pointer items-center rounded-md px-2 py-2.5 text-sm text-white/80 transition hover:bg-white/10 aria-selected:bg-white/10 aria-selected:text-white dark:hidden"
            >
              <Sun className="mr-2 h-4 w-4" />
              Light Theme
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => setTheme("dark"))}
              className="hidden cursor-pointer items-center rounded-md px-2 py-2.5 text-sm text-white/80 transition hover:bg-white/10 aria-selected:bg-white/10 aria-selected:text-white dark:flex"
            >
              <Moon className="mr-2 h-4 w-4" />
              Dark Theme
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
