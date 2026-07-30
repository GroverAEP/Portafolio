import SectionPanel from "./SectionPanel";
import { skills } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <SectionPanel id="stack" path="~/stack/config.yml" title="// Stack técnico">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-border bg-panel p-5"
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-wide text-amber">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-border bg-panel2 px-2.5 py-1 font-mono text-xs text-text/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionPanel>
  );
}
