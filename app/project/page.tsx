"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   ICONS
   No lucide-react
========================================================= */

type IconProps = {
  className?: string;
};

function IconArrowLeft({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M19 12H5M11 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconArrowUpRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChevronLeft({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="m15 18-6-6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChevronRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="m9 18 6-6 6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGithub({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2.5c-5.25 0-9.5 4.25-9.5 9.5 0 4.2 2.75 7.75 6.55 9 .48.09.65-.2.65-.46v-1.7c-2.67.58-3.23-1.14-3.23-1.14-.43-1.1-1.06-1.4-1.06-1.4-.87-.6.07-.59.07-.59.96.07 1.47.99 1.47.99.85 1.46 2.23 1.04 2.77.8.09-.62.33-1.04.6-1.28-2.13-.24-4.37-1.07-4.37-4.72 0-1.04.37-1.88.98-2.54-.1-.24-.43-1.2.09-2.5 0 0 .8-.26 2.62.97a9.1 9.1 0 0 1 4.77 0c1.82-1.23 2.62-.97 2.62-.97.52 1.3.19 2.26.1 2.5.61.66.98 1.5.98 2.54 0 3.66-2.24 4.47-4.38 4.71.34.3.64.87.64 1.76v2.6c0 .25.17.55.66.45A9.5 9.5 0 0 0 21.5 12c0-5.25-4.25-9.5-9.5-9.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSparkles({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M11 3.5 12.3 8l4.5 1.3-4.5 1.3L11 15l-1.3-4.4L5.2 9.3l4.5-1.3L11 3.5Z"
        fill="currentColor"
      />
      <path
        d="M17.8 13.5 18.5 16l2.5.7-.7 2.5-2.5.7-.7-2.5.7-2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* =========================================================
   PROJECT DATA
========================================================= */

const project = {
  title: "Pitungan",
  category: "Education Platform",
  year: "2025",
  role: "UI/UX Designer & Developer",

  description:
    "Platform pembelajaran matematika interaktif yang dirancang untuk membuat proses belajar terasa lebih sederhana, visual, dan menyenangkan.",

  problem:
    "Pembelajaran matematika sering terasa monoton karena materi lebih banyak disampaikan secara tekstual. Pengguna membutuhkan pengalaman belajar yang lebih visual, interaktif, dan mudah dipahami.",

  solution:
    "Pitungan menggabungkan materi pembelajaran, visualisasi, dan latihan interaktif dalam satu pengalaman sehingga pengguna dapat memahami konsep dengan cara yang lebih natural.",

  goal:
    "Menciptakan pengalaman belajar yang tidak hanya membantu pengguna mendapatkan jawaban, tetapi juga memahami proses di balik sebuah konsep.",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Figma",
  ],

  images: [
    {
      src: "https://picsum.photos/seed/pitungan01/1200/750",
      label: "Landing Page",
    },
    {
      src: "https://picsum.photos/seed/pitungan02/1200/750",
      label: "Learning Interface",
    },
    {
      src: "https://picsum.photos/seed/pitungan03/1200/750",
      label: "Interactive Exercise",
    },
    {
      src: "https://picsum.photos/seed/pitungan04/1200/750",
      label: "Dashboard",
    },
  ],
};

/* =========================================================
   REVEAL
========================================================= */

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

/* =========================================================
   NEON FRAME
========================================================= */

function NeonFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="absolute -inset-2 rounded-[26px] bg-violet-500/10 blur-2xl" />

      <div className="neon-border relative rounded-[22px] p-[2px]">
        <div className="relative overflow-hidden rounded-[20px] bg-[#05050d]">
          {children}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SLIDESHOW
========================================================= */

function ProjectGallery() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(next, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Main image */}
      <NeonFrame>
        <div className="relative aspect-[4/3] w-full sm:aspect-[5/4]">
          {project.images.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.label}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                current === index
                  ? "scale-100 opacity-100"
                  : "scale-[1.04] opacity-0"
              }`}
            />
          ))}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03030b]/60 via-transparent to-transparent" />

          {/* Label */}
          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-violet-300 backdrop-blur-xl">
            {project.images[current].label}
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[10px] text-zinc-400 backdrop-blur-xl">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(project.images.length).padStart(2, "0")}
          </div>

          {/* Arrows */}
          <button
            onClick={previous}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-zinc-400 backdrop-blur-xl transition hover:border-violet-400/40 hover:bg-violet-500/20 hover:text-white"
          >
            <IconChevronLeft className="h-4 w-4" />
          </button>

          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-zinc-400 backdrop-blur-xl transition hover:border-violet-400/40 hover:bg-violet-500/20 hover:text-white"
          >
            <IconChevronRight className="h-4 w-4" />
          </button>
        </div>
      </NeonFrame>

      {/* Thumbnail navigation */}
      <div className="mt-4 grid grid-cols-4 gap-2">
        {project.images.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setCurrent(index)}
            className={`group relative overflow-hidden rounded-xl border transition duration-300 ${
              current === index
                ? "border-violet-400/60"
                : "border-white/10 opacity-50 hover:opacity-100"
            }`}
          >
            <img
              src={image.src}
              alt={image.label}
              className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
            />

            {current === index && (
              <div className="absolute inset-0 bg-violet-500/10" />
            )}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="mt-4 h-px w-full overflow-hidden bg-white/5">
        <div
          key={current}
          className="slide-progress h-full bg-gradient-to-r from-violet-500 to-blue-400"
        />
      </div>
    </div>
  );
}

/* =========================================================
   META
========================================================= */

function Meta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
        {label}
      </p>

      <p className="mt-2 text-sm text-zinc-300">
        {value}
      </p>
    </div>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">

          <div>
            <Link
              href="/"
              className="font-mono text-xl font-bold tracking-tight"
            >
              Rifqi<span className="text-violet-400">_</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Developer & designer yang senang mengubah ide
              menjadi produk digital yang bermakna.
            </p>

            <p className="mt-4 font-mono text-xs text-zinc-600">
              Berbasis di Indonesia
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-blue-400">
              Navigasi
            </p>

            <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-500">
              <Link href="/#about" className="transition hover:text-white">
                About
              </Link>

              <Link
                href="/#education"
                className="transition hover:text-white"
              >
                Education
              </Link>

              <Link
                href="/#projects"
                className="transition hover:text-white"
              >
                Projects
              </Link>

              <Link
                href="/#contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-violet-400">
              Project
            </p>

            <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-500">
              <span>{project.title}</span>
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-6 font-mono text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2026 Rifqi Setianto. Seluruh hak cipta dilindungi.
          </span>

          <span>
            Dibangun dengan Next.js & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ProjectDetailPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#03030b] text-white">

      <GlobalStyles />

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="aurora absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-violet-600/15 blur-[140px]" />

        <div className="aurora aurora-delay absolute -right-40 top-[30%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[160px]" />

        <div className="aurora aurora-slow absolute left-[35%] top-[80%] h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="scanlines pointer-events-none fixed inset-0 z-40 opacity-[0.3]" />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <nav className="site-nav fixed left-1/2 top-4 z-50 flex w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 items-center justify-between px-6 py-3.5">

        <Link
          href="/"
          className="font-mono text-xl font-bold tracking-tight"
        >
          Rifqi<span className="text-violet-400">_</span>
        </Link>

        <div className="hidden items-center gap-7 font-mono text-sm text-zinc-400 lg:flex">
          <Link href="/#about" className="nav-link">
            About
          </Link>

          <Link href="/#education" className="nav-link">
            Education
          </Link>

          <Link href="/#experience" className="nav-link">
            Experience
          </Link>

          <Link href="/#projects" className="nav-link">
            Projects
          </Link>

          <Link href="/#skills" className="nav-link">
            Skills
          </Link>

          <Link href="/#certifications" className="nav-link">
            Certs
          </Link>

          <Link href="/#contact" className="nav-link">
            Contact
          </Link>
        </div>

        <Link href="/#contact" className="cta-glow hidden sm:inline-flex">
          <IconSparkles className="h-3.5 w-3.5" />
          <span>Let's Collaborate</span>
        </Link>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-28 pt-36">

        <Reveal>
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition hover:text-white"
          >
            <IconArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />

            Back to Projects
          </Link>
        </Reveal>

        <div className="mt-12 grid items-center gap-14 lg:grid-cols-[1.05fr_0.75fr]">

          {/* LEFT */}
          <div>
            <Reveal delay={100}>
              <p className="font-mono text-sm font-medium text-blue-400">
                01 — PROJECT
                <span className="cursor" />
              </p>
            </Reveal>

            <Reveal delay={180}>
              <h1 className="fluid-name mt-4 font-bold tracking-tight">
                {project.title}
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  .
                </span>
              </h1>
            </Reveal>

            <Reveal delay={250}>
              <p className="mt-4 font-mono text-sm text-violet-400">
                {project.category}
              </p>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                {project.description}
              </p>
            </Reveal>

            {/* Tech stack */}
            <Reveal delay={400}>
              <div className="mt-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                  Tech Stack
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tech-pill"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Buttons */}
            <Reveal delay={480}>
              <div className="mt-8 flex flex-wrap gap-3">

                <a href="#" className="cta-glow group">
                  <span>Live Demo</span>

                  <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-mono text-sm text-zinc-400 backdrop-blur-xl transition duration-300 hover:border-violet-400/40 hover:bg-violet-500/5 hover:text-white"
                >
                  <IconGithub className="h-4 w-4" />

                  GitHub

                  <IconArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

              </div>
            </Reveal>
          </div>

          {/* RIGHT — SMALLER GALLERY */}
          <Reveal delay={250}>
            <ProjectGallery />
          </Reveal>
        </div>

        {/* Metadata */}
        <Reveal delay={550}>
          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/5 pt-7 sm:grid-cols-4">

            <Meta
              label="Role"
              value={project.role}
            />

            <Meta
              label="Year"
              value={project.year}
            />

            <Meta
              label="Category"
              value={project.category}
            />

            <Meta
              label="Status"
              value="Completed"
            />

          </div>
        </Reveal>
      </section>

      {/* =====================================================
          CASE STUDY
      ===================================================== */}

      <section className="relative z-10 border-t border-white/5">

        <div className="mx-auto max-w-6xl px-6 py-32">

          <Reveal>
            <p className="font-mono text-sm font-medium text-violet-400">
              02 — CASE STUDY
              <span className="cursor" />
            </p>
          </Reveal>

          <div className="mt-5 grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">

            {/* LEFT */}
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <h2 className="fluid-h2 font-bold">
                  Why I built
                  <br />
                  this project
                  <span className="text-violet-500">.</span>
                </h2>

                <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-600">
                  Dari masalah pengguna hingga solusi yang
                  diwujudkan menjadi sebuah pengalaman digital.
                </p>
              </div>
            </Reveal>

            {/* RIGHT */}
            <div className="space-y-16">

              {/* Problem */}
              <Reveal delay={100}>
                <article>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-400">
                    The Problem
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                    Bagaimana membuat belajar matematika
                    terasa lebih menarik?
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-500 sm:text-lg">
                    {project.problem}
                  </p>
                </article>
              </Reveal>

              {/* Solution */}
              <Reveal delay={180}>
                <article>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-violet-400">
                    The Solution
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                    Mengubah pembelajaran menjadi pengalaman
                    yang lebih interaktif.
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-500 sm:text-lg">
                    {project.solution}
                  </p>
                </article>
              </Reveal>

              {/* Goal */}
              <Reveal delay={260}>
                <article>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-400">
                    The Goal
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                    Membantu pengguna memahami,
                    bukan sekadar menjawab.
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-500 sm:text-lg">
                    {project.goal}
                  </p>
                </article>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

  
      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative z-10 border-t border-white/5">

        <div className="mx-auto max-w-6xl px-6 py-32">

          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] px-8 py-16 backdrop-blur-xl md:px-14">

              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px]" />

              <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-violet-400">
                    Want to see more?
                  </p>

                  <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                    Explore the project
                    <span className="text-violet-500">.</span>
                  </h2>

                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-500">
                    Lihat versi live project atau eksplorasi
                    source code yang digunakan untuk membangunnya.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">

                  <a
                    href="#"
                    className="cta-glow group"
                  >
                    Live Demo

                    <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>

                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-mono text-sm text-zinc-400 transition duration-300 hover:border-violet-400/40 hover:bg-violet-500/5 hover:text-white"
                  >
                    <IconGithub className="h-4 w-4" />

                    GitHub
                  </a>

                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </section>

      <Footer />
    </main>
  );
}

/* =========================================================
   GLOBAL CSS
========================================================= */

function GlobalStyles() {
  return (
    <style>{`

      /* AURORA */

      .aurora {
        animation: auroraMove 16s ease-in-out infinite alternate;
      }

      .aurora-delay {
        animation-duration: 20s;
        animation-delay: -6s;
      }

      .aurora-slow {
        animation-duration: 24s;
        animation-delay: -10s;
      }

      @keyframes auroraMove {
        0% {
          transform: translate3d(-30px, -20px, 0) scale(.95);
        }

        50% {
          transform: translate3d(40px, 40px, 0) scale(1.08);
        }

        100% {
          transform: translate3d(-10px, 70px, 0) scale(.98);
        }
      }


      /* SCANLINES */

      .scanlines {
        background: repeating-linear-gradient(
          to bottom,
          rgba(255,255,255,.025) 0px,
          rgba(255,255,255,.025) 1px,
          transparent 1px,
          transparent 3px
        );
      }


      /* NAVBAR */

      .site-nav {
        border-radius: 1.1rem;

        border: 1px solid rgba(255,255,255,.09);

        background: rgba(10,10,18,.9);

        backdrop-filter: blur(14px);

        box-shadow:
          inset 0 1px 0 rgba(255,255,255,.06),
          0 16px 40px rgba(0,0,0,.5);
      }

      .site-nav::before {
        content: "";

        position: absolute;

        inset: -1.5px;

        border-radius: inherit;

        padding: 1.5px;

        background:
          conic-gradient(
            from var(--angle),
            #8b5cf6,
            #3b82f6,
            #c084fc,
            #8b5cf6
          );

        -webkit-mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);

        -webkit-mask-composite: xor;

        mask-composite: exclude;

        animation:
          neonRotate
          6s
          linear
          infinite;

        opacity: .55;

        pointer-events: none;
      }


      /* NAV LINKS */

      .nav-link {
        position: relative;

        padding-bottom: 2px;

        transition: color 200ms;
      }

      .nav-link::after {
        content: "";

        position: absolute;

        left: 0;

        bottom: -3px;

        width: 100%;

        height: 1.5px;

        background:
          linear-gradient(
            90deg,
            #8b5cf6,
            #3b82f6
          );

        transform: scaleX(0);

        transform-origin: left;

        transition:
          transform 250ms
          cubic-bezier(.16,1,.3,1);
      }

      .nav-link:hover {
        color: white;
      }

      .nav-link:hover::after {
        transform: scaleX(1);
      }


      /* CTA */

      .cta-glow {
        position: relative;

        display: inline-flex;

        align-items: center;

        gap: .5rem;

        border-radius: 9999px;

        padding: .7rem 1.4rem;

        font-family: monospace;

        font-size: .85rem;

        font-weight: 700;

        color: white;

        background:
          linear-gradient(
            135deg,
            #8b5cf6,
            #3b82f6
          );

        box-shadow:
          0 8px 24px
          rgba(139,92,246,.35);

        overflow: hidden;

        transition:
          transform 300ms
          cubic-bezier(.16,1,.3,1),
          box-shadow 300ms;
      }

      .cta-glow::before {
        content: "";

        position: absolute;

        top: 0;

        left: -70%;

        width: 35%;

        height: 100%;

        background:
          linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,.55),
            transparent
          );

        transform: skewX(-20deg);

        transition:
          left 650ms ease;
      }

      .cta-glow:hover::before {
        left: 140%;
      }

      .cta-glow:hover {
        transform:
          translateY(-2px)
          scale(1.02);

        box-shadow:
          0 12px 35px
          rgba(139,92,246,.5);
      }


      /* NEON FRAME */

      @property --angle {
        syntax: '<angle>';

        inherits: false;

        initial-value: 0deg;
      }

      .neon-border {
        background:
          conic-gradient(
            from var(--angle),
            #8b5cf6,
            #3b82f6,
            #c084fc,
            #8b5cf6
          );

        animation:
          neonRotate
          6s
          linear
          infinite;
      }

      @keyframes neonRotate {
        to {
          --angle: 360deg;
        }
      }


      /* TECH */

      .tech-pill {
        display: inline-flex;

        align-items: center;

        border: 1px solid rgba(255,255,255,.08);

        background: rgba(255,255,255,.025);

        border-radius: 9999px;

        padding: .5rem .85rem;

        font-family: monospace;

        font-size: .7rem;

        color: #a1a1aa;

        transition:
          border-color 300ms,
          background 300ms,
          color 300ms,
          transform 300ms;
      }

      .tech-pill:hover {
        border-color: rgba(139,92,246,.45);

        background: rgba(139,92,246,.08);

        color: #c4b5fd;

        transform: translateY(-2px);
      }


      /* DETAILS */

      .detail-card {
        position: relative;

        overflow: hidden;

        border:
          1px solid rgba(255,255,255,.07);

        border-radius: 1.25rem;

        padding: 1.5rem;

        background:
          rgba(255,255,255,.02);

        transition:
          border-color 300ms,
          background 300ms,
          transform 300ms;
      }

      .detail-card::before {
        content: "";

        position: absolute;

        left: 1.5rem;

        right: 1.5rem;

        top: 0;

        height: 1px;

        background:
          linear-gradient(
            90deg,
            transparent,
            rgba(139,92,246,.7),
            transparent
          );

        opacity: 0;

        transition: opacity 300ms;
      }

      .detail-card:hover {
        transform: translateY(-3px);

        border-color:
          rgba(139,92,246,.3);

        background:
          rgba(139,92,246,.035);
      }

      .detail-card:hover::before {
        opacity: 1;
      }


      /* TYPOGRAPHY */

      .fluid-name {
        font-size:
          clamp(
            3rem,
            6vw,
            5rem
          );

        line-height: 1;
      }

      .fluid-h2 {
        font-size:
          clamp(
            2rem,
            3.5vw,
            3.25rem
          );

        line-height: 1.1;
      }


      /* CURSOR */

      .cursor {
        display: inline-block;

        width: 7px;

        height: 12px;

        margin-left: 4px;

        background: currentColor;

        animation:
          blink 1s steps(1) infinite;

        vertical-align: -1px;
      }

      @keyframes blink {
        50% {
          opacity: 0;
        }
      }


      /* SLIDESHOW PROGRESS */

      .slide-progress {
        width: 100%;

        transform-origin: left;

        animation:
          slideProgress
          6.5s
          linear
          forwards;
      }

      @keyframes slideProgress {
        from {
          transform: scaleX(0);
        }

        to {
          transform: scaleX(1);
        }
      }


      /* REDUCED MOTION */

      @media (prefers-reduced-motion: reduce) {
        .aurora,
        .site-nav::before,
        .neon-border,
        .cta-glow,
        .slide-progress,
        .cursor {
          animation: none !important;
        }
      }


      /* MOBILE */

      @media (max-width: 767px) {
        .site-nav {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .fluid-name {
          font-size: 3rem;
        }
      }

    `}</style>
  );
}