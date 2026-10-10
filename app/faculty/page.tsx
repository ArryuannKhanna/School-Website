import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FacultyGrid from "@/components/FacultyGrid";
import { faculty, school } from "@/lib/data";
import { initials } from "@/lib/utils";

export const metadata: Metadata = { title: "Faculty" };

export default function FacultyPage() {
  const principal = faculty.find((f) => f.role === "Principal");
  const staff = faculty.filter((f) => f !== principal);

  return (
    <>
      <PageHero
        crumb="Faculty"
        title="Our faculty"
        intro="Dedicated lecturers and teachers who guide our students in the classroom and beyond."
      />

      {principal && (
        <section className="section">
          <div className="container">
            <div className="card leader">
              <div className="avatar">{initials(principal.name)}</div>
              <div>
                <span className="eyebrow">Head of institution</span>
                <h2 style={{ marginBottom: 4 }}>{principal.name}</h2>
                <p className="muted">Principal · {principal.qualification}</p>
                <p style={{ margin: 0 }}>
                  The Principal leads the academic and administrative work of {school.name}, working with teachers,
                  the School Management Committee and parents to ensure every child receives quality education.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Teaching staff</span>
              <h2>Departments</h2>
            </div>
          </div>
          <FacultyGrid items={staff} />
        </div>
      </section>
    </>
  );
}
