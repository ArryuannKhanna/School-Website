"use client";

import { useState } from "react";

type Status = { kind: "idle" | "sending" | "ok" | "err"; message?: string };

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      form.reset();
      setStatus({ kind: "ok", message: "Thank you! Your enquiry has been received. The school office will contact you soon." });
    } catch (err) {
      setStatus({ kind: "err", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="student">Student&apos;s name</label>
          <input id="student" name="student" required />
        </div>
        <div className="field">
          <label htmlFor="parent">Parent / guardian</label>
          <input id="parent" name="parent" required />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" type="tel" inputMode="tel" pattern="[0-9+\s-]{10,15}" required />
        </div>
        <div className="field">
          <label htmlFor="cls">Class applying for</label>
          <select id="cls" name="cls" required defaultValue="">
            <option value="" disabled>Select class</option>
            {["6", "7", "8", "9", "10", "11", "12"].map((c) => (
              <option key={c} value={c}>Class {c}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Message (optional)</label>
        <textarea id="message" name="message" rows={3} />
      </div>
      {status.message && <div className={`form-note ${status.kind === "ok" ? "ok" : "err"}`}>{status.message}</div>}
      <button className="btn btn-primary" type="submit" disabled={status.kind === "sending"} style={{ justifySelf: "start" }}>
        {status.kind === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
