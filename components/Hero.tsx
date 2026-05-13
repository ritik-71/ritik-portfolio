"use client";

import { useEffect, useState } from "react";
import { ArrowDown, BriefcaseBusiness, Download, GitBranch, Rocket } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { MotionDiv, MotionSection } from "@/components/shared/Motion";
import { Button } from "@/components/ui/button";
import { siteConfig, stats } from "@/lib/portfolio-data";
import { useScrambleText } from "@/hooks/useScrambleText";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const firstName = siteConfig.name.split(" ")[0];
  const { displayText: scrambledName } = useScrambleText(firstName);

  // Smooth out the mouse values for the gradient background
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Map motion values to a string for the CSS variable
  const backgroundStyle = {
    "--x": useTransform(smoothMouseX, (v) => `${v}px`),
    "--y": useTransform(smoothMouseY, (v) => `${v}px`),
  } as React.CSSProperties;

  useEffect(() => {
    // Initial center position
    mouseX.set(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
    mouseY.set(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <MotionSection
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      className="relative min-h-screen overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 flex items-center"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 bg-background">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(52,211,153,0.1),transparent_30%),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8))]"
          style={backgroundStyle}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center">
          <MotionDiv
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-md"
          >
            <Rocket className="size-4 animate-pulse" />
            <span>Available for Opportunities</span>
          </MotionDiv>

          <MotionDiv
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-[5rem] lg:leading-[1.1]">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 dark:from-white dark:to-slate-400">
                Hi, I&apos;m {scrambledName}.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                {siteConfig.title.split(" | ")[0]}
              </span>
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {siteConfig.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["LPU CSE 2022-2026", "NIC Rajya Sabha Intern", "Vinculum Group Intern"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:border-cyan-400/30 hover:text-foreground"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </MotionDiv>

          <MotionDiv
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="h-14 gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 text-base shadow-xl dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300 transition-transform hover:scale-105">
              <a href="#projects">
                View My Work
                <ArrowDown className="size-4 animate-bounce" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 gap-2 rounded-full border-border bg-background/50 px-8 text-base backdrop-blur-md hover:bg-accent transition-transform hover:scale-105"
            >
              <a href={siteConfig.resume} download>
                Download Resume
                <Download className="size-4" />
              </a>
            </Button>
          </MotionDiv>

          <MotionDiv
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-4"
          >
            <Button asChild size="icon" variant="ghost" className="size-12 rounded-full border border-border bg-background/50 hover:bg-accent hover:text-cyan-400 transition-transform hover:scale-110">
              <a href={siteConfig.socials[0].href} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitBranch className="size-5" />
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost" className="size-12 rounded-full border border-border bg-background/50 hover:bg-accent hover:text-cyan-400 transition-transform hover:scale-110">
              <a href={siteConfig.socials[1].href} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <BriefcaseBusiness className="size-5" />
              </a>
            </Button>
            <span className="text-sm font-medium text-muted-foreground ml-2">Press <kbd className="rounded bg-accent px-2 py-1 text-xs font-sans shadow-sm border border-border">Ctrl</kbd> + <kbd className="rounded bg-accent px-2 py-1 text-xs font-sans shadow-sm border border-border">K</kbd> for command menu</span>
          </MotionDiv>
        </div>

        <MotionDiv
          variants={{ hidden: { opacity: 0, scale: 0.9, rotateX: 10 }, visible: { opacity: 1, scale: 1, rotateX: 0 } }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          style={{ perspective: 1000 }}
          className="relative hidden lg:block"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-2 shadow-2xl shadow-cyan-900/20 backdrop-blur-xl transition-transform hover:scale-[1.02]"
          >
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            <div className="rounded-xl border border-white/10 bg-slate-950/90 p-6 shadow-inner">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="size-3 rounded-full bg-rose-500/80 shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
                <span className="size-3 rounded-full bg-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                <span className="size-3 rounded-full bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <span className="ml-auto font-mono text-xs text-slate-400">
                  developer.json
                </span>
              </div>
              <div className="mt-6 space-y-4 font-mono text-sm leading-relaxed">
                <p className="text-slate-400">
                  <span className="text-pink-400">const</span> developer = {"{"}
                </p>
                <div className="pl-6 space-y-2">
                  <p className="text-slate-300">
                    <span className="text-cyan-300">name</span>: <span className="text-emerald-300">&quot;{siteConfig.name}&quot;</span>,
                  </p>
                  <p className="text-slate-300">
                    <span className="text-cyan-300">role</span>: <span className="text-emerald-300">&quot;Software Engineer&quot;</span>,
                  </p>
                  <p className="text-slate-300">
                    <span className="text-cyan-300">skills</span>: [
                    <span className="text-emerald-300">&quot;Next.js&quot;</span>, <span className="text-emerald-300">&quot;React&quot;</span>, <span className="text-emerald-300">&quot;Java&quot;</span>, <span className="text-emerald-300">&quot;Spring Boot&quot;</span>
                    ],
                  </p>
                  <p className="text-slate-300">
                    <span className="text-cyan-300">passion</span>: <span className="text-emerald-300">&quot;Building scalable user-centric products&quot;</span>
                  </p>
                </div>
                <p className="text-slate-400">{"}"}</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                className="group flex flex-col items-center justify-center rounded-xl border border-border bg-background/50 p-4 backdrop-blur-md transition-all hover:border-cyan-400/50 hover:bg-accent"
              >
                <span className="block text-2xl font-bold text-foreground group-hover:text-cyan-400 transition-colors">{stat.value}</span>
                <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
