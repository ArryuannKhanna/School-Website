"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { school } from "@/lib/data";
import { CloseIcon, MenuIcon, SchoolIcon } from "./Icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/admissions", label: "Admissions" },
  { href: "/news", label: "News" },
  { href: "/faculty", label: "Faculty" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>{school.location}</span>
          <span className="hide-sm">
            <a href={`tel:${school.phone.replace(/\s/g, "")}`}>{school.phone}</a> · <a href={`mailto:${school.email}`}>{school.email}</a>
          </span>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <Link href="/" className="brand">
            <span className="brand-mark"><SchoolIcon size={24} /></span>
            <span>
              <span className="brand-name">{school.name}</span>
              <br />
              <span className="brand-sub">Solan, Himachal Pradesh</span>
            </span>
          </Link>
          <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
          <nav className={`nav${open ? " open" : ""}`} aria-label="Main">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
