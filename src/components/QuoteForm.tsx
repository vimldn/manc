"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

type Props = {
  heading?: string;
  compact?: boolean;
  defaultService?: string;
  defaultLocation?: string;
};

export default function QuoteForm({
  heading = "Get a Free Quote",
  compact = false,
  defaultService = "",
  defaultLocation = "",
}: Props) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    location: defaultLocation,
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.phone.trim()) e.phone = "Please enter a phone number.";
    else if (!/^[0-9+()\s-]{7,}$/.test(form.phone.trim()))
      e.phone = "Please enter a valid phone number.";
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim()))
      e.email = "Please enter a valid email address.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit() {
    if (!validate()) return;
    setSubmitting(true);
    try {
      await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // Even if the endpoint is not wired up yet, still send the user to
      // thank you so the lead prompt to call by phone is shown.
    }
    router.push("/thank-you/");
  }

  const input =
    "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";
  const label = "mb-1 block text-sm font-semibold text-gray-800";

  return (
    <div
      className={
        compact
          ? "rounded-lg bg-white p-5 shadow-md"
          : "rounded-lg border border-gray-200 bg-white p-6 shadow-md"
      }
    >
      <h2 className="text-lg font-bold text-gray-900">{heading}</h2>
      <p className="mb-4 mt-1 text-sm text-gray-600">
        Tell us what you are moving and we will call you back with a price.
      </p>

      <div className="space-y-3">
        <div>
          <label className={label} htmlFor="qf-name">
            Name
          </label>
          <input
            id="qf-name"
            className={input}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="qf-phone">
              Phone
            </label>
            <input
              id="qf-phone"
              inputMode="tel"
              className={input}
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
          </div>
          <div>
            <label className={label} htmlFor="qf-email">
              Email (optional)
            </label>
            <input
              id="qf-email"
              inputMode="email"
              className={input}
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="qf-service">
              Service needed
            </label>
            <select
              id="qf-service"
              className={input}
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.slug} value={s.navLabel}>
                  {s.navLabel}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={label} htmlFor="qf-location">
              Area
            </label>
            <select
              id="qf-location"
              className={input}
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
            >
              <option value="">Select an area</option>
              {locations.map((l) => (
                <option key={l.slug} value={l.name}>
                  {l.name}
                </option>
              ))}
              <option value="Other Greater Manchester">Other Greater Manchester</option>
            </select>
          </div>
        </div>

        <div>
          <label className={label} htmlFor="qf-message">
            What are you moving?
          </label>
          <textarea
            id="qf-message"
            rows={compact ? 2 : 3}
            className={input}
            placeholder="e.g. one bed flat, from and to postcodes, date"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={onSubmit}
          disabled={submitting}
          className="w-full rounded-md bg-cta px-4 py-3 text-base font-bold text-white hover:bg-cta-dark disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Get My Quote"}
        </button>
        <p className="text-center text-xs text-gray-500">
          Or call us direct for a quote. No obligation.
        </p>
      </div>
    </div>
  );
}
