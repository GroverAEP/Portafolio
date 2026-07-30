# Portafolio — Ingeniero de Sistemas

Portafolio técnico construido con **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, listo para desplegar en **Vercel**.

Incluye:
- Presentación / datos personales (estilo terminal, con animación de escritura).
- Stack técnico (sistemas, redes, cloud, bases de datos, desarrollo).
- Proyectos realizados.
- Experiencia laboral.
- Cursos y certificaciones.
- Contacto.

## 1. Editar tu información

Todo el contenido del sitio vive en **un solo archivo**:

```
data/portfolio.ts
```

Ahí encontrarás objetos de JavaScript/TypeScript ya comentados y con datos de ejemplo:

| Sección del sitio        | Variable en `portfolio.ts`   |
|---------------------------|-------------------------------|
| Datos personales / hero   | `profile`                     |
| Métricas del hero          | `metrics`                      |
| Stack técnico              | `skills`                       |
| Proyectos                  | `projects`                     |
| Experiencia laboral        | `experience`                    |
| Cursos y certificaciones   | `coursesAndCertifications`     |

Solo reemplaza los valores de ejemplo por los tuyos (nombre, correo, proyectos, empresas, certificados, etc.). **No es necesario tocar los componentes** para actualizar el contenido.

Para agregar un nuevo proyecto, por ejemplo, agrega un nuevo objeto al arreglo `projects`:

```ts
{
  name: "Nombre del proyecto",
  period: "2026",
  description: "Qué hace el proyecto y qué problema resuelve.",
  stack: ["Next.js", "PostgreSQL"],
  role: "Tu rol en el proyecto",
  status: "en producción", // "en desarrollo" | "finalizado" | "archivado"
  repoUrl: "https://github.com/tu-usuario/tu-repo",
  liveUrl: "https://tu-demo.vercel.app",
},
```

## 2. Ejecutar en local

Requiere Node.js 18.18 o superior.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## 3. Desplegar en Vercel

### Opción A: desde la interfaz web (recomendada)
1. Sube esta carpeta a un repositorio de GitHub, GitLab o Bitbucket.
2. Entra a [vercel.com](https://vercel.com) → **Add New → Project**.
3. Importa el repositorio. Vercel detecta automáticamente que es un proyecto Next.js (no necesitas cambiar ningún ajuste de build).
4. Haz clic en **Deploy**.

### Opción B: desde la terminal con Vercel CLI
```bash
npm install -g vercel
vercel
```
Sigue las instrucciones en pantalla. Cada `git push` a tu rama principal generará un nuevo despliegue automático si conectaste un repositorio.

## 4. Estructura del proyecto

```
app/
  layout.tsx        → metadatos, fuentes (JetBrains Mono + Inter)
  page.tsx           → ensambla todas las secciones
  globals.css         → estilos base y variables de tema
components/
  Nav.tsx              → navegación fija estilo terminal
  TerminalHero.tsx      → sección de presentación con animación
  SkillsSection.tsx      → stack técnico
  ProjectsSection.tsx     → proyectos
  ExperienceSection.tsx    → experiencia laboral
  CoursesSection.tsx        → cursos y certificaciones
  ContactSection.tsx         → contacto
  Footer.tsx                  → pie de página
data/
  portfolio.ts                 → ⭐ único archivo que necesitas editar
```

## 5. Notas técnicas

- El proyecto usa versiones fijas y estables de Next.js/React/Tailwind para evitar romper el build en Vercel.
- `next.config.mjs` desactiva el bloqueo de build por errores de ESLint (`ignoreDuringBuilds: true`), ya que este proyecto no incluye ESLint como dependencia.
- El diseño respeta `prefers-reduced-motion` (desactiva animaciones si el usuario lo prefiere) y mantiene foco visible por teclado para accesibilidad.
