import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { school } from "@/lib/data";

export const metadata: Metadata = { title: "Admissions" };

const steps = [
  { title: "Collect the admission form", text: "Get the form from the school office, or send an enquiry below and we will contact you." },
  { title: "Fill in the details", text: "Complete the form with the student's and parents' details and attach copies of the documents." },
  { title: "Submit at the school office", text: "Submit the form with original documents for verification during office hours." },
  { title: "Confirmation", text: "Once verified, the student's name is entered in the admission register and class is allotted." },
];

const documents = [
  "Birth certificate (for Class 6 admission)",
  "School Leaving Certificate (SLC) from previous school",
  "Report card / marksheet of the last class passed",
  "Aadhaar card of the student",
  "Bonafide Himachali certificate (if applicable)",
  "Caste / category certificate (SC / ST / OBC, if applicable)",
  "Income certificate (for scholarships, if applicable)",
  "Bank account details of the student",
  "Four recent passport-size photographs",
];

const eligibility = [
  { cls: "Class 6", req: "Passed Class 5 from a recognised school; age as per state norms", when: "March – April" },
  { cls: "Classes 7 – 8", req: "Passed previous class; subject to seat availability", when: "March – April" },
  { cls: "Class 9", req: "Passed Class 8 from a recognised school", when: "March – April" },
  { cls: "Class 10", req: "Passed Class 9; transfer cases subject to HPBOSE rules", when: "March – April" },
  { cls: "Class 11", req: "Passed Class 10 (HPBOSE / CBSE / equivalent); stream as per merit and availability", when: "After Class 10 results" },
  { cls: "Class 12", req: "Passed Class 11; transfer cases subject to HPBOSE rules", when: "April" },
];

export default function Admissions() {
  return (
    <>
      <PageHero
        crumb="Admissions"
        title="Admissions 2027–28"
        intro="Education in Himachal Pradesh government schools is free. Here is everything you need to know to enrol your child."
      />

      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            <span className="eyebrow">How to apply</span>
            <h2>Admission process</h2>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="card">
            <h3>Documents required</h3>
            <p className="muted">Bring originals along with one set of self-attested photocopies.</p>
            <ul className="checklist">
              {documents.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow">Eligibility</span>
          <h2>Classes and eligibility</h2>
          <div className="table-wrap" style={{ marginTop: 20 }}>
            <table>
              <thead>
                <tr><th>Class</th><th>Eligibility</th><th>Admission period</th></tr>
              </thead>
              <tbody>
                {eligibility.map((e) => (
                  <tr key={e.cls}><td><b>{e.cls}</b></td><td>{e.req}</td><td>{e.when}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="muted" style={{ marginTop: 14, fontSize: "0.9rem" }}>
            Streams offered in Classes 11–12 and seat availability will be confirmed by the school office.
            Admission is as per guidelines of the Directorate of School Education, Himachal Pradesh.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            <span className="eyebrow">Benefits</span>
            <h2>Support for every student</h2>
            <ul className="checklist">
              <li>No tuition fee in government schools</li>
              <li>Free textbooks as per state scheme</li>
              <li>Free uniform for eligible students</li>
              <li>PM POSHAN mid-day meal for eligible classes</li>
              <li>State and central scholarships for eligible students</li>
            </ul>
            <div className="card" style={{ marginTop: 28 }}>
              <h3>Visit the school office</h3>
              <p className="muted" style={{ margin: 0 }}>
                {school.address}<br />
                {school.hours}<br />
                Phone: {school.phone}
              </p>
            </div>
          </div>
          <div className="card">
            <h3>Admission enquiry</h3>
            <p className="muted">Leave your details and the school office will get in touch.</p>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
