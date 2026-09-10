import Link from "next/link";

// -------------------------------------------------------------
// The repo's inline link parser. Content in `data`/`lib` modules is plain
// text, so a contextual internal link is written inline as [label](/path/)
// and rendered here. Anything that is not a link passes through as text, so
// existing prose is unaffected.
//
// Internal paths use next/link. Absolute http(s) URLs open in a new tab with
// rel="noopener noreferrer". Nothing else is parsed: no bold, no HTML, no
// dangerouslySetInnerHTML.
// -------------------------------------------------------------

const LINK = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)/g;

export function inlineNodes(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;

  LINK.lastIndex = 0;
  while ((m = LINK.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const [, label, href] = m;
    if (href.startsWith("http")) {
      nodes.push(
        <a
          key={`${m.index}-${href}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand hover:text-brand-dark"
        >
          {label}
        </a>,
      );
    } else {
      nodes.push(
        <Link
          key={`${m.index}-${href}`}
          href={href}
          className="font-semibold text-brand hover:text-brand-dark"
        >
          {label}
        </Link>,
      );
    }
    last = m.index + m[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** Renders one paragraph of text with inline [label](/path/) links resolved. */
export default function RichText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return <p className={className}>{inlineNodes(text)}</p>;
}
