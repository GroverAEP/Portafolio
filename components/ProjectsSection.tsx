import SectionPanel from "./SectionPanel";
import { projects } from "@/data/portfolio";

const statusStyles: Record<string, string> = {
  "en producción": "text-green border-green/30 bg-green/10",
  "en desarrollo": "text-amber border-amber/30 bg-amber/10",
  finalizado: "text-cyan border-cyan/30 bg-cyan/10",
  archivado: "text-dim border-border bg-panel2",
};

export default function ProjectsSection() {
  return (
    <SectionPanel id="proyectos" path="~/proyectos/*" title="// Proyectos">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-lg border border-border bg-panel p-5 transition-colors hover:border-amber/40"
          >
            <div className="mb-2 flex items-start justify-between gap-3">
              <h3 className="font-mono text-base font-bold text-text">{project.name}</h3>
              <span
                className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
            </div>
            <p className="mb-1 font-mono text-xs text-dim">
              {project.role} · {project.period}
            </p>
            <p className="mb-4 text-sm leading-relaxed text-text/90">{project.description}</p>

            <div className="mb-4 mt-auto flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-panel2 px-2 py-0.5 font-mono text-[11px] text-dim"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 border-t border-border pt-3 font-mono text-xs">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber hover:underline"
                >
                  repositorio →
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:underline"
                >
                  demo en vivo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </SectionPanel>
  );
}
