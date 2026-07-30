import { ReactNode } from "react";

export default function SectionPanel({
  id,
  path,
  title,
  children,
}: {
  id: string;
  path: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-b border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-14 sm:py-20">
        <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-border pb-3">
          <h2 className="font-mono text-xl sm:text-2xl font-bold text-text">{title}</h2>
          <span className="hidden sm:inline font-mono text-xs text-dim">{path}</span>
        </div>
        {children}
      </div>
    </section>
  );
}
