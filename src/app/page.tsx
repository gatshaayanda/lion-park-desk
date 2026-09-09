import Link from "next/link";
import { ArrowRight, Building2, CalendarDays, Eye, ShieldCheck } from "lucide-react";

const features = [
  "Daily visitor and booking operations",
  "Walk-in and regular customer records",
  "Activity and attraction status",
  "One shared operational source of truth",
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="page-shell relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 panel-grid opacity-60" />

        <div className="container relative flex min-h-[78vh] items-center py-16">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-soft)] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
              <Building2 size={15} />
              Lion Park Resort
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="eyebrow">Lion Park Desk</p>
                <h1 className="mt-4 max-w-[12ch]">One simple desk for the park.</h1>
                <p className="lead mt-5 max-w-[60ch]">
                  A focused operations app for staff, with a separate visitor view.
                  Both experiences will use the same live park information so the
                  team can manage what visitors see.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div key={feature} className="card-outline-gold">
                      <div className="card-inner flex items-start gap-3">
                        <ShieldCheck size={18} className="mt-0.5 shrink-0 text-[var(--brand-primary)]" />
                        <p className="text-sm font-semibold text-[var(--text-secondary)]">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-elevated p-5 md:p-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--brand-primary)]">
                  Choose your view
                </p>

                <div className="mt-5 grid gap-4">
                  <Link href="/staff" className="frame-gold group block p-5 transition-transform hover:-translate-y-0.5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <CalendarDays size={20} className="text-[var(--brand-primary)]" />
                          <h2 className="text-xl">Staff Desk</h2>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                          Internal control room for today&apos;s visitors, bookings,
                          customers and park operations.
                        </p>
                      </div>
                      <ArrowRight size={20} className="mt-1 shrink-0 text-[var(--brand-primary)] transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>

                  <Link href="/visitor" className="card-outline-gold group block p-5 transition-transform hover:-translate-y-0.5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <Eye size={20} className="text-[var(--brand-primary)]" />
                          <h2 className="text-xl">Visitor View</h2>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                          Public-facing view for opening status, available activities,
                          booking information and contact details.
                        </p>
                      </div>
                      <ArrowRight size={20} className="mt-1 shrink-0 text-[var(--brand-primary)] transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>

                <p className="mt-5 text-xs leading-5 text-[var(--text-muted)]">
                  Phase 2A establishes the application boundary. Firebase data,
                  authentication and operational CRUD come in later phases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
