"use client";

import { useEffect, useRef, useState } from "react";
import { profile, metrics } from "@/data/portfolio";

function useUptime() {
  const [uptime, setUptime] = useState("00:00:00");
  const start = useRef(Date.now());

  useEffect(() => {
    const tick = () => {
      const diff = Math.floor((Date.now() - start.current) / 1000);
      const h = String(Math.floor(diff / 3600)).padStart(2, "0");
      const m = String(Math.floor((diff % 3600) / 60)).padStart(2, "0");
      const s = String(diff % 60).padStart(2, "0");
      setUptime(`${h}:${m}:${s}`);
    };
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return uptime;
}

function useTypewriter(lines: string[], speed = 22) {
  const [output, setOutput] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setOutput(lines);
      setDone(true);
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let current = "";
    let cancelled = false;
    const built: string[] = [];

    function step() {
      if (cancelled) return;
      if (lineIndex >= lines.length) {
        setDone(true);
        return;
      }
      const targetLine = lines[lineIndex];
      if (charIndex < targetLine.length) {
        current += targetLine[charIndex];
        charIndex++;
        setOutput([...built, current]);
        setTimeout(step, speed);
      } else {
        built.push(current);
        lineIndex++;
        charIndex = 0;
        current = "";
        setTimeout(step, 260);
      }
    }
    step();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { output, done };
}

export default function TerminalHero() {
  const uptime = useUptime();
  const lines = [
    "whoami",
    `> ${profile.name}`,
    "cat status.log",
    `> ${profile.status}`,
  ];
  const { output, done } = useTypewriter(lines);

  return (
    <section id="inicio" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid bg-gridcell pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="rounded-lg border border-border bg-panel shadow-[0_0_0_1px_rgba(32,48,63,0.4)]">
          {/* barra de encabezado del panel */}
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <span className="font-mono text-xs text-dim">
              ~/{profile.name.toLowerCase().replace(/\s+/g, "-")}/session
            </span>
            <div className="flex items-center gap-2 font-mono text-xs text-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
              <span>uptime {uptime}</span>
            </div>
          </div>

          {/* cuerpo del terminal */}
          <div className="px-5 sm:px-8 py-8 sm:py-10 font-mono text-sm sm:text-base">
            {output.map((line, i) => (
              <p
                key={i}
                className={
                  line.startsWith(">")
                    ? "text-cyan pl-4 mb-3"
                    : "text-text mb-1"
                }
              >
                {!line.startsWith(">") && <span className="text-amber">$ </span>}
                {line}
              </p>
            ))}
            {done && <span className="inline-block h-4 w-2 bg-amber animate-blink align-middle" />}
          </div>
        </div>

        {/* título e introducción */}
        <div className="mt-10 sm:mt-14 max-w-3xl">
          <h1 className="font-mono text-3xl sm:text-5xl font-bold tracking-tight text-text">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-lg sm:text-xl text-amber">{profile.role}</p>
          <p className="mt-1 text-sm text-dim">{profile.location}</p>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text/90">
            {profile.summary}
          </p>
        </div>

        {/* barra de métricas tipo dashboard */}
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-panel px-4 py-4 sm:py-5">
              <p className="font-mono text-2xl sm:text-3xl font-bold text-text">{m.value}</p>
              <p className="mt-1 font-mono text-[11px] sm:text-xs text-dim">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
