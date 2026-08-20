import Link from "next/link";

const columns = [
  {
    title: "Home",
    href: "/",
    links: [
      { href: "/#experience", label: "Experience Design" },
      { href: "/artwork", label: "Artwork" },
      { href: "/about", label: "About" },
    ],
  },
  {
    title: "Experience Design",
    href: "/#experience",
    links: [
      { href: "/#experience", label: "Project" },
      { href: "/#experience", label: "Practice" },
    ],
  },
  {
    title: "Artwork",
    href: "/artwork",
    links: [
      { href: "/artwork", label: "Installation" },
      { href: "/artwork?tab=illustration", label: "Illustration" },
    ],
  },
  {
    title: "About",
    href: "/about",
    links: [{ href: "/about", label: "CV" }],
  },
] as const;

export function ArtworkFooter() {
  return (
    <footer className="artwork-footer">
      <div className="artwork-footer__inner">
        {columns.map((column) => (
          <div key={column.title} className="artwork-footer__col">
            <Link href={column.href} className="artwork-footer__heading">
              {column.title}
            </Link>
            <ul>
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
