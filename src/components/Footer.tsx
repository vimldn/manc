import Link from "next/link";
import { site } from "@/lib/config";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-container px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-lg font-extrabold text-white">
              Van and Man <span className="text-cta">Manchester</span>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              Reliable man and van removals across Manchester and Greater Manchester. Serving
              Manchester and nearby areas.
            </p>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-4 inline-block text-lg font-bold text-white"
            >
              {site.phoneDisplay}
            </a>
            <p className="mt-1 text-sm text-gray-400">{site.hours}</p>
            <p className="mt-3 text-sm not-italic text-gray-400">
              {site.address.street}, {site.address.locality} {site.address.postcode}
            </p>
            <iframe
              title={`${site.name} location, ${site.address.street}, ${site.address.locality} ${site.address.postcode}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                site.address.mapQuery,
              )}&z=16&output=embed`}
              className="mt-4 h-44 w-full rounded-lg border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">Services</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="hover:text-white">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">Areas We Cover</h2>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}/`} className="hover:text-white">
                    Man and van in {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">Company</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/about/" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote/" className="hover:text-white">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-xs text-gray-500">
          <p>
            &copy; {year} {site.name}. Serving Manchester and nearby areas. Man and van in
            Manchester, house removals, flat removals, rubbish removal and furniture delivery.
          </p>
        </div>
      </div>
    </footer>
  );
}
