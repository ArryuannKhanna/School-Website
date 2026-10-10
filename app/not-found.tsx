import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <h1>Page not found</h1>
        <p className="muted">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="btn btn-pine">Back to home</Link>
      </div>
    </section>
  );
}
