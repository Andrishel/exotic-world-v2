import { Link, useLocation } from "wouter";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/especies", label: "Especies" },
  { to: "/experiencias", label: "Experiencias" },
  { to: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#fdfcfa]/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#15803d] text-white">
            <Leaf size={18} />
          </span>
          <span className="font-semibold text-lg text-[#1e3f20] tracking-tight">
            Exotic World
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = location === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium pb-1 border-b-2 transition-colors ${
                  active
                    ? "text-[#15803d] border-[#eab308]"
                    : "text-stone-600 border-transparent hover:text-[#15803d]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contacto"
            className="inline-flex items-center rounded-full bg-[#eab308] text-[#1e3f20] font-semibold text-sm px-5 py-2.5 hover:brightness-95 transition"
          >
            Planear Visita
          </Link>
        </div>

        <button
          className="md:hidden text-[#1e3f20]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-stone-200 bg-[#fdfcfa] px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`text-base font-medium ${
                location === l.to ? "text-[#15803d]" : "text-stone-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center items-center rounded-full bg-[#eab308] text-[#1e3f20] font-semibold text-sm px-5 py-2.5"
          >
            Planear Visita
          </Link>
        </div>
      )}
    </header>
  );
}
