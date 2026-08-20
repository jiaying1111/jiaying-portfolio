import Link from "next/link";

const nav: { href: string; label: string; current?: boolean }[] = [
  { href: "/#experience", label: "Experience Design" },
  { href: "/artwork", label: "Artwork", current: true },
  { href: "/about", label: "About" },
];

export function ArtworkHeader() {
  return (
    <header className="artwork-header">
      <Link href="/" className="artwork-logo">
        Jiaying Li
      </Link>
      <nav aria-label="Primary navigation" className="artwork-nav">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={
              item.current ? "artwork-nav__link is-current" : "artwork-nav__link"
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
