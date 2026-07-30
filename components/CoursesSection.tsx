import SectionPanel from "./SectionPanel";
import { coursesAndCertifications } from "@/data/portfolio";

export default function CoursesSection() {
  return (
    <SectionPanel
      id="formacion"
      path="~/formacion/certificados.json"
      title="// Cursos y certificaciones"
    >
      <div className="overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-panel2 font-mono text-xs uppercase tracking-wide text-dim">
              <th className="px-4 py-3 font-medium">Nombre</th>
              <th className="hidden px-4 py-3 font-medium sm:table-cell">Institución</th>
              <th className="px-4 py-3 font-medium">Tipo</th>
              <th className="px-4 py-3 font-medium">Año</th>
            </tr>
          </thead>
          <tbody>
            {coursesAndCertifications.map((c) => (
              <tr
                key={c.name}
                className="border-b border-border bg-panel last:border-b-0 hover:bg-panel2"
              >
                <td className="px-4 py-3">
                  {c.credentialUrl ? (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-text hover:text-amber"
                    >
                      {c.name}
                    </a>
                  ) : (
                    <span className="font-medium text-text">{c.name}</span>
                  )}
                  <p className="mt-0.5 text-xs text-dim sm:hidden">{c.institution}</p>
                </td>
                <td className="hidden px-4 py-3 text-dim sm:table-cell">{c.institution}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded border px-2 py-0.5 font-mono text-[10px] uppercase ${
                      c.type === "certificación"
                        ? "border-amber/30 bg-amber/10 text-amber"
                        : "border-cyan/30 bg-cyan/10 text-cyan"
                    }`}
                  >
                    {c.type}
                  </span>
                </td>
                <td className="px-4 py-3 font-mono text-dim">{c.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionPanel>
  );
}
