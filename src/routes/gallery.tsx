import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import caleb1 from "@/assets/caleb-1.png";
import caleb2 from "@/assets/caleb-2.png";
import caleb3 from "@/assets/caleb-3.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — SoftSkySolution LTD" },
      { name: "description", content: "Photo gallery of SoftSkySolution LTD events, leadership moments and recognition." },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: gallery3, title: "Innovation Award", desc: "Receiving recognition at the Students' Innovation Challenge for impactful tech solutions." },
  { src: gallery1, title: "Presenting Our Vision", desc: "Caleb sharing SoftSkySolution's mission at a national innovation forum." },
  { src: gallery2, title: "Among Innovators", desc: "Engaging with fellow innovators and stakeholders at a tech & education event." },
  { src: caleb3, title: "On Stage", desc: "Public speaking and demonstrating our work to live audiences." },
  { src: caleb1, title: "Leadership Moments", desc: "Caleb Mumo Kisangau, Founder & CEO of SoftSkySolution LTD." },
  { src: caleb2, title: "Behind the Build", desc: "Quiet moments behind the systems we ship every day." },
];

function Gallery() {
  return (
    <>
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Our Moments
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Gallery & <span className="text-gradient-primary">Highlights</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            A look behind the scenes — events, recognition, leadership and the people building SoftSkySolution LTD.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <Card key={img.title} className="group overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={img.src} alt={img.title}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-1">
                <h3 className="font-display font-semibold">{img.title}</h3>
                <p className="text-sm text-muted-foreground">{img.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
