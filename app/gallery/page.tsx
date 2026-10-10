import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import { gallery } from "@/lib/data";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero crumb="Gallery" title="Photo gallery" intro="A catalogue of campus life, events, sports, academics and cultural programmes." />
      <section className="section">
        <div className="container">
          <Gallery items={gallery} />
        </div>
      </section>
    </>
  );
}
