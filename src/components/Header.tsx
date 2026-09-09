import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";

const navigation = [
  { href: "/attractions", label: "Attractions" },
  { href: "/activities", label: "Activities" },
  { href: "/plan-your-visit", label: "Plan Your Visit" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact" },
];

export default function LionParkHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="container flex min-h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label="Lion Park Resort home"
        >
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#111111] text-[#ffd000] shadow-sm transition group-hover:-translate-y-0.5">
            <span className="font-display text-lg font-black">LP</span>
          </span>

          <span>
            <span className="block font-display text-base font-black uppercase tracking-[-0.03em] text-[#111111]">
              Lion Park
            </span>
            <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#e0a400]">
              Resort
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-bold text-[#303630] hover:bg-[#f5f2e9] hover:text-[#111111]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/desk"
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold text-[var(--text-muted)] hover:bg-[#f5f2e9] hover:text-[#111111] sm:inline-flex"
          >
            Staff Login
            <ArrowRight size={14} />
          </Link>

          <button
            type="button"
            aria-label="Open navigation menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-[#111111] lg:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}