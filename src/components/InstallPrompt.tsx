"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    const onAppInstalled = () => {
      setInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  if (installed || dismissed || !deferredPrompt) return null;

  async function handleInstall() {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;

    if (choice.outcome === "accepted") {
      setDeferredPrompt(null);
    }
  }

  return (
    <div className="fixed bottom-24 right-6 z-40 max-w-[320px] overflow-hidden rounded-[1.25rem] border border-white/25 bg-[#11110f] p-4 text-white shadow-[var(--shadow-lg)]">
      <div className="pointer-events-none absolute inset-0 panel-grid opacity-10" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[rgba(244,196,0,0.12)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-[rgba(0,169,216,0.08)] blur-2xl" />

      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-extrabold text-white">
            Install Lion Park Desk
          </p>
          <p className="mt-1 text-sm leading-6 text-white">
            Add Lion Park Desk to your device for quicker access to park
            information and staff operations.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20 hover:text-white"
          aria-label="Dismiss install prompt"
        >
          <X size={16} />
        </button>
      </div>

      <div className="relative mt-4">
        <button
          type="button"
          onClick={handleInstall}
          className="btn btn-primary w-full"
        >
          <Download size={18} />
          Install PWA
        </button>
      </div>

      <p className="relative mt-3 text-xs leading-5 text-white/75">
        Saved pages may be available offline, but fresh park updates still
        require an internet connection.
      </p>
    </div>
  );
}
