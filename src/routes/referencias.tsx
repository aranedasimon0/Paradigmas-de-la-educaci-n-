import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/referencias")({
  head: () => ({
    meta: [
      { title: "Referencias bibliográficas | Educar con Teorías" },
      {
        name: "description",
        content:
          "Bibliografía y fuentes utilizadas en el proyecto Educar con Teorías: obras clave sobre las teorías del aprendizaje.",
      },
      { property: "og:title", content: "Referencias — Educar con Teorías" },
      {
        property: "og:description",
        content:
          "Fuentes bibliográficas del proyecto sobre teorías del aprendizaje de la UC Temuco.",
      },
    ],
  }),
  component: Page,
});

type Ref = { text: React.ReactNode };
const refs: { group: string; items: Ref[] }[] = [
  {
    group: "Conductismo",
    items: [
      { text: <>Pavlov, I. P. (1927). <em>Conditioned reflexes: An investigation of the physiological activity of the cerebral cortex</em> (G. V. Anrep, Trad.). Oxford University Press.</> },
      { text: <>Skinner, B. F. (1953). <em>Science and human behavior</em>. Macmillan.</> },
      { text: <>Thorndike, E. L. (1911). <em>Animal intelligence: Experimental studies</em>. Macmillan.</> },
      { text: <>Watson, J. B. (1913). Psychology as the behaviorist views it. <em>Psychological Review, 20</em>(2), 158–177. https://doi.org/10.1037/h0074428</> },
    ],
  },
  {
    group: "Cognitivismo",
    items: [
      { text: <>Ausubel, D. P. (1968). <em>Educational psychology: A cognitive view</em>. Holt, Rinehart &amp; Winston.</> },
      { text: <>Bruner, J. S. (1966). <em>Toward a theory of instruction</em>. Harvard University Press.</> },
      { text: <>Gagné, R. M. (1985). <em>The conditions of learning</em> (4.ª ed.). Holt, Rinehart &amp; Winston.</> },
      { text: <>Piaget, J. (1970). <em>La epistemología genética</em>. Ariel.</> },
    ],
  },
  {
    group: "Constructivismo",
    items: [
      { text: <>Carretero, M. (2009). <em>Constructivismo y educación</em>. Paidós.</> },
      { text: <>Coll, C. (1990). <em>Aprendizaje escolar y construcción del conocimiento</em>. Paidós.</> },
      { text: <>Perkins, D. (2010). <em>El aprendizaje pleno: Principios de la enseñanza para transformar la educación</em>. Paidós.</> },
      { text: <>Vygotsky, L. S. (1978). <em>Mind in society: The development of higher psychological processes</em>. Harvard University Press.</> },
    ],
  },
  {
    group: "Aprendizaje profundo",
    items: [
      { text: <>Fullan, M., Quinn, J., &amp; McEachen, J. (2018). <em>Deep learning: Engage the world, change the world</em>. Corwin.</> },
      { text: <>Ministerio de Educación de Chile. (2015). <em>Bases curriculares 7.º básico a 2.º medio</em>. Mineduc.</> },
      { text: <>Organización para la Cooperación y el Desarrollo Económicos. (2019). <em>OECD learning compass 2030</em>. OECD Publishing.</> },
    ],
  },
];

function Page() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-5 lg:px-8 pt-16 pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Bibliografía</p>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
          Referencias que sostienen este sitio.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/75 leading-relaxed">
          Bibliografía en formato APA 7, agrupada por corriente teórica. Se citan las obras
          originales y textos de referencia en español que sustentan el contenido del sitio.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-8 py-10 space-y-10">
        {refs.map((r) => (
          <div key={r.group}>
            <h2 className="font-serif text-2xl mb-4">{r.group}</h2>
            <ul className="space-y-3">
              {r.items.map((ref, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-border bg-card p-4 text-[15px] leading-relaxed text-foreground/85"
                  style={{ paddingLeft: "2.5em", textIndent: "-1.5em" }}
                >
                  {ref.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-8 pb-16">
        <p className="text-sm text-muted-foreground">
          Nota: las referencias siguen las normas APA (7.ª ed.). Cada docente puede complementarlas
          según el nivel y el contexto educativo en el que trabaje.
        </p>
      </section>
    </SiteLayout>
  );
}
