import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/juegos")({
  head: () => ({
    meta: [
      { title: "Juegos interactivos | Educar con Teorías" },
      {
        name: "description",
        content:
          "Pon a prueba lo aprendido con quiz de teorías del aprendizaje, emparejar autores y verdadero o falso.",
      },
      { property: "og:title", content: "Juegos interactivos · Educar con Teorías" },
      {
        property: "og:description",
        content: "Aprende jugando: quiz, emparejamiento y verdadero/falso sobre las teorías del aprendizaje.",
      },
    ],
  }),
  component: JuegosPage,
});

/* ---------------------------- QUIZ ---------------------------- */

type Q = {
  q: string;
  options: string[];
  answer: number;
  explanation: string;
};

const QUIZ: Q[] = [
  {
    q: "¿Qué teoría concibe el aprendizaje como un cambio observable en la conducta?",
    options: ["Conductismo", "Cognitivismo", "Constructivismo", "Aprendizaje profundo"],
    answer: 0,
    explanation: "El conductismo (Watson, Skinner, Pávlov) se centra en la conducta observable.",
  },
  {
    q: "¿Quién formuló la 'Zona de Desarrollo Próximo'?",
    options: ["Piaget", "Vygotsky", "Ausubel", "Skinner"],
    answer: 1,
    explanation: "Vygotsky propuso la ZDP: lo que se puede lograr con ayuda del otro más capaz.",
  },
  {
    q: "El aprendizaje significativo, que integra lo nuevo con los saberes previos, fue propuesto por:",
    options: ["Bruner", "Ausubel", "Gagné", "Thorndike"],
    answer: 1,
    explanation: "David Ausubel formuló la teoría del aprendizaje significativo.",
  },
  {
    q: "El condicionamiento operante y el refuerzo se asocian a:",
    options: ["Pávlov", "Piaget", "Skinner", "Vygotsky"],
    answer: 2,
    explanation: "B. F. Skinner desarrolló el condicionamiento operante.",
  },
  {
    q: "¿Qué enfoque privilegia proyectos, indagación y trabajo colaborativo?",
    options: ["Conductismo", "Constructivismo", "Instrucción directa", "Conductismo radical"],
    answer: 1,
    explanation: "El constructivismo se apoya en experiencias auténticas y colaborativas.",
  },
  {
    q: "Las 6 C (carácter, ciudadanía, colaboración, comunicación, creatividad y pensamiento crítico) pertenecen a:",
    options: ["Piaget", "Fullan (Aprendizaje profundo)", "Skinner", "Ausubel"],
    answer: 1,
    explanation: "Michael Fullan describe estas 6 competencias del aprendizaje profundo.",
  },
  {
    q: "Los organizadores previos y mapas conceptuales son estrategias típicas del enfoque:",
    options: ["Conductista", "Cognitivista", "Skinneriano", "Pavloviano"],
    answer: 1,
    explanation: "Son herramientas cognitivas para organizar la información.",
  },
];

