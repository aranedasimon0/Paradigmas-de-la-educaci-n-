import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  TheoryHero,
  Section,
  AuthorCard,
  PrincipleList,
  ContextExamples,
  TheoryNav,
} from "@/components/theory";
import heroImg from "@/assets/hero-constructivista.jpg";


export const Route = createFileRoute("/constructivista")({
  head: () => ({
    meta: [
      { title: "Teoría Constructivista del Aprendizaje | Educar con Teorías" },
      {
        name: "description",
        content:
          "Principios, autores (Vygotsky, Piaget, Bruner, Ausubel) y aplicaciones del constructivismo: el conocimiento se construye a partir de la experiencia y la interacción social.",
      },
      { property: "og:title", content: "Teoría Constructivista del Aprendizaje" },
      {
        property: "og:description",
        content:
          "Descubre cómo el constructivismo entiende el aprendizaje como construcción activa de significados en interacción con otros.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <TheoryHero
        accent="constructivista"
        eyebrow="Teoría del aprendizaje"
        title="Constructivismo"
        lead="El conocimiento no se transmite, se construye. Aprender es dar sentido a la experiencia mediante la interacción con el mundo y con los otros."
        bgImage={heroImg}
      />


      <Section kicker="Idea central" title="¿Qué propone el constructivismo?" accent="constructivista">
        <p>
          El constructivismo entiende el aprendizaje como un proceso activo, situado y social. El
          estudiante construye significados a partir de sus experiencias previas, en diálogo con
          pares, docentes y contextos culturales.
        </p>
        <p>
          El docente deja de ser transmisor para convertirse en mediador: diseña situaciones
          desafiantes, formula preguntas, ofrece andamiajes y confía en la capacidad de sus
          estudiantes de construir sus propias respuestas.
        </p>
      </Section>

      <Section kicker="Principios" title="Ideas fuerza del enfoque" accent="constructivista">
        <PrincipleList
          items={[
            {
              title: "Construcción activa",
              body: "El estudiante elabora sus propios significados; nadie aprende en su lugar.",
            },
            {
              title: "Interacción social",
              body: "El otro (par, docente, comunidad) es fuente y regulador del aprendizaje.",
            },
            {
              title: "Zona de desarrollo próximo",
              body: "Se aprende mejor con ayuda, en la brecha entre lo que se puede solo y lo que se puede con apoyo.",
            },
            {
              title: "Andamiaje",
              body: "El docente sostiene el proceso y retira apoyos a medida que el estudiante progresa.",
            },
            {
              title: "Aprendizaje situado",
              body: "El contexto y la cultura influyen decisivamente en lo que se aprende y cómo se aprende.",
            },
          ]}
        />
      </Section>

      <Section kicker="Autores clave" title="Voces que construyen el enfoque" accent="constructivista">
        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-6">
          <AuthorCard
            accent="constructivista"
            name="Lev Vygotsky"
            years="1896 — 1934"
            contribution="Enfatiza el papel del lenguaje, la cultura y la interacción social; formula la zona de desarrollo próximo."
          />
          <AuthorCard
            accent="constructivista"
            name="Jean Piaget"
            years="1896 — 1980"
            contribution="Aporta la mirada del constructivismo cognitivo: el sujeto reorganiza estructuras a través de la experiencia."
          />
          <AuthorCard
            accent="constructivista"
            name="Jerome Bruner"
            years="1915 — 2016"
            contribution="Propone el aprendizaje por descubrimiento y la importancia de la narrativa en la construcción del conocimiento."
          />
          <AuthorCard
            accent="constructivista"
            name="David Ausubel"
            years="1918 — 2008"
            contribution="Vincula la construcción con la significatividad: se aprende integrando lo nuevo con los saberes previos."
          />
        </div>
      </Section>

      <Section kicker="Aplicación" title="El constructivismo en el aula y más allá" accent="constructivista">
        <p>
          Es el enfoque más presente en el currículo chileno actual. Se despliega en proyectos,
          indagaciones, trabajo colaborativo y reflexión guiada.
        </p>
        <ContextExamples
          accent="constructivista"
          formal={[
            "Aprendizaje Basado en Proyectos (ABP) en enseñanza media.",
            "Discusiones socráticas y debates guiados sobre problemas auténticos.",
            "Talleres de indagación científica donde los estudiantes formulan hipótesis.",
          ]}
          informal={[
            "Aprender un idioma conversando con hablantes nativos en la comunidad.",
            "Comunidades de práctica en internet donde se construye conocimiento colectivo.",
            "Juego simbólico y de roles entre pares en el patio o en el barrio.",
          ]}
        />
      </Section>

      <Section kicker="Mirada crítica" title="Tensiones a considerar" accent="constructivista">
        <ul className="list-disc pl-5 space-y-2">
          <li>Requiere tiempos y espacios que no siempre existen en aulas numerosas.</li>
          <li>Exige del docente una alta preparación disciplinar y didáctica.</li>
          <li>Puede diluir el rol del contenido si no se orienta con intencionalidad.</li>
        </ul>
      </Section>

      <TheoryNav current="constructivista" />
    </SiteLayout>
  );
}
