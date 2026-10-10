import Link from "next/link";
import { school } from "@/lib/data";
import { MailIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{school.fullName}</h4>
            <p>
              A government senior secondary school under the PM SHRI (PM Schools for Rising India) scheme, serving the
              children of Dagshai and nearby villages in the hills of Solan.
            </p>
            <p className="muted" style={{ color: "#9fb5a8", fontSize: "0.88rem" }}>Affiliated to {school.board}</p>
          </div>
          <div>
            <h4>Quick links</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/admissions">Admissions</Link></li>
              <li><Link href="/news">News & Notices</Link></li>
              <li><Link href="/faculty">Faculty</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li style={{ display: "flex", gap: 10 }}><PinIcon size={18} /> {school.address}</li>
              <li style={{ display: "flex", gap: 10 }}><PhoneIcon size={18} /> <a href={`tel:${school.phone.replace(/\s/g, "")}`}>{school.phone}</a></li>
              <li style={{ display: "flex", gap: 10 }}><MailIcon size={18} /> <a href={`mailto:${school.email}`}>{school.email}</a></li>
              <li style={{ color: "#9fb5a8" }}>Office: {school.hours}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {school.fullName}</span>
          <span>Department of School Education, Government of Himachal Pradesh</span>
        </div>
      </div>
    </footer>
  );
}
