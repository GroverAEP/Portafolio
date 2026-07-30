import SectionPanel from "./SectionPanel";
import { experience } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <SectionPanel id="experiencia" path="~/experiencia/historial.log" title="// Experiencia">
      <div className="space-y-6">
        {experience.map((job, i) => (
          <article
            key={job.company + job.period}
            className="relative border-l border-border pl-6"
          >
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-amber bg-bg" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-mono text-base font-bold text-text">
                {job.role} <span className="text-dim font-normal">— {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-dim">{job.period}</span>
            </div>
            <p className="mt-0.5 font-mono text-xs text-dim">{job.location}</p>
            <p className="mt-3 text-sm leading-relaxed text-text/90">{job.description}</p>
            {job.achievements.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {job.achievements.map((a, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-text/80">
                    <span className="mt-0.5 font-mono text-amber">›</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </SectionPanel>
  );
}
