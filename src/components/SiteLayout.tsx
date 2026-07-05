import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
const logoUrl = "/uct-logo.png";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/conocenos", label: "Conócenos" },
  { to: "/conductista", label: "Conductista" },
  { to: "/cognitivista", label: "Cognitivista" },
  { to: "/constructivista", label: "Constructivista" },
  { to: "/aprendizaje-profundo", label: "Aprendizaje Profundo" },
  { to: "/juegos", label: "Juegos" },
  { to: "/referencias", label: "Referencias" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const path = location.pathname;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 h-20 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="bg-[var(--logo-bg)] rounded-lg p-1.5">
              <img src={logoUrl} alt="Universidad Católica de Temuco" className="h-16 md:h-20 w-auto" />
            </div>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-serif text-[17px] font-semibold">Educar con Teorías</span>
              <span className="text-[11px] text-muted-foreground tracking-wide uppercase">UC Temuco · Pedagogía</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => {
              const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    active
                      ? "text-primary font-medium bg-primary/8"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            aria-label="Abrir menú"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6l-12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <nav className="lg:hidden border-t border-border px-5 py-3 flex flex-col gap-1 bg-background">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm rounded-md hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-20 border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10 grid gap-8 md:grid-cols-3 text-sm">
          <div className="flex items-start gap-3">
            <div className="bg-[var(--logo-bg)] rounded-lg p-1.5">
              <img src={logoUrl} alt="UC Temuco" className="h-14 w-auto" />
            </div>
            <div>
              <p className="font-serif font-semibold">Educar con Teorías</p>
              <p className="text-muted-foreground mt-1">
                Recurso pedagógico para futuros docentes de la Universidad Católica de Temuco.
              </p>
            </div>
          </div>
          <div>
            <p className="font-medium mb-2">Navegación</p>
            <ul className="grid grid-cols-2 gap-y-1 text-muted-foreground">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-foreground">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Autores</p>
            <p className="text-muted-foreground">
              Simón Araneda · Bruno Sandoval · Génesis Contreras · Joaquín Yañez
            </p>
            <p className="text-xs text-muted-foreground/80 mt-3">
              © {new Date().getFullYear()} — Proyecto académico UC Temuco.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
