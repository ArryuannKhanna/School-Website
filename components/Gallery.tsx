"use client";

import { useCallback, useEffect, useState } from "react";
import type { GalleryItem } from "@/lib/data";
import { ChevronLeft, ChevronRight, CloseIcon, ImageIcon } from "./Icons";

function Media({ item, big }: { item: GalleryItem; big?: boolean }) {
  // eslint-disable-next-line @next/next/no-img-element
  if (item.src) return <img src={item.src} alt={item.title} />;
  return <div className={`ph ph-${item.category}`}><ImageIcon size={big ? 64 : 36} /></div>;
}

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const categories = ["All", ...Array.from(new Set(items.map((g) => g.category)))];
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const shown = cat === "All" ? items : items.filter((g) => g.category === cat);

  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + shown.length) % shown.length)),
    [shown.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  const current = open !== null ? shown[open] : null;

  return (
    <>
      <div className="filters" role="group" aria-label="Filter gallery">
        {categories.map((c) => (
          <button key={c} className="chip" aria-pressed={cat === c} onClick={() => { setCat(c); setOpen(null); }}>
            {c} <span className="muted">({c === "All" ? items.length : items.filter((g) => g.category === c).length})</span>
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {shown.map((g, i) => (
          <button key={g.title} className="gallery-item" onClick={() => setOpen(i)} aria-label={`Open ${g.title}`}>
            <Media item={g} />
            <div className="gallery-caption"><small>{g.category}</small>{g.title}</div>
          </button>
        ))}
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.title} onClick={() => setOpen(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-media"><Media item={current} big /></div>
            <div className="lightbox-bar">
              <button className="lb-btn" onClick={() => step(-1)} aria-label="Previous"><ChevronLeft /></button>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 600 }}>{current.title}</div>
                <div style={{ opacity: 0.7, fontSize: "0.85rem" }}>{current.category} · {open! + 1} / {shown.length}</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="lb-btn" onClick={() => step(1)} aria-label="Next"><ChevronRight /></button>
                <button className="lb-btn" onClick={() => setOpen(null)} aria-label="Close"><CloseIcon /></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
