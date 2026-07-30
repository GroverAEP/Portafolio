import SectionPanel from "./SectionPanel";
import { profile } from "@/data/portfolio";

const links = [
  { label: "email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "teléfono", value: profile.phone, href: `tel:${profile.phone}` },
  { label: "github", value: profile.github, href: profile.github },
  { label: "linkedin", value: profile.linkedin, href: profile.linkedin },
  { label: "sitio web", value: profile.website, href: profile.website },
].filter((l) => l.value);

export default function ContactSection() {
  return (
    <SectionPanel id="contacto" path="~/contacto/init.sh" title="// Contacto">
      <div className="rounded-lg border border-border bg-panel p-6 sm:p-8">
        <p className="mb-6 text-base text-text/90">
          ¿Tienes un proyecto en mente o una oportunidad laboral? Escríbeme, respondo pronto.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.label === "email" || l.label === "teléfono" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded border border-border bg-panel2 px-4 py-3 font-mono text-sm transition-colors hover:border-amber/50"
            >
              <span className="text-dim">{l.label}</span>
              <span className="text-text">{l.value}</span>
            </a>
          ))}
        </div>
      </div>
    </SectionPanel>
  );
}
