import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { BookIcon, LeafIcon, MonitorIcon, UsersIcon } from "@/components/Icons";
import { school } from "@/lib/data";

export const metadata: Metadata = { title: "About Us" };

const values = [
  { icon: <BookIcon />, title: "Quality learning", text: "Strong foundations in languages, mathematics and science, with competency-based teaching as envisioned in NEP 2020." },
  { icon: <UsersIcon />, title: "Inclusion", text: "Every child is welcome. Free education, textbooks, uniforms and scholarships as per Government of Himachal Pradesh schemes." },
  { icon: <MonitorIcon />, title: "Modern classrooms", text: "Smart classes, ICT lab and digital resources introduced under the PM SHRI programme." },
  { icon: <LeafIcon />, title: "Green campus", text: "Eco Club, waste segregation, kitchen garden and water conservation as part of the green school initiative." },
];

const facilities = [
  "Well-equipped Physics, Chemistry and Biology laboratories",
  "ICT / computer lab with internet access",
  "Smart classrooms with digital boards",
  "School library and reading corner",
  "Playground for athletics, volleyball and kabaddi",
  "Clean drinking water and separate toilets for girls and boys",
  "PM POSHAN mid-day meal for eligible classes",
  "Vocational education exposure",
];

export default function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="About our school"
        intro={`${school.fullName} is a government school in the historic cantonment town of Dagshai, District Solan.`}
      />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Our story</span>
            <h2>A school on a historic hilltop</h2>
            <p>
              Dagshai, founded in 1847, is among the oldest cantonments in the hills of Himachal Pradesh. It sits at
              an altitude of about 1,700 metres between Solan and Kasauli, and is known for its colonial-era buildings
              and the Dagshai Jail Museum.
            </p>
            <p>
              Our school serves children from the cantonment and the surrounding villages. Over the years it has grown
              into a full senior secondary school, and has been selected as a PM SHRI school by the Government of India
              to serve as a model of quality education in the region.
            </p>
            {/* TODO: add the school's founding year and history once confirmed */}
          </div>
          <div className="card" style={{ background: "var(--pine)", color: "#fff", borderColor: "var(--pine)" }}>
            <span className="eyebrow">What is PM SHRI?</span>
            <h3 style={{ color: "#fff" }}>PM Schools for Rising India</h3>
            <p style={{ color: "#d3e2d9" }}>
              PM SHRI is a centrally sponsored scheme launched in 2022 to upgrade existing government schools into
              exemplar schools that implement the National Education Policy 2020 — with better infrastructure, smart
              classrooms, labs, libraries, and a focus on holistic, green and inclusive education.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-2">
          <div className="card">
            <span className="eyebrow">Vision</span>
            <h3>Every child, confident and capable</h3>
            <p className="muted">
              To nurture responsible, curious and skilled young citizens rooted in the values and culture of Himachal,
              ready to contribute to a growing India.
            </p>
          </div>
          <div className="card">
            <span className="eyebrow">Mission</span>
            <h3>Joyful, inclusive, meaningful learning</h3>
            <p className="muted">
              To provide free, equitable and high-quality education through dedicated teachers, a safe campus,
              modern resources and active participation of parents and the community.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our values</span>
              <h2>What guides us</h2>
            </div>
          </div>
          <div className="grid grid-4">
            {values.map((v) => (
              <div className="card" key={v.title}>
                <div className="icon-chip">{v.icon}</div>
                <h3>{v.title}</h3>
                <p className="muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div>
            <span className="eyebrow">Facilities</span>
            <h2>On our campus</h2>
            <p className="muted">
              Facilities are continually being upgraded under the PM SHRI programme and Samagra Shiksha.
            </p>
          </div>
          <ul className="checklist">
            {facilities.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <span className="eyebrow">Principal&apos;s message</span>
            <p style={{ fontSize: "1.1rem" }}>
              &ldquo;Our school is a place where every child is known, valued and encouraged to grow. With the support
              of our dedicated teachers and parents, we strive to give our students the knowledge, skills and
              character they need to succeed — in Dagshai and beyond.&rdquo;
            </p>
            <p className="muted" style={{ margin: 0 }}>— Principal, {school.name}</p>
          </div>
        </div>
      </section>
    </>
  );
}
