"use client";

import { useState } from "react";
import type { Faculty } from "@/lib/data";
import { initials } from "@/lib/utils";

export default function FacultyGrid({ items }: { items: Faculty[] }) {
  const departments = ["All", ...Array.from(new Set(items.map((f) => f.department)))];
  const [dept, setDept] = useState("All");
  const shown = dept === "All" ? items : items.filter((f) => f.department === dept);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter by department">
        {departments.map((d) => (
          <button key={d} className="chip" aria-pressed={dept === d} onClick={() => setDept(d)}>{d}</button>
        ))}
      </div>
      <div className="grid grid-4">
        {shown.map((f, i) => (
          <div className="card faculty-card" key={`${f.subject}-${i}`}>
            <div className="avatar">{initials(f.name)}</div>
            <h3>{f.name}</h3>
            <div className="role">{f.role} · {f.subject}</div>
            <div className="qual">{f.qualification}</div>
          </div>
        ))}
      </div>
    </>
  );
}
