import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/conocenos")({
  head: () => ({
    meta: [
      { title: "Conócenos — Educar con Teorías | UC Temuco" },
      {
        name: "description",
        content:
          "Conoce al equipo detrás de Educar con Teorías: estudiantes de pedagogía de la UC Temuco que crearon este recurso sobre teorías del aprendizaje.",
      },
      { property: "og:title", content: "Conócenos — Educar con Teorías" },
      {
        property: "og:description",
        content:
          "Estudiantes de pedagogía de la UC Temuco comparten su proyecto sobre teorías del aprendizaje.",
      },
    ],
  }),
  component: Conocenos,
});

const authors = [
  {
    name: "Simón Araneda",
    role: "Investigación y contenidos",
    text: "Estudiante de pedagogía UC Temuco. Aporta a la sistematización teórica y a los ejemplos aplicados de cada corriente.",
  },
  {
    name: "Bruno Sandoval",
    role: "Diseño pedagógico",
    text: "Enfocado en articular las teorías con contextos formales e informales del sistema educativo chileno.",
  },
  {
    name: "Génesis Contreras",
    role: "Revisión bibliográfica",
    text: "Curó las referencias, autores clave y críticas contemporáneas a cada modelo teórico presentado.",
  },
  {
    name: "Joaquín Yañez",
    role: "Estructura y estilo",
    text: "Responsable de la coherencia narrativa, la organización de las secciones y la voz del sitio.",
  },
];

function Conocenos() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-5 lg:px-8 pt-16 pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Quiénes somos</p>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05]">
          Cuatro estudiantes, <span className="italic text-primary">una vocación compartida.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
          Somos estudiantes de pedagogía de la Universidad Católica de Temuco. Este sitio nació
          como una invitación a pensar la enseñanza desde la teoría, sin perder de vista la
          experiencia real en las aulas.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-8 py-10 grid sm:grid-cols-2 gap-5">
        {authors.map((a) => (
          <article
            key={a.name}
            className="rounded-2xl border border-border bg-card p-7"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
              {a.role}
            </p>
            <h2 className="mt-2 font-serif text-2xl">{a.name}</h2>
            <p className="mt-3 text-[15px] text-foreground/80 leading-relaxed">{a.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-8 py-16">
        <div className="rounded-3xl bg-secondary/60 p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Nuestra motivación
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl max-w-3xl">
            Comprender cómo aprenden nuestros futuros estudiantes es la primera forma de
            respetarlos.
          </h2>
          <p className="mt-6 max-w-3xl text-[17px] text-foreground/80 leading-relaxed">
            Las teorías del aprendizaje no son etiquetas: son lentes para observar, decidir y
            transformar la práctica pedagógica. Aquí las presentamos con sus principios, sus
            autores, sus ejemplos y también sus críticas, porque todo docente debe elegir con
            criterio qué modelo activar en cada situación.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
