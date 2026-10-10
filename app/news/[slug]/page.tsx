import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { news } from "@/lib/data";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  return { title: item?.title ?? "News", description: item?.summary };
}

export default async function NewsArticle({ params }: Props) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <>
      <PageHero crumb="News" title={item.title} />
      <section className="section">
        <div className="container">
          <article className="article">
            <div className="news-meta">
              <span className={`tag tag-${item.category}`}>{item.category}</span>
              <span>{formatDate(item.date)}</span>
            </div>
            {item.body.map((p, i) => <p key={i}>{p}</p>)}
            <Link href="/news" className="link-arrow">← Back to all news</Link>
          </article>
        </div>
      </section>
    </>
  );
}
