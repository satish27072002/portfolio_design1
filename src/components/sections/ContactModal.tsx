"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Server, CheckCircle, Loader2, ArrowLeft } from "lucide-react";

type Mode = "choose" | "connect" | "vm" | "success-connect" | "success-vm";

interface ContactModalProps {
  children: React.ReactNode;
}

export default function ContactModal({ children }: ContactModalProps) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("choose");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const reset = () => {
    setMode("choose");
    setName("");
    setContact("");
    setMessage("");
    setLoading(false);
    setError("");
  };

  const sendNotification = async (type: "connect" | "vm") => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, name, contact, message }),
      });
      if (!res.ok) throw new Error("Failed");
      setMode(type === "connect" ? "success-connect" : "success-vm");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setTimeout(reset, 200); // reset after close animation
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-md">
        {/* ── CHOOSE SCREEN ── */}
        {mode === "choose" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">How can I help?</DialogTitle>
              <p className="text-sm text-muted-foreground">
                Pick one — I&apos;ll get a notification instantly.
              </p>
            </DialogHeader>

            <div className="grid grid-cols-1 gap-3 mt-2">
              <button
                onClick={() => setMode("connect")}
                className="group flex items-start gap-4 rounded-lg border border-border p-4
                           text-left transition-all duration-200
                           hover:border-[#A93F55]/50 hover:bg-[#A93F55]/5"
              >
                <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center
                                rounded-md bg-[#A93F55]/10 text-[#A93F55] group-hover:bg-[#A93F55]/20">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Let&apos;s connect</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Leave your name and how to reach you — I&apos;ll follow up.
                  </p>
                </div>
              </button>

              <button
                onClick={() => setMode("vm")}
                className="group flex items-start gap-4 rounded-lg border border-border p-4
                           text-left transition-all duration-200
                           hover:border-red-400/50 hover:bg-red-50/50 dark:hover:bg-red-900/10"
              >
                <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center
                                rounded-md bg-red-100 text-red-500 dark:bg-red-900/30 group-hover:bg-red-200/80 dark:group-hover:bg-red-900/50">
                  <Server className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Your VM is off</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Ping me to wake up my dev environment.
                  </p>
                </div>
              </button>
            </div>
          </>
        )}

        {/* ── CONNECT FORM ── */}
        {mode === "connect" && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMode("choose")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Back"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <DialogTitle>Let&apos;s connect</DialogTitle>
              </div>
              <p className="text-sm text-muted-foreground">
                Drop your details — I&apos;ll get a ping and reach out.
              </p>
            </DialogHeader>

            <div className="flex flex-col gap-4 mt-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Your name</Label>
                <Input
                  id="name"
                  placeholder="e.g. Alex Chen"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="contact">How to reach you</Label>
                <Input
                  id="contact"
                  placeholder="email, phone, LinkedIn URL…"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">
                  Message{" "}
                  <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="What's on your mind?"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="resize-none"
                />
              </div>

              {error && <p className="text-xs text-red-500">{error}</p>}

              <Button
                onClick={() => sendNotification("connect")}
                disabled={loading || !name.trim() || !contact.trim()}
                className="bg-[#A93F55] hover:bg-[#8f3447] text-white w-full"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <MessageSquare className="h-4 w-4 mr-2" />
                )}
                {loading ? "Sending…" : "Send message"}
              </Button>
            </div>
          </>
        )}

        {/* ── VM SCREEN ── */}
        {mode === "vm" && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMode("choose")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Back"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <DialogTitle>Wake up the VM</DialogTitle>
              </div>
              <p className="text-sm text-muted-foreground">
                This sends me an instant notification that my dev environment
                is down. I&apos;ll get it back up shortly.
              </p>
            </DialogHeader>

            {error && <p className="text-xs text-red-500 mt-2">{error}</p>}

            <Button
              onClick={() => sendNotification("vm")}
              disabled={loading}
              className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Server className="h-4 w-4 mr-2" />
              )}
              {loading ? "Sending alert…" : "🔴 Send VM alert"}
            </Button>
          </>
        )}

        {/* ── SUCCESS — CONNECT ── */}
        {mode === "success-connect" && (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle className="h-12 w-12 text-[#A93F55]" />
            <h3 className="text-lg font-semibold">Got it!</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              I received your message and will reach out to{" "}
              <span className="text-foreground font-medium">{contact}</span> soon.
            </p>
            <Button variant="outline" onClick={() => setOpen(false)} className="mt-2">
              Close
            </Button>
          </div>
        )}

        {/* ── SUCCESS — VM ── */}
        {mode === "success-vm" && (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle className="h-12 w-12 text-green-500" />
            <h3 className="text-lg font-semibold">Alert sent!</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              I&apos;ve been notified. I&apos;ll get the VM back online shortly — check back in a few minutes.
            </p>
            <div className="flex gap-2 mt-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
              <Button
                onClick={() => setMode("connect")}
                className="bg-[#A93F55] hover:bg-[#8f3447] text-white"
              >
                Let&apos;s connect
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
