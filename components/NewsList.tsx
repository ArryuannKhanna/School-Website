"use client";

import Link from "next/link";
import { useState } from "react";
import type { NewsItem } from "@/lib/data";
import { formatDate } from "@/lib/utils";

const categories = ["All", "Announcement", "Event", "Achievement", "Admissions"] as const;

export default function NewsList({ items }: { items: NewsItem[] }) {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const shown = cat === "All" ? items : items.filter((n) => n.category === cat);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter news">
        {categories.map((c) => (
          <button key={c} className="chip" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="grid grid-3">
        {shown.map((n) => (
          <Link href={`/news/${n.slug}`} className="card news-card" key={n.slug}>
            <div className="news-meta">
              <span className={`tag tag-${n.category}`}>{n.category}</span>
              <span>{formatDate(n.date)}</span>
            </div>
            <h3>{n.title}</h3>
            <p className="muted">{n.summary}</p>
            <span className="read">Read more →</span>
          </Link>
        ))}
      </div>
      {shown.length === 0 && <p className="muted">No items in this category yet.</p>}
    </>
  );
}
