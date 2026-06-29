"use client";

import Link from "next/link";
import { useState } from "react";

const BRAND = "oklch(0.65 0.2 255)";

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Argentina",
  "Australia",
  "Austria",
  "Bangladesh",
  "Belgium",
  "Brazil",
  "Bulgaria",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Croatia",
  "Czech Republic",
  "Denmark",
  "Egypt",
  "Estonia",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "Ghana",
  "Greece",
  "Hungary",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Jordan",
  "Kenya",
  "Latvia",
  "Lithuania",
  "Malaysia",
  "Mexico",
  "Morocco",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "Saudi Arabia",
  "Serbia",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Thailand",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Venezuela",
  "Vietnam",
  "Other",
];

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "",
    yearsOfCoding: "",
    vibecodeProjects: "",
    whyCodePilot: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <span className="text-5xl mb-6 block" style={{ color: BRAND }}>
            ✦
          </span>
          <h1 className="text-3xl font-bold tracking-tight">
            You're on the list.
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Thanks for joining the CodePilot waitlist, {form.firstName}. We'll
            reach out when we're ready for you.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-md px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BRAND }}
          >
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-lg px-6 py-20">
        <div className="mb-10 text-center">
          <Link
            href="/"
            className="font-bold tracking-tight text-foreground text-lg"
          >
            Code<span style={{ color: BRAND }}>Pilot</span>
          </Link>
          <h1 className="mt-8 text-4xl font-bold tracking-tight">
            Join the waitlist
          </h1>
          <p className="mt-3 text-muted-foreground">
            We're rolling out access carefully. Tell us a bit about yourself.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={form.firstName}
                onChange={handleChange}
                placeholder="Alex"
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.2_255)] transition"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={form.lastName}
                onChange={handleChange}
                placeholder="Johnson"
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.2_255)] transition"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Country of residence
            </label>
            <select
              id="country"
              name="country"
              required
              value={form.country}
              onChange={handleChange}
              className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.2_255)] transition"
            >
              <option value="" disabled>
                Select your country
              </option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="yearsOfCoding"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Years of coding experience
            </label>
            <input
              id="yearsOfCoding"
              name="yearsOfCoding"
              type="number"
              required
              min="0"
              max="60"
              value={form.yearsOfCoding}
              onChange={handleChange}
              placeholder="e.g. 2"
              className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.2_255)] transition"
            />
          </div>

          <div>
            <label
              htmlFor="vibecodeProjects"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              How many vibecoded projects have you shipped?
            </label>
            <input
              id="vibecodeProjects"
              name="vibecodeProjects"
              type="number"
              required
              min="0"
              value={form.vibecodeProjects}
              onChange={handleChange}
              placeholder="e.g. 5"
              className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.2_255)] transition"
            />
          </div>

          <div>
            <label
              htmlFor="whyCodePilot"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Why do you want to use CodePilot?{" "}
              <span className="text-muted-foreground font-normal">
                (optional)
              </span>
            </label>
            <textarea
              id="whyCodePilot"
              name="whyCodePilot"
              rows={4}
              value={form.whyCodePilot}
              onChange={handleChange}
              placeholder="Tell us what you're trying to build or what problem you're trying to solve..."
              className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.2_255)] transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BRAND }}
          >
            Join the waitlist
          </button>
        </form>
      </div>
    </main>
  );
}
