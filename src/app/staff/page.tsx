import Link from "next/link";
import { ArrowLeft, CalendarDays, ClipboardList, Users, Waves } from "lucide-react";

const modules = [
  { title: "Today", description: "See the day at a glance: expected visitors, bookings and operational status.", icon: CalendarDays },
  { title: "Visitors", description: "Manage walk-ins and regular customer records without losing history.", icon: Users },
  { title: "Bookings", description: "Capture reservations, deposits, balances and booking notes.", icon: ClipboardList },
  { title: "Park status", description: "Keep attractions and activities visibly open, closed or unavailable.", icon: Waves },
];

export default function StaffPage() {
  return (
    <main className="min-h-screen">
      <section className="page-shell">
        <div className="container py-12 md:py-16">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--brand-primary)]">
            <ArrowLeft size={16} /> Back to Lion Park Desk
          </Link>

          <div className="max-w-3xl">
            <p className="eyebrow">Internal workspace</p>
            <h1 className="mt-4">Staff Desk</h1>
            <p className="lead mt-4">
              The operational control room for the park team. This shell is intentionally
              simple now; the live Firebase-backed modules will be added in later phases.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {modules.map(({ title, description, icon: Icon }) => (
              <div key={title} className="card-elevated p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl border border-[var(--border-strong)] bg-[var(--brand-tint)] p-2 text-[var(--brand-primary)]">
                    <Icon size={20} />
                  </span>
                  <h2 className="text-xl">{title}</h2>
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
                <span className="mt-5 inline-flex rounded-full border border-[var(--border)] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  Phase 2 shell
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