function Quiz() {
  const [i, setI] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = QUIZ[i];

  const next = () => {
    if (selected === null) return;
    if (selected === current.answer) setScore((s) => s + 1);
    if (i + 1 >= QUIZ.length) {
      setDone(true);
    } else {
      setI(i + 1);
      setSelected(null);
    }
  };

  const reset = () => {
    setI(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  if (done) {
    const pct = Math.round((score / QUIZ.length) * 100);
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Resultado</p>
        <p className="mt-3 font-serif text-5xl">
          {score} <span className="text-muted-foreground text-3xl">/ {QUIZ.length}</span>
        </p>
        <p className="mt-2 text-foreground/75">Obtuviste un {pct}% de aciertos.</p>
        <button
          onClick={reset}
          className="mt-6 inline-flex rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90"
        >
          Volver a jugar
        </button>
      </div>
    );
  }

  const revealed = selected !== null;

  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Pregunta {i + 1} de {QUIZ.length}</span>
        <span>Puntaje: {score}</span>
      </div>
      <div className="mt-2 h-1.5 w-full bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${((i) / QUIZ.length) * 100}%` }}
        />
      </div>
      <h3 className="mt-6 font-serif text-2xl leading-snug">{current.q}</h3>
      <div className="mt-5 grid gap-2">
        {current.options.map((opt, idx) => {
          const isCorrect = idx === current.answer;
          const isPicked = idx === selected;
          const cls = revealed
            ? isCorrect
              ? "border-emerald-500 bg-emerald-500/10"
              : isPicked
              ? "border-red-500 bg-red-500/10"
              : "border-border opacity-60"
            : isPicked
            ? "border-primary bg-primary/5"
            : "border-border hover:bg-muted";
          return (
            <button
              key={opt}
              disabled={revealed}
              onClick={() => setSelected(idx)}
              className={`text-left rounded-xl border px-4 py-3 text-sm transition-colors ${cls}`}
            >
              <span className="font-medium mr-2">{String.fromCharCode(65 + idx)}.</span>
              {opt}
            </button>
          );
        })}
      </div>
      {revealed && (
        <p className="mt-4 text-sm text-foreground/75 italic">💡 {current.explanation}</p>
      )}
      <div className="mt-6 flex justify-end">
        <button
          onClick={next}
          disabled={selected === null}
          className="inline-flex rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {i + 1 === QUIZ.length ? "Ver resultado" : "Siguiente →"}
        </button>
      </div>
    </div>
  );
}

/* ---------------------------- MATCH ---------------------------- */

