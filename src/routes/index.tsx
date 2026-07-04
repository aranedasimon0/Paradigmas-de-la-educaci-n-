import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Educar con Teorías — El corazón del profesorado | UC Temuco" },
      {
        name: "description",
        content:
          "Plataforma educativa sobre las teorías del aprendizaje: comprender, aplicar y reflexionar sobre modelos conductistas, cognitivistas y constructivistas en la práctica docente.",
      },
      { property: "og:title", content: "Educar con Teorías — El corazón del profesorado" },
      {
        property: "og:description",
        content:
          "Comprende las principales teorías del aprendizaje con ejemplos, principios y aplicaciones para docentes en formación.",
      },
    ],
  }),
  component: Index,
});

const theories = [
  {
    to: "/conductista",
    tag: "Estímulo · Respuesta",
    title: "Teoría Conductista",
    body: "El aprendizaje como cambio observable de conducta, moldeado por refuerzos y castigos en el entorno.",
    accent: "bg-conductista",
  },
  {
    to: "/cognitivista",
    tag: "Procesar · Comprender",
    title: "Teoría Cognitivista",
    body: "El estudiante como procesador activo de información: atención, memoria y estructuras mentales.",
    accent: "bg-cognitivista",
  },
  {
    to: "/constructivista",
    tag: "Construir · Significar",
    title: "Teoría Constructivista",
    body: "El conocimiento se construye a partir de la experiencia, la interacción social y la reflexión.",
    accent: "bg-constructivista",
  },
] as const;

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-14 lg:pt-20 pb-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Proyecto pedagógico · UC Temuco
            </p>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
              Educar con teorías,{" "}
              <span className="italic text-primary">enseñar con propósito.</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/75 max-w-xl leading-relaxed">
              Un recurso interactivo para futuros docentes: comprender las principales teorías
              del aprendizaje, sus autores, principios y aplicaciones en contextos formales e
              informales.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/conductista"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Comenzar el recorrido →
              </Link>
              <Link
                to="/conocenos"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
              >
                Conócenos
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl shadow-primary/10">
              <img
                src={heroImg}
                alt="Estudiantes de pedagogía colaborando en un aula luminosa"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent text-white">
                <p className="font-serif italic text-lg leading-snug">
                  “El objetivo principal de la educación es crear personas capaces de hacer cosas
                  nuevas, y no simplemente repetir lo que otras generaciones hicieron.”
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest opacity-80">— Jean Piaget</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivo */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 py-16 md:py-20 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
              Objetivo del proyecto
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl leading-tight">
              Fortalecer la práctica pedagógica desde la teoría.
            </h2>
          </div>
          <div className="md:col-span-3 text-[17px] leading-relaxed text-foreground/85 space-y-4">
            <p>
              Buscamos que docentes en formación de la UC Temuco reconozcan la aplicación de
              modelos teóricos educativos en situaciones reales de aprendizaje, tanto en el aula
              como en contextos informales.
            </p>
            <p>
              Este sitio articula los principios, autores clave y ejemplos de cada corriente,
              invitando a una reflexión crítica sobre el quehacer profesional en los distintos
              niveles del sistema educativo chileno.
            </p>
          </div>
        </div>
      </section>

      {/* Teorías */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
              Explora las teorías
            </p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">Tres miradas sobre el aprender.</h2>
          </div>
          <Link
            to="/aprendizaje-profundo"
            className="hidden md:inline text-sm text-primary hover:underline underline-offset-4"
          >
            + Aprendizaje profundo →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {theories.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className="group rounded-3xl border border-border bg-card p-7 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 transition-all"
            >
              <div className={`h-2 w-12 rounded-full ${t.accent} mb-6`} />
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {t.tag}
              </p>
              <h3 className="mt-2 font-serif text-2xl">{t.title}</h3>
              <p className="mt-4 text-[15px] text-foreground/75 leading-relaxed">{t.body}</p>
              <p className="mt-6 text-sm font-medium text-primary group-hover:underline underline-offset-4">
                Leer más →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Autores */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.2em] opacity-80">Autores del proyecto</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">
            Un trabajo colaborativo de estudiantes de pedagogía.
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Simón Araneda",
              "Bruno Sandoval",
              "Génesis Contreras",
              "Joaquín Yañez",
            ].map((name) => (
              <div
                key={name}
                className="rounded-2xl bg-primary-foreground/10 border border-primary-foreground/15 p-5"
              >
                <p className="font-serif text-lg">{name}</p>
                <p className="text-xs mt-1 opacity-70">Universidad Católica de Temuco</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
