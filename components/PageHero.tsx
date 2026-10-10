import Link from "next/link";
import Mountains from "./Mountains";

export default function PageHero({ title, intro, crumb }: { title: string; intro?: string; crumb: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="crumbs">
          <Link href="/">Home</Link> / {crumb}
        </div>
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
      <Mountains />
    </section>
  );
}
