import Link from "next/link";
import Mountains from "@/components/Mountains";
import { BookIcon, FlaskIcon, LeafIcon, MonitorIcon, TrophyIcon, UsersIcon, ImageIcon } from "@/components/Icons";
import { gallery, news, school, stats } from "@/lib/data";
import { formatDate, sortedNews } from "@/lib/utils";

const highlights = [
  { icon: <BookIcon />, title: "Classes 6 to 12", text: "Middle, secondary and senior secondary education under the HP Board." },
  { icon: <FlaskIcon />, title: "Science & ICT labs", text: "Hands-on practicals in physics, chemistry, biology and computers." },
  { icon: <MonitorIcon />, title: "Smart classrooms", text: "Digital teaching aids introduced under the PM SHRI programme." },
  { icon: <TrophyIcon />, title: "Sports & games", text: "Athletics, volleyball, kabaddi and kho-kho on our hillside ground." },
  { icon: <LeafIcon />, title: "Green school", text: "Eco Club, plantation drives and water conservation projects." },
  { icon: <UsersIcon />, title: "NSS & clubs", text: "Community service, cultural activities and youth clubs." },
];

export default function Home() {
  const latest = sortedNews().slice(0, 3);
  const notices = sortedNews().slice(0, 5);

  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="hero-badge">★ PM Schools for Rising India</span>
          <h1>Rooted in the hills, reaching for the future</h1>
          <p className="lead">
            Welcome to {school.fullName}. We offer free, quality education to the children of Dagshai and the
            surrounding villages of Solan district, preparing them for higher studies and life.
          </p>
          <div className="hero-actions">
            <Link href="/admissions" className="btn btn-primary">Admissions 2027–28</Link>
            <Link href="/about" className="btn btn-ghost">About the school</Link>
          </div>
        </div>
        <Mountains />
      </section>

      <div className="container">
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Welcome</span>
            <h2>A government school with a heritage setting</h2>
            <p className="lead">
              Dagshai is one of the oldest cantonment towns in Himachal Pradesh, perched on a hilltop between Solan
              and Kasauli. Our school brings together students from the cantonment and nearby villages.
            </p>
            <p className="muted">
              As a PM SHRI school, we follow the National Education Policy 2020 with a focus on activity-based
              learning, digital classrooms, vocational exposure and a green, inclusive campus.
            </p>
            <Link href="/about" className="link-arrow">Read more about us →</Link>
          </div>
          <div className="card">
            <h3>Notice board</h3>
            <ul className="notice-list">
              {notices.map((n) => {
                const d = new Date(n.date);
                return (
                  <li key={n.slug}>
                    <div className="notice-date">
                      <b>{d.getDate()}</b>
                      <span>{d.toLocaleString("en-IN", { month: "short" })}</span>
                    </div>
                    <div>
                      <Link href={`/news/${n.slug}`}>{n.title}</Link>
                      <div className="muted" style={{ fontSize: "0.85rem" }}>{n.category}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Life at school</span>
              <h2>What we offer</h2>
            </div>
          </div>
          <div className="grid grid-3">
            {highlights.map((h) => (
              <div className="card" key={h.title}>
                <div className="icon-chip">{h.icon}</div>
                <h3>{h.title}</h3>
                <p className="muted">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Latest</span>
              <h2>News & events</h2>
            </div>
            <Link href="/news" className="link-arrow">All news →</Link>
          </div>
          <div className="grid grid-3">
            {latest.map((n) => (
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
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Gallery</span>
              <h2>Moments from campus</h2>
            </div>
            <Link href="/gallery" className="link-arrow">View gallery →</Link>
          </div>
          <div className="gallery-grid">
            {gallery.slice(0, 4).map((g) => (
              <Link href="/gallery" className="gallery-item" key={g.title}>
                {g.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={g.src} alt={g.title} />
                ) : (
                  <div className={`ph ph-${g.category}`}><ImageIcon size={36} /></div>
                )}
                <div className="gallery-caption"><small>{g.category}</small>{g.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <div>
              <h2>Admissions are open</h2>
              <p>Registration for Classes 6, 9 and 11 for the 2027–28 session. Education is free in government schools.</p>
            </div>
            <Link href="/admissions" className="btn btn-pine">How to apply</Link>
          </div>
        </div>
      </section>
    </>
  );
}
