"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "submitting", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setState({ status: "error", message: "Please fill in every field." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setState({ status: "error", message: "Please enter a valid email address." });
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setState({
        status: "error",
        message: "Something went wrong. Please email Ritik directly.",
      });
      return;
    }

    form.reset();
    setState({
      status: "success",
      message: "Message captured. Ritik can connect this to email delivery when ready.",
    });
  }

  const isSubmitting = state.status === "submitting";

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <div className="grid gap-2 relative group">
        <label htmlFor="name" className="text-sm font-medium text-foreground transition-colors group-focus-within:text-cyan-400">
          Name
        </label>
        <div className="relative">
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            className="h-12 border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus-visible:border-cyan-400 focus-visible:ring-1 focus-visible:ring-cyan-400/50 transition-all"
            minLength={2}
            required
          />
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-cyan-400"
            initial={{ width: 0 }}
            whileFocus={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="grid gap-2 relative group">
        <label htmlFor="email" className="text-sm font-medium text-foreground transition-colors group-focus-within:text-cyan-400">
          Email
        </label>
        <div className="relative">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="h-12 border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus-visible:border-cyan-400 focus-visible:ring-1 focus-visible:ring-cyan-400/50 transition-all"
            required
          />
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-cyan-400"
            initial={{ width: 0 }}
            whileFocus={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="grid gap-2 relative group">
        <label htmlFor="message" className="text-sm font-medium text-foreground transition-colors group-focus-within:text-cyan-400">
          Message
        </label>
        <div className="relative">
          <Textarea
            id="message"
            name="message"
            placeholder="Tell Ritik about the role, project, or opportunity."
            className="min-h-[140px] resize-none border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus-visible:border-cyan-400 focus-visible:ring-1 focus-visible:ring-cyan-400/50 transition-all"
            minLength={10}
            required
          />
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-cyan-400"
            initial={{ width: 0 }}
            whileFocus={{ width: "100%" }}
          />
        </div>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="group relative h-12 w-full gap-2 overflow-hidden rounded-xl bg-foreground text-background transition-all shadow-lg hover:shadow-cyan-400/25 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
      >
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
        <AnimatePresence mode="wait">
          {isSubmitting ? (
            <motion.div
              key="submitting"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Loader2 className="animate-spin size-5" />
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2"
            >
              <Send className="size-5" />
              <span>Send message</span>
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
      {state.message && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm font-medium text-center ${
            state.status === "success"
              ? "text-emerald-400"
              : "text-rose-400"
          }`}
        >
          {state.message}
        </motion.p>
      )}
    </form>
  );
}
