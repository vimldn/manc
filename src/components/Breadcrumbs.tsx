import Link from "next/link";

export default function Breadcrumbs({
  trail,
}: {
  trail: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-container px-4 py-3 text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-1">
        {trail.map((t, i) => (
          <li key={t.path} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i < trail.length - 1 ? (
              <Link href={t.path} className="hover:text-brand">
                {t.name}
              </Link>
            ) : (
              <span className="text-gray-700">{t.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
