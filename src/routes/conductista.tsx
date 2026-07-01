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

export const Route = createFileRoute("/conductista")({
  head: () => ({
    meta: [
      { title: "Teoría Conductista del Aprendizaje | Educar con Teorías" },
      {
        name: "description",
        content:
          "Principios, autores clave (Watson, Pavlov, Skinner, Thorndike), ejemplos y críticas de la teoría conductista aplicada a la práctica docente.",
      },
      { property: "og:title", content: "Teoría Conductista del Aprendizaje" },
      {
        property: "og:description",
        content:
          "Aprende cómo el conductismo explica el aprendizaje como cambio observable de conducta y su aplicación en el aula.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <TheoryHero
        accent="conductista"
        eyebrow="Teoría del aprendizaje"
        title="Conductismo"
        lead="El aprendizaje entendido como un cambio observable en la conducta, resultado de la interacción entre estímulos del entorno y respuestas del sujeto."
      />

      <Section kicker="Idea central" title="¿Qué propone el conductismo?" accent="conductista">
        <p>
          El conductismo surge a principios del siglo XX como reacción a los enfoques
          introspectivos de la psicología. Para esta corriente, aprender significa modificar la
          conducta de manera observable y medible a partir de la relación entre estímulos y
          respuestas, moldeada por refuerzos y castigos.
        </p>
        <p>
          Bajo este paradigma, el estudiante es concebido como un receptor cuyas conductas pueden
          ser predichas y controladas si se manipula adecuadamente el ambiente. La enseñanza se
          organiza en objetivos claros, secuencias graduadas y retroalimentación inmediata.
        </p>
      </Section>

      <Section kicker="Principios" title="Cinco ideas para reconocerlo" accent="conductista">
        <PrincipleList
          items={[
            {
              title: "Aprender = cambiar de conducta",
              body: "Solo se considera aprendizaje aquello que puede observarse en el comportamiento del estudiante.",
            },
            {
              title: "Estímulo y respuesta",
              body: "Toda conducta se explica como respuesta a un estímulo del entorno, previamente asociado o reforzado.",
            },
            {
              title: "Refuerzo y castigo",
              body: "El refuerzo positivo o negativo aumenta la probabilidad de una conducta; el castigo la disminuye.",
            },
            {
              title: "Repetición y práctica",
              body: "La consolidación del aprendizaje ocurre mediante ejercitación sistemática y consistente.",
            },
            {
              title: "Objetivos observables",
              body: "La enseñanza se planifica en base a metas conductuales medibles y evaluables.",
            },
          ]}
        />
      </Section>

      <Section kicker="Autores clave" title="Cuatro voces que definieron el paradigma" accent="conductista">
        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-6">
          <AuthorCard
            accent="conductista"
            name="Iván Pávlov"
            years="1849 — 1936"
            contribution="Descubre el condicionamiento clásico: asociación entre un estímulo neutro y una respuesta refleja."
          />
          <AuthorCard
            accent="conductista"
            name="John B. Watson"
            years="1878 — 1958"
            contribution="Padre del conductismo. Postula que la psicología debe estudiar sólo la conducta observable."
          />
          <AuthorCard
            accent="conductista"
            name="Edward Thorndike"
            years="1874 — 1949"
            contribution="Formula la ley del efecto: las conductas seguidas de consecuencias satisfactorias tienden a repetirse."
          />
          <AuthorCard
            accent="conductista"
            name="B. F. Skinner"
            years="1904 — 1990"
            contribution="Desarrolla el condicionamiento operante y el uso sistemático del refuerzo en la enseñanza programada."
          />
        </div>
      </Section>

      <Section kicker="Aplicación" title="En qué situaciones se reconoce" accent="conductista">
        <p>
          El conductismo sigue vigente en muchas prácticas educativas, especialmente cuando el
          objetivo es adquirir hábitos, automatizar procedimientos o modelar comportamientos.
        </p>
        <ContextExamples
          accent="conductista"
          formal={[
            "Sistema de puntos o economía de fichas en aulas de educación básica.",
            "Ejercitación repetida de cálculo mental o tablas de multiplicar.",
            "Instrucción directa con objetivos conductuales evaluados mediante rúbrica.",
          ]}
          informal={[
            "Aprender a andar en bicicleta con refuerzo verbal de los padres.",
            "Aplicaciones móviles con notificaciones y logros por rachas diarias.",
            "Entrenamiento deportivo basado en repetición y feedback inmediato.",
          ]}
        />
      </Section>

      <Section kicker="Mirada crítica" title="Limitaciones que un docente debe considerar" accent="conductista">
        <ul className="list-disc pl-5 space-y-2">
          <li>Reduce el aprendizaje a lo observable, dejando de lado los procesos mentales.</li>
          <li>Puede favorecer la motivación externa por sobre el interés genuino del estudiante.</li>
          <li>Corre el riesgo de mecanizar la enseñanza si no se combina con otros enfoques.</li>
          <li>Su aplicación acrítica puede vulnerar la autonomía y la diversidad del aula.</li>
        </ul>
      </Section>

      <TheoryNav current="conductista" />
    </SiteLayout>
  );
}
