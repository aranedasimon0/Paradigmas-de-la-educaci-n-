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
import heroImg from "@/assets/hero-cognoscitivista.jpg";


export const Route = createFileRoute("/cognoscitivista")({
  head: () => ({
    meta: [
      { title: "Teoría Cognoscitivista del Aprendizaje | Educar con Teorías" },
      {
        name: "description",
        content:
          "Principios, autores (Piaget, Ausubel, Bruner, Gagné) y aplicaciones del cognoscitivismo: el estudiante como procesador activo de información.",
      },
      { property: "og:title", content: "Teoría Cognoscitivista del Aprendizaje" },
      {
        property: "og:description",
        content:
          "Descubre cómo el enfoque cognoscitivo explica atención, memoria y comprensión en el aprendizaje escolar.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <TheoryHero
        accent="cognoscitivista"
        eyebrow="Teoría del aprendizaje"
        title="Cognoscitivismo"
        lead="Aprender es procesar, organizar y almacenar información. El estudiante es un sujeto activo cuyos procesos mentales dan sentido al mundo."
        bgImage={heroImg}
      />


      <Section kicker="Idea central" title="¿Qué propone el cognoscitivismo?" accent="cognoscitivista">
        <p>
          A partir de la segunda mitad del siglo XX, la psicología cognitiva puso el foco en los
          procesos internos que ocurren entre el estímulo y la respuesta: atención, percepción,
          memoria, lenguaje y resolución de problemas.
        </p>
        <p>
          El aprendizaje no es una copia de la realidad, sino una reorganización de las
          estructuras mentales del estudiante. Enseñar implica presentar la información de forma
          significativa y ayudar a construir esquemas cada vez más complejos.
        </p>
      </Section>

      <Section kicker="Principios" title="Ideas clave del enfoque" accent="cognoscitivista">
        <PrincipleList
          items={[
            {
              title: "Estudiante activo",
              body: "Procesa la información: selecciona, interpreta y organiza los estímulos que recibe.",
            },
            {
              title: "Estructuras mentales",
              body: "El aprendizaje modifica esquemas previos, integrando nuevos conocimientos con los existentes.",
            },
            {
              title: "Aprendizaje significativo",
              body: "Se aprende de verdad cuando lo nuevo se conecta de manera sustantiva con lo que ya se sabe.",
            },
            {
              title: "Metacognición",
              body: "Reflexionar sobre cómo se aprende mejora la calidad y transferencia de lo aprendido.",
            },
            {
              title: "Organización de la enseñanza",
              body: "El docente ordena la información en jerarquías, mapas y organizadores previos.",
            },
          ]}
        />
      </Section>

      <Section kicker="Autores clave" title="Referentes del enfoque cognitivo" accent="cognoscitivista">
        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-6">
          <AuthorCard
            accent="cognoscitivista"
            name="Jean Piaget"
            years="1896 — 1980"
            contribution="Describe estadios del desarrollo cognitivo y los mecanismos de asimilación y acomodación."
          />
          <AuthorCard
            accent="cognoscitivista"
            name="David Ausubel"
            years="1918 — 2008"
            contribution="Formula la teoría del aprendizaje significativo y el papel de los organizadores previos."
          />
          <AuthorCard
            accent="cognoscitivista"
            name="Jerome Bruner"
            years="1915 — 2016"
            contribution="Propone el aprendizaje por descubrimiento y el currículo en espiral."
          />
          <AuthorCard
            accent="cognoscitivista"
            name="Robert Gagné"
            years="1916 — 2002"
            contribution="Sistematiza las condiciones internas y externas del aprendizaje en eventos instruccionales."
          />
        </div>
      </Section>

      <Section kicker="Aplicación" title="El cognoscitivismo en la práctica" accent="cognoscitivista">
        <p>
          Cuando el objetivo es comprender, relacionar y transferir conocimientos, el enfoque
          cognoscitivo aporta estrategias potentes tanto en el aula como fuera de ella.
        </p>
        <ContextExamples
          accent="cognoscitivista"
          formal={[
            "Uso de mapas conceptuales y organizadores gráficos en secundaria.",
            "Actividades de resolución de problemas contextualizados en ciencias.",
            "Retroalimentación centrada en el proceso de pensamiento, no sólo en la respuesta.",
          ]}
          informal={[
            "Documentales y videos explicativos que estructuran ideas en categorías.",
            "Juegos de estrategia que exigen planificación y memoria de trabajo.",
            "Conversaciones familiares que hacen preguntas metacognitivas al niño o niña.",
          ]}
        />
      </Section>

      <Section kicker="Mirada crítica" title="Aspectos a tener presentes" accent="cognoscitivista">
        <ul className="list-disc pl-5 space-y-2">
          <li>Puede sobrevalorar los procesos individuales y desatender la dimensión social.</li>
          <li>Su aplicación exige planificación cuidadosa y buen dominio disciplinar del docente.</li>
          <li>No siempre visibiliza los factores emocionales y motivacionales del aprender.</li>
        </ul>
      </Section>

      <TheoryNav current="cognoscitivista" />
    </SiteLayout>
  );
}