type Pair = { author: string; theory: string; accent: string };
const PAIRS: Pair[] = [
  { author: "Iván Pávlov", theory: "Conductismo", accent: "bg-conductista" },
  { author: "B. F. Skinner", theory: "Conductismo", accent: "bg-conductista" },
  { author: "Jean Piaget", theory: "Cognitivismo", accent: "bg-cognitivista" },
  { author: "David Ausubel", theory: "Cognitivismo", accent: "bg-cognitivista" },
  { author: "Lev Vygotsky", theory: "Constructivismo", accent: "bg-constructivista" },
  { author: "Jerome Bruner", theory: "Constructivismo", accent: "bg-constructivista" },
  { author: "Michael Fullan", theory: "Aprendizaje profundo", accent: "bg-profundo" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Match() {
  const [seed, setSeed] = useState(0);
  const authors = useMemo(() => shuffle(PAIRS), [seed]);
  const theories = useMemo(
    () => Array.from(new Set(PAIRS.map((p) => p.theory))),
    [],
  );
  const [assignments, setAssignments] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const setChoice = (author: string, theory: string) => {
    setAssignments((prev) => ({ ...prev, [author]: theory }));
  };

  const correct = authors.filter((p) => assignments[p.author] === p.theory).length;
  const total = authors.length;
  const allAnswered = authors.every((p) => assignments[p.author]);

  const reset = () => {
    setAssignments({});
    setChecked(false);
    setSeed((s) => s + 1);
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
      <p className="text-sm text-foreground/75">
        Selecciona a qué teoría pertenece cada autor. Cuando termines, presiona{" "}
        <span className="font-medium">Comprobar</span>.
      </p>
      <div className="mt-6 grid gap-3">
        {authors.map((p) => {
          const picked = assignments[p.author];
          const isCorrect = checked && picked === p.theory;
          const isWrong = checked && picked && picked !== p.theory;
          return (
            <div
              key={p.author}
              className={`rounded-2xl border p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 ${
                isCorrect
                  ? "border-emerald-500 bg-emerald-500/5"
                  : isWrong
                  ? "border-red-500 bg-red-500/5"
                  : "border-border"
              }`}
            >
              <div className="flex items-center gap-3 flex-1">
                <span className={`h-8 w-1.5 rounded-full ${p.accent}`} />
                <p className="font-serif text-lg">{p.author}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {theories.map((t) => {
                  const active = picked === t;
                  return (
                    <button
                      key={t}
                      disabled={checked}
                      onClick={() => setChoice(p.author, t)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                        active
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:bg-muted"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
              {checked && isWrong && (
                <span className="text-xs text-red-600 sm:ml-2">→ {p.theory}</span>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        {checked ? (
          <p className="text-sm">
            <span className="font-medium">{correct}</span> de {total} correctos.
          </p>
        ) : (
          <p className="text-xs text-muted-foreground">
            {Object.keys(assignments).length} / {total} respondidos
          </p>
        )}
        <div className="flex gap-2">
          <button
            onClick={reset}
            className="rounded-full border border-border px-5 py-2 text-sm hover:bg-muted"
          >
            Reiniciar
          </button>
          <button
            disabled={!allAnswered || checked}
            onClick={() => setChecked(true)}
            className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Comprobar
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- TRUE / FALSE ---------------------------- */

const TF = [
  { s: "Para Skinner, el refuerzo aumenta la probabilidad de que una conducta se repita.", a: true },
  { s: "Vygotsky sostiene que el aprendizaje ocurre solo de forma individual, sin mediación social.", a: false },
  { s: "Piaget describió estadios del desarrollo cognitivo del niño.", a: true },
  { s: "El aprendizaje significativo de Ausubel prescinde de los conocimientos previos.", a: false },
  { s: "El aprendizaje profundo busca comprensión, transferencia y ciudadanía, no memorización.", a: true },
  { s: "Los organizadores previos son una estrategia conductista.", a: false },
];

function TrueFalse() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);

  const answer = (i: number, v: boolean) => setAnswers((p) => ({ ...p, [i]: v }));
  const correct = TF.filter((t, i) => answers[i] === t.a).length;
  const allDone = TF.every((_, i) => answers[i] !== undefined);

  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
      <ul className="space-y-3">
        {TF.map((t, i) => {
          const picked = answers[i];
          const isCorrect = checked && picked === t.a;
          const isWrong = checked && picked !== undefined && picked !== t.a;
          return (
            <li
              key={i}
              className={`rounded-2xl border p-4 flex flex-col sm:flex-row sm:items-center gap-3 ${
                isCorrect
                  ? "border-emerald-500 bg-emerald-500/5"
                  : isWrong
                  ? "border-red-500 bg-red-500/5"
                  : "border-border"
              }`}
            >
              <p className="flex-1 text-sm">{t.s}</p>
              <div className="flex gap-2">
                {[
                  { label: "Verdadero", v: true },
                  { label: "Falso", v: false },
                ].map((o) => (
                  <button
                    key={o.label}
                    disabled={checked}
                    onClick={() => answer(i, o.v)}
                    className={`text-xs px-3 py-1.5 rounded-full border ${
                      picked === o.v
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-6 flex justify-between items-center gap-3">
        {checked ? (
          <p className="text-sm">
            <span className="font-medium">{correct}</span> de {TF.length} correctas
          </p>
        ) : (
          <span className="text-xs text-muted-foreground" />
        )}
        <div className="flex gap-2">
          <button
            onClick={() => {
              setAnswers({});
              setChecked(false);
            }}
            className="rounded-full border border-border px-5 py-2 text-sm hover:bg-muted"
          >
            Reiniciar
          </button>
          <button
            disabled={!allDone || checked}
            onClick={() => setChecked(true)}
            className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Comprobar
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- PAGE ---------------------------- */

type Tab = "quiz" | "match" | "tf";

function JuegosPage() {
  const [tab, setTab] = useState<Tab>("quiz");

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=70')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8 py-16 md:py-24">
          <p className="text-xs uppercase tracking-[0.2em] opacity-80">Zona interactiva</p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl leading-[1.05]">
            Aprende jugando.
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/90 text-lg">
            Tres juegos rápidos para poner a prueba lo que aprendiste sobre las teorías del
            aprendizaje.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-12 md:py-16">
        <div className="inline-flex rounded-full border border-border bg-card p-1 mb-8 flex-wrap gap-1">
          {(
            [
              { id: "quiz", label: "Quiz" },
              { id: "match", label: "Emparejar autores" },
              { id: "tf", label: "Verdadero / Falso" },
            ] as { id: Tab; label: string }[]
          ).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                tab === t.id
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:bg-muted"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "quiz" && <Quiz />}
        {tab === "match" && <Match />}
        {tab === "tf" && <TrueFalse />}
      </section>
    </SiteLayout>
  );
}
