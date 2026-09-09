import Link from "next/link";
import {
  Activity,
  CalendarDays,
  CircleParking,
  Footprints,
  Landmark,
  Sparkles,
} from "lucide-react";

const deskModules = [
  { title: "Visitors", detail: "Today’s arrivals and guest history", icon: Footprints },
  { title: "Bookings", detail: "Upcoming visits and balances", icon: CalendarDays },
  { title: "Walk-ins", detail: "Record a visit at the gate", icon: CircleParking },
  { title: "Park Status", detail: "Open or closed today", icon: Landmark },
  { title: "Attractions", detail: "Manage availability", icon: Sparkles },
  { title: "Activity", detail: "See today’s operations", icon: Activity },
];

export default function StaffDeskPage() {
  return (
    <section className="page-shell">
      <div className="container">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Owner & staff</p>
          <h1>Today’s operations, in one calm place.</h1>
          <p className="lead mt-4">
            The Staff Desk foundation is ready. Operational records and live park
            controls are intentionally coming in the next build phase.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deskModules.map(({ title, detail, icon: Icon }) => (
            <article key={title} className="card p-5">
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand-tint)] text-[var(--brand-primary)]">
                <Icon size={21} />
              </span>
              <h2 className="text-xl">{title}</h2>
              <p className="mt-2 text-sm leading-6">{detail}</p>
              <span className="mt-5 inline-flex rounded-full bg-[var(--surface-2)] px-3 py-1 text-xs font-bold text-[var(--text-muted)]">
                Coming next
              </span>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-5 text-sm text-[var(--text-secondary)]">
          Need the public-facing view? <Link href="/" className="font-bold text-[var(--brand-primary)]">Open Visitor View</Link>.
        </div>
      </div>
    </section>
  );
}
