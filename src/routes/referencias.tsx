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

const refs = [
  {
    group: "Conductismo",
    items: [
      "Pavlov, I. (1927). Conditioned Reflexes. Oxford University Press.",
      "Watson, J. B. (1913). Psychology as the behaviorist views it. Psychological Review, 20(2), 158–177.",
      "Skinner, B. F. (1953). Science and human behavior. Macmillan.",
      "Thorndike, E. L. (1911). Animal intelligence. Macmillan.",
    ],
  },
  {
    group: "Cognitivismo",
    items: [
      "Ausubel, D. (1968). Educational psychology: A cognitive view. Holt, Rinehart & Winston.",
      "Bruner, J. (1966). Toward a theory of instruction. Harvard University Press.",
      "Gagné, R. (1985). The conditions of learning. Holt, Rinehart & Winston.",
      "Piaget, J. (1970). La epistemología genética. Ariel.",
    ],
  },
  {
    group: "Constructivismo",
    items: [
      "Vygotsky, L. S. (1978). Mind in society. Harvard University Press.",
      "Coll, C. (1990). Aprendizaje escolar y construcción del conocimiento. Paidós.",
      "Carretero, M. (2009). Constructivismo y educación. Paidós.",
      "Perkins, D. (2010). El aprendizaje pleno. Paidós.",
    ],
  },
  {
    group: "Aprendizaje profundo",
    items: [
      "Fullan, M., Quinn, J., & McEachen, J. (2018). Deep Learning: Engage the World, Change the World. Corwin.",
      "OECD (2019). OECD Learning Compass 2030. OECD Publishing.",
      "Mineduc (2015). Bases Curriculares 7° básico a 2° medio. Ministerio de Educación de Chile.",
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
          Obras clásicas y contemporáneas sobre teorías del aprendizaje, agrupadas por corriente,
          que pueden servir como puerta de entrada para profundizar cada tema.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-8 py-10 space-y-10">
        {refs.map((r) => (
          <div key={r.group}>
            <h2 className="font-serif text-2xl mb-4">{r.group}</h2>
            <ul className="space-y-3">
              {r.items.map((ref) => (
                <li
                  key={ref}
                  className="rounded-xl border border-border bg-card p-4 text-[15px] leading-relaxed text-foreground/85"
                >
                  {ref}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-8 pb-16">
        <p className="text-sm text-muted-foreground">
          Nota: las referencias listadas cumplen una función pedagógica dentro del proyecto y
          pueden ser complementadas por cada docente según el nivel y contexto educativo.
        </p>
      </section>
    </SiteLayout>
  );
}
