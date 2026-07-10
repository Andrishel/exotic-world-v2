import { useState } from "react";
import { MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { infoContacto } from "../data/mockDatabase"; 

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
      setForm({ nombre: "", telefono: "", mensaje: "" });
    }, 900);
  };

  const mapsQuery = encodeURIComponent(infoContacto.direccion);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1e3f20] mb-3">
          Visítanos
        </h1>
        <p className="text-stone-600">
          Escríbenos, consulta tarifas y programa tu visita a Exotic World.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Info + map */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-white border border-stone-200 p-6 space-y-5">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#15803d]/10 text-[#15803d] shrink-0">
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-semibold text-[#1e3f20]">Dirección</p>
                <p className="text-stone-600 text-sm">{infoContacto.direccion}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#15803d]/10 text-[#15803d] shrink-0">
                <Phone size={18} />
              </span>
              <div>
                <p className="font-semibold text-[#1e3f20]">Teléfono</p>
                <p className="text-stone-600 text-sm">{infoContacto.telefono}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#eab308]/20 text-[#a16207] shrink-0">
                <Clock size={18} />
              </span>
              <div>
                <p className="font-semibold text-[#1e3f20]">Horarios</p>
                {infoContacto.horarios.map((h, i) => (
                  <p key={i} className="text-stone-600 text-sm">
                    {h.dias}: {h.horas}
                  </p>
                ))}
                <p className="text-stone-400 text-sm">Cerrado los {infoContacto.cerrado}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-stone-200 h-72">
            <iframe
              title="Mapa Exotic World"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            />
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl bg-[#f5f5f4] p-8">
          <h2 className="text-xl font-bold text-[#1e3f20] mb-1">Envíanos un mensaje</h2>
          <p className="text-stone-600 text-sm mb-6">
            Te responderemos a la brevedad para coordinar tu visita.
          </p>

          {enviado ? (
            <div className="flex flex-col items-center text-center py-10 gap-3">
              <CheckCircle2 size={44} className="text-[#15803d]" />
              <p className="font-semibold text-[#1e3f20]">¡Mensaje enviado!</p>
              <p className="text-stone-600 text-sm">
                Gracias por escribirnos, nos pondremos en contacto pronto.
              </p>
              <button
                onClick={() => setEnviado(false)}
                className="mt-2 text-sm font-semibold text-[#15803d]"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Nombre</label>
                <input
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#15803d]/40"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Teléfono</label>
                <input
                  required
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#15803d]/40"
                  placeholder="Ej. 999 999 999"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#15803d]/40"
                  placeholder="Cuéntanos sobre tu visita, grupo o consulta de tarifas"
                />
              </div>
              <button
                type="submit"
                disabled={enviando}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#15803d] text-white font-semibold px-6 py-3 rounded-full hover:brightness-95 transition disabled:opacity-60"
              >
                {enviando ? "Enviando..." : "Enviar mensaje"} <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
