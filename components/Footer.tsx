import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-5xl px-4 sm:px-6 py-8">
      <p className="font-mono text-xs text-dim">
        © {year} {profile.name} · proceso finalizado con código de salida 0
      </p>
    </footer>
  );
}
