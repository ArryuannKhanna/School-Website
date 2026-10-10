import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import NewsList from "@/components/NewsList";
import { sortedNews } from "@/lib/utils";

export const metadata: Metadata = { title: "News & Notices" };

export default function News() {
  return (
    <>
      <PageHero crumb="News" title="News & notices" intro="Announcements, events and achievements from our school." />
      <section className="section">
        <div className="container">
          <NewsList items={sortedNews()} />
        </div>
      </section>
    </>
  );
}
