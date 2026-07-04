import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  TheoryHero,
  Section,
  AuthorCard,
  PrincipleList,
  ContextExamples,
  TheoryNav,
  VideoEmbed,
  Gallery,
  Citation,
} from "@/components/theory";
import heroImg from "@/assets/hero-cognitivista.jpg";


export const Route = createFileRoute("/cognitivista")({
  head: () => ({
    meta: [
      { title: "Teoría Cognitivista del Aprendizaje | Educar con Teorías" },
      {
        name: "description",
        content:
          "Principios, autores (Piaget, Ausubel, Bruner, Gagné) y aplicaciones del cognitivismo: el estudiante como procesador activo de información.",
      },
      { property: "og:title", content: "Teoría Cognitivista del Aprendizaje" },
      {
        property: "og:description",
        content:
          "Descubre cómo el enfoque cognitivo explica atención, memoria y comprensión en el aprendizaje escolar.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <TheoryHero
        accent="cognitivista"
        eyebrow="Teoría del aprendizaje"
        title="Cognitivismo"
        lead="Aprender es procesar, organizar y almacenar información. El estudiante es un sujeto activo cuyos procesos mentales dan sentido al mundo."
        bgImage={heroImg}
      />


      <Section kicker="Idea central" title="¿Qué propone el cognitivismo?" accent="cognitivista">
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
        <Citation
          accent="cognitivista"
          quote="Si tuviera que reducir toda la psicología educativa a un solo principio, enunciaría este: el factor más importante que influye en el aprendizaje es lo que el alumno ya sabe. Averígüese esto y enséñese en consecuencia."
          author="Ausubel"
          year="1968"
          page="vi"
          reference={
            <>
              Ausubel, D. P. (1968). <em>Educational psychology: A cognitive view</em>. Holt, Rinehart &amp; Winston.
            </>
          }
        />
      </Section>

      <Section kicker="Principios" title="Ideas clave del enfoque" accent="cognitivista">
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

      <Section kicker="Autores clave" title="Referentes del enfoque cognitivo" accent="cognitivista">
        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-6">
          <AuthorCard
            accent="cognitivista"
            name="Jean Piaget"
            years="1896 — 1980"
            contribution="Describe estadios del desarrollo cognitivo y los mecanismos de asimilación y acomodación."
          />
          <AuthorCard
            accent="cognitivista"
            name="David Ausubel"
            years="1918 — 2008"
            contribution="Formula la teoría del aprendizaje significativo y el papel de los organizadores previos."
          />
          <AuthorCard
            accent="cognitivista"
            name="Jerome Bruner"
            years="1915 — 2016"
            contribution="Propone el aprendizaje por descubrimiento y el currículo en espiral."
          />
          <AuthorCard
            accent="cognitivista"
            name="Robert Gagné"
            years="1916 — 2002"
            contribution="Sistematiza las condiciones internas y externas del aprendizaje en eventos instruccionales."
          />
        </div>
      </Section>

      <Section kicker="Aplicación" title="El cognitivismo en la práctica" accent="cognitivista">
        <p>
          Cuando el objetivo es comprender, relacionar y transferir conocimientos, el enfoque
          cognitivo aporta estrategias potentes tanto en el aula como fuera de ella.
        </p>
        <ContextExamples
          accent="cognitivista"
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
        <Citation
          accent="cognitivista"
          quote="Cualquier materia puede enseñarse de manera intelectualmente honesta a cualquier niño en cualquier etapa de su desarrollo."
          author="Bruner"
          year="1966"
          page="33"
          reference={
            <>
              Bruner, J. S. (1966). <em>Toward a theory of instruction</em>. Harvard University Press.
            </>
          }
        />
      </Section>

      <Section kicker="Mirada crítica" title="Aspectos a tener presentes" accent="cognitivista">
        <ul className="list-disc pl-5 space-y-2">
          <li>Puede sobrevalorar los procesos individuales y desatender la dimensión social.</li>
          <li>Su aplicación exige planificación cuidadosa y buen dominio disciplinar del docente.</li>
          <li>No siempre visibiliza los factores emocionales y motivacionales del aprender.</li>
        </ul>
      </Section>

      <VideoEmbed
        accent="cognitivista"
        videoId="jVV3N4T7X7s"
        title="Cognitivismo: entendiendo el aprendizaje y la mente"
        caption="Pedagogía Digital · Piaget, Bruner, Ausubel y el procesamiento de la información."
      />

      <Gallery
        accent="cognitivista"
        title="Procesar, organizar, comprender"
        images={[
          { src: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?auto=format&fit=crop&w=1000&q=70", alt: "Ilustración del cerebro y sinapsis", caption: "Los procesos internos son el foco del aprender" },
          { src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=700&q=70", alt: "Estudiante leyendo con concentración" },
          { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=70", alt: "Mapa mental dibujado a mano" },
          { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=70", alt: "Niña resolviendo un problema" },
          { src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=700&q=70", alt: "Piezas de ajedrez, planificación estratégica" },
        ]}
      />

      <TheoryNav current="cognitivista" />
    </SiteLayout>
  );
}
