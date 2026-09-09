import Link from "next/link";
import { ArrowLeft, CalendarCheck, Clock3, MapPin, Waves } from "lucide-react";

const visitorCards = [
  { title: "Open today", description: "Park opening status will be driven by the shared operations data.", icon: Clock3 },
  { title: "Activities", description: "Visitors will see which attractions and activities are available today.", icon: Waves },
  { title: "Booking", description: "Booking information will guide visitors toward the right reservation path.", icon: CalendarCheck },
  { title: "Find us", description: "Park contact and location information will live in this public experience.", icon: MapPin },
];

export default function VisitorPage() {
  return (
    <main className="min-h-screen">
      <section className="page-shell">
        <div className="container py-12 md:py-16">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--brand-primary)]">
            <ArrowLeft size={16} /> Back to Lion Park Desk
          </Link>

          <div className="max-w-3xl">
            <p className="eyebrow">Public experience</p>
            <h1 className="mt-4">Visitor View</h1>
            <p className="lead mt-4">
              A clean public window into what is happening at Lion Park. Staff will
              eventually update the underlying park state once, and visitors will see it here.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {visitorCards.map(({ title, description, icon: Icon }) => (
              <div key={title} className="card-outline-gold p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl border border-[var(--border-strong)] bg-[var(--brand-tint)] p-2 text-[var(--brand-primary)]">
                    <Icon size={20} />
                  </span>
                  <h2 className="text-xl">{title}</h2>
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
              </div>
            ))}
          </div>

          <div className="frame-gold mt-8 max-w-3xl p-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--brand-primary)]">Shared state</p>
            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
              Example: staff marks the Water Park as CLOSED → Firebase stores the change →
              the visitor experience displays Water Park — CLOSED.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
