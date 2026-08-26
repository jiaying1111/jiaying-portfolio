import Link from "next/link";
import { footerColumns } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner measure">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <Link href={column.href} className="site-footer__heading">
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
