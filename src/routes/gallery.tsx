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
      { title: "Gallery — SoftSkySolution" },
      { name: "description", content: "Photo gallery of SoftSkySolution events, leadership moments and recognition." },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: gallery3, title: "Innovation Award", desc: "Receiving recognition at the Students' Innovation Challenge for impactful tech solutions." },
  { src: gallery1, title: "Presenting My Vision", desc: "Sharing SoftSkySolution's mission at a national innovation forum." },
  { src: gallery2, title: "Among Innovators", desc: "Engaging with fellow innovators and stakeholders at a tech and education event." },
  { src: caleb3, title: "On Stage", desc: "Public speaking and demonstrating my work to live audiences." },
  { src: caleb1, title: "Leadership Moments", desc: "Behind the scenes of building SoftSkySolution." },
  { src: caleb2, title: "Behind the Build", desc: "Quiet moments working on the systems I ship every day." },
];

function Gallery() {
  return (
    <>
      <section className="relative py-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            My Moments
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Gallery & <span className="text-gradient-primary">Highlights</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            A look behind the scenes. Events, recognition, and the work behind building SoftSkySolution.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img) => (
            <Card key={img.title} className="group overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 duration-300">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900/10 dark:bg-slate-950/40">
                <img src={img.src} alt={img.title}
                  className="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-display font-semibold text-base">{img.title}</h3>
                <p className="text-sm text-muted-foreground">{img.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}