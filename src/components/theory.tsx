import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type Accent = "conductista" | "cognitivista" | "constructivista" | "profundo";

const accentBg: Record<Accent, string> = {
  conductista: "bg-conductista",
  cognitivista: "bg-cognitivista",
  constructivista: "bg-constructivista",
  profundo: "bg-profundo",
};
const accentText: Record<Accent, string> = {
  conductista: "text-conductista",
  cognitivista: "text-cognitivista",
  constructivista: "text-constructivista",
  profundo: "text-profundo",
};

export function TheoryHero({
  eyebrow,
  title,
  lead,
  accent,
  bgImage,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  accent: Accent;
  bgImage?: string;
}) {
  return (
    <section className={`relative overflow-hidden ${accentBg[accent]} text-white`}>
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
      )}
      <div
        aria-hidden="true"
        className={`absolute inset-0 ${accentBg[accent]} mix-blend-multiply opacity-70`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"
      />
      <div className="relative mx-auto max-w-5xl px-5 lg:px-8 py-20 md:py-28">
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">{eyebrow}</p>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05] drop-shadow-md">{title}</h1>
        <p className="mt-6 max-w-2xl text-white/95 text-lg leading-relaxed drop-shadow">{lead}</p>
      </div>
    </section>
  );
}


export function Section({
  title,
  kicker,
  children,
  accent,
}: {
  title: string;
  kicker?: string;
  children: ReactNode;
  accent?: Accent;
}) {
  return (
    <section className="mx-auto max-w-5xl px-5 lg:px-8 py-14 md:py-20">
      {kicker && (
        <p className={`text-xs uppercase tracking-[0.18em] font-medium mb-3 ${accent ? accentText[accent] : "text-primary"}`}>
          {kicker}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl mb-6">{title}</h2>
      <div className="prose-custom text-[17px] leading-relaxed text-foreground/85 space-y-4 max-w-3xl">
        {children}
      </div>
    </section>
  );
}

export function AuthorCard({
  name,
  years,
  contribution,
  accent,
}: {
  name: string;
  years: string;
  contribution: string;
  accent: Accent;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className={`h-1.5 w-10 rounded-full ${accentBg[accent]} mb-4`} />
      <p className="font-serif text-xl">{name}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{years}</p>
      <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{contribution}</p>
    </div>
  );
}

export function PrincipleList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ol className="mt-6 space-y-4 not-prose">
      {items.map((it, i) => (
        <li key={it.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
          <span className="font-serif text-2xl text-primary tabular-nums w-8 shrink-0">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="font-semibold">{it.title}</p>
            <p className="text-sm text-foreground/75 mt-1 leading-relaxed">{it.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ContextExamples({
  formal,
  informal,
  accent,
}: {
  formal: string[];
  informal: string[];
  accent: Accent;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-5 not-prose mt-6">
      {[
        { label: "Contexto formal", items: formal },
        { label: "Contexto informal", items: informal },
      ].map((col) => (
        <div key={col.label} className="rounded-2xl bg-secondary/60 p-6">
          <p className={`text-xs uppercase tracking-[0.18em] font-medium ${accentText[accent]}`}>
            {col.label}
          </p>
          <ul className="mt-3 space-y-2 text-[15px] text-foreground/85">
            {col.items.map((x) => (
              <li key={x} className="flex gap-3">
                <span className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${accentBg[accent]}`} />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function VideoEmbed({
  videoId,
  title,
  caption,
  accent,
}: {
  videoId: string;
  title: string;
  caption?: string;
  accent: Accent;
}) {
  return (
    <section className="mx-auto max-w-5xl px-5 lg:px-8 py-6 md:py-10">
      <p className={`text-xs uppercase tracking-[0.18em] font-medium mb-3 ${accentText[accent]}`}>
        Video recomendado
      </p>
      <h2 className="font-serif text-2xl md:text-3xl mb-5">{title}</h2>
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-lg shadow-black/5 bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
      </div>
      {caption && <p className="mt-3 text-sm text-muted-foreground">{caption}</p>}
    </section>
  );
}

export function Gallery({
  images,
  accent,
  kicker = "Galería",
  title = "Imágenes del enfoque",
}: {
  images: { src: string; alt: string; caption?: string }[];
  accent: Accent;
  kicker?: string;
  title?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 py-10 md:py-14">
      <p className={`text-xs uppercase tracking-[0.18em] font-medium mb-3 ${accentText[accent]}`}>
        {kicker}
      </p>
      <h2 className="font-serif text-2xl md:text-3xl mb-6">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((img, i) => (
          <figure
            key={img.src}
            className={`relative overflow-hidden rounded-2xl border border-border bg-muted ${
              i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {img.caption && (
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs text-white">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}

export function TheoryNav({ current }: { current: Accent }) {
  const others = (
    [
      { to: "/conductista", label: "Conductista", a: "conductista" },
      { to: "/cognitivista", label: "Cognitivista", a: "cognitivista" },
      { to: "/constructivista", label: "Constructivista", a: "constructivista" },
      { to: "/aprendizaje-profundo", label: "Aprendizaje Profundo", a: "profundo" },
    ] as const
  ).filter((o) => o.a !== current);

  return (
    <section className="mx-auto max-w-5xl px-5 lg:px-8 pb-20">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
        Continúa explorando
      </p>
      <div className="grid sm:grid-cols-3 gap-4">
        {others.map((o) => (
          <Link
            key={o.to}
            to={o.to}
            className="group rounded-2xl border border-border bg-card p-5 hover:border-foreground/30 transition-colors"
          >
            <div className={`h-1.5 w-8 rounded-full ${accentBg[o.a]} mb-3`} />
            <p className="font-serif text-lg group-hover:underline underline-offset-4">
              Teoría {o.label}
            </p>
            <p className="text-sm text-muted-foreground mt-1">Leer más →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
