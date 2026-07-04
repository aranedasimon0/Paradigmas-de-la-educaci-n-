import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  TheoryHero,
  Section,
  PrincipleList,
  ContextExamples,
  TheoryNav,
  VideoEmbed,
  Gallery,
  Citation,
} from "@/components/theory";
import heroImg from "@/assets/hero-profundo.jpg";


export const Route = createFileRoute("/aprendizaje-profundo")({
  head: () => ({
    meta: [
      { title: "Aprendizaje Profundo | Educar con Teorías" },
      {
        name: "description",
        content:
          "Qué es el aprendizaje profundo, sus dimensiones (Fullan) y cómo llevarlo a la práctica docente en contextos formales e informales.",
      },
      { property: "og:title", content: "Aprendizaje Profundo" },
      {
        property: "og:description",
        content:
          "Un enfoque contemporáneo que integra las teorías del aprendizaje para formar ciudadanía crítica y competencias del siglo XXI.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <TheoryHero
        accent="profundo"
        eyebrow="Enfoque contemporáneo"
        title="Aprendizaje Profundo"
        lead="Más que memorizar contenidos: aprender de forma duradera, transferible y significativa para la vida y la ciudadanía."
        bgImage={heroImg}
      />


      <Section kicker="Idea central" title="¿Qué es el aprendizaje profundo?" accent="profundo">
        <p>
          El aprendizaje profundo (deep learning en la propuesta de Michael Fullan) integra las
          teorías clásicas y las orienta a resultados de alto valor: pensamiento crítico,
          creatividad, colaboración, ciudadanía, comunicación y carácter.
        </p>
        <p>
          A diferencia del aprendizaje superficial —centrado en repetir información—, el
          aprendizaje profundo busca que el estudiante comprenda, relacione, aplique y
          transforme aquello que aprende, tanto dentro como fuera de la escuela.
        </p>
        <Citation
          accent="profundo"
          quote="El aprendizaje profundo es el proceso de adquirir las seis competencias globales: carácter, ciudadanía, colaboración, comunicación, creatividad y pensamiento crítico."
          author="Fullan et al."
          year="2018"
          page="17"
          reference={
            <>
              Fullan, M., Quinn, J., &amp; McEachen, J. (2018). <em>Deep learning: Engage the world, change the world</em>. Corwin.
            </>
          }
        />
      </Section>

      <Section kicker="Las 6 C" title="Dimensiones del aprendizaje profundo" accent="profundo">
        <PrincipleList
          items={[
            { title: "Carácter", body: "Perseverancia, empatía y responsabilidad por el propio aprendizaje." },
            { title: "Ciudadanía", body: "Compromiso con problemas locales y globales desde una perspectiva ética." },
            { title: "Colaboración", body: "Trabajar con otros, gestionar equipos y aprender del diálogo." },
            { title: "Comunicación", body: "Expresarse con claridad en múltiples formatos y audiencias." },
            { title: "Creatividad", body: "Generar ideas nuevas y buscar soluciones originales a problemas reales." },
            { title: "Pensamiento crítico", body: "Evaluar información, argumentar y tomar decisiones fundadas." },
          ]}
        />
      </Section>

      <Section kicker="Aplicación" title="Cómo se ve en la práctica" accent="profundo">
        <p>
          El aprendizaje profundo se activa cuando la enseñanza articula contenidos, procesos y
          contextos con propósito. No es una técnica, sino una manera de diseñar experiencias.
        </p>
        <ContextExamples
          accent="profundo"
          formal={[
            "Proyectos interdisciplinares que abordan problemas de la comunidad escolar.",
            "Evaluaciones auténticas: portafolios, presentaciones y producciones reales.",
            "Aulas donde el error se discute como oportunidad de aprendizaje.",
          ]}
          informal={[
            "Voluntariados y participación en organizaciones sociales del entorno.",
            "Creación de contenido propio en plataformas digitales con impacto real.",
            "Espacios de mentoría entre pares o intergeneracionales.",
          ]}
        />
        <Citation
          accent="profundo"
          quote="El aprendizaje pleno consiste en jugar el juego completo desde el comienzo, aunque sea una versión reducida, en lugar de practicar por años las partes por separado."
          author="Perkins"
          year="2010"
          page="24"
          reference={
            <>
              Perkins, D. (2010). <em>El aprendizaje pleno: Principios de la enseñanza para transformar la educación</em>. Paidós.
            </>
          }
        />
      </Section>

      <VideoEmbed
        accent="profundo"
        videoId="nXQe7I5WBXs"
        title="Cómo cambia nuestro cerebro al aprender"
        caption="David Bueno (Aprendemos Juntos, BBVA) · Neurociencia y aprendizaje profundo."
      />

      <Gallery
        accent="profundo"
        title="Aprender para transformar"
        images={[
          { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=70", alt: "Equipo colaborando en un proyecto", caption: "Proyectos con propósito e impacto real" },
          { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=70", alt: "Estudiantes en un aula moderna" },
          { src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=700&q=70", alt: "Laboratorio de ciencias escolar" },
          { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=700&q=70", alt: "Estudiante reflexionando" },
          { src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=700&q=70", alt: "Trabajo comunitario" },
        ]}
      />

      <TheoryNav current="profundo" />
    </SiteLayout>
  );
}
