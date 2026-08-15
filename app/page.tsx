"use client";

import { useEffect, useRef, useState } from "react";

/* ---------------- Inline icons (no external icon library) ---------------- */

type IconProps = { className?: string };

function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 6.5 12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconInstagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function IconLinkedin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.8 10.2v6.2M7.8 7.6v.02M12 16.4v-3.6c0-1.4.9-2.4 2.2-2.4 1.3 0 1.9.9 1.9 2.4v3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12.8v3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconGithub({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2.5c-5.3 0-9.5 4.2-9.5 9.5 0 4.2 2.8 7.8 6.6 9.1.5.1.7-.2.7-.5v-1.9c-2.7.6-3.3-1.2-3.3-1.2-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.8-1.3 6.6-4.9 6.6-9.1 0-5.3-4.3-9.5-9.6-9.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconArrowUpRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSparkles({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M11 3.5 12.3 8l4.5 1.3-4.5 1.3L11 15l-1.3-4.4L5.2 9.3l4.5-1.3L11 3.5Z"
        fill="currentColor"
      />
      <path
        d="M17.8 13.5 18.5 16l2.5.7-2.5.7-.7 2.6-.7-2.6-2.5-.7 2.5-.7.7-2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ---------------- Data ---------------- */

const contactChannels = [
  {
    label: "Email",
    value: "email@example.com",
    href: "mailto:email@example.com",
    icon: IconMail,
  },
  {
    label: "Instagram",
    value: "@rifqi.dev",
    href: "https://instagram.com/rifqi.dev",
    icon: IconInstagram,
  },
  {
    label: "LinkedIn",
    value: "/in/rifqisetianto",
    href: "https://linkedin.com/in/rifqisetianto",
    icon: IconLinkedin,
  },
  {
    label: "GitHub",
    value: "@rifqisetianto",
    href: "https://github.com/rifqisetianto",
    icon: IconGithub,
  },
];

const projects = [
  {
    title: "Pitungan",
    description:
      "Platform pembelajaran matematika interaktif yang dirancang agar belajar terasa lebih menyenangkan.",
    tags: ["Next.js", "UI/UX", "Figma"],
    image: "https://picsum.photos/seed/pitungan/800/600",
    year: "2025",
  },
  {
    title: "Volunear",
    description:
      "Platform untuk menemukan kegiatan volunteer berdasarkan lokasi dan minat pengguna.",
    tags: ["UI/UX", "Product Design"],
    image: "https://picsum.photos/seed/volunear/800/600",
    year: "2025",
  },
  {
    title: "My Portfolio",
    description:
      "Personal portfolio website dengan desain modern dan pengalaman yang responsif.",
    tags: ["Next.js", "Tailwind"],
    image: "https://picsum.photos/seed/portfolio-rifqi/800/600",
    year: "2026",
  },
  {
    title: "Nebula UI Kit",
    description:
      "Design system & komponen reusable untuk mempercepat proses development produk digital.",
    tags: ["Figma", "Design System"],
    image: "https://picsum.photos/seed/nebula-ui/800/600",
    year: "2024",
  },
  {
    title: "Lentera",
    description:
      "Platform donasi untuk menghubungkan komunitas dengan program sosial di sekitar mereka.",
    tags: ["Next.js", "UI/UX"],
    image: "https://picsum.photos/seed/lentera/800/600",
    year: "2024",
  },
  {
    title: "Selaras",
    description:
      "Aplikasi pelacak kebiasaan harian dengan visualisasi progres yang ringan dan intuitif.",
    tags: ["React", "Product Design"],
    image: "https://picsum.photos/seed/selaras/800/600",
    year: "2023",
  },
];

const skillCategories = [
  {
    category: "Frontend",
    accent: "violet",
    items: [
      { name: "Next.js", badge: "N" },
      { name: "React", badge: "R" },
      { name: "TypeScript", badge: "TS" },
      { name: "JavaScript", badge: "JS" },
      { name: "Tailwind CSS", badge: "TW" },
    ],
  },
  {
    category: "Design",
    accent: "blue",
    items: [
      { name: "Figma", badge: "F" },
      { name: "UI/UX Design", badge: "UX" },
    ],
  },
  {
    category: "Tools & Workflow",
    accent: "emerald",
    items: [
      { name: "Git", badge: "G" },
      { name: "VS Code", badge: "VS" },
    ],
  },
];

const skillNames = skillCategories.flatMap((c) => c.items.map((i) => i.name));

const experience = [
  {
    year: "2023 — Sekarang",
    title: "Mahasiswa Informatika",
    place: "Fokus Web Development & UI/UX",
    description:
      "Mendalami pengembangan web modern, sistem desain, dan prinsip interaksi pengguna melalui project pribadi & perkuliahan.",
  },
  {
    year: "2024",
    title: "Freelance UI/UX Designer",
    place: "Remote",
    description:
      "Merancang antarmuka untuk beberapa produk digital, dari riset pengguna hingga prototipe siap development.",
  },
  {
    year: "2025",
    title: "Frontend Developer",
    place: "Project Independen",
    description:
      "Membangun aplikasi web interaktif menggunakan Next.js & Tailwind, dengan fokus pada performa dan aksesibilitas.",
  },
];

const education = [
  {
    year: "2023 — Sekarang",
    title: "S1 Teknik Informatika",
    place: "Nama Universitas",
    description:
      "Fokus pada rekayasa perangkat lunak, pengembangan web, dan interaksi manusia-komputer.",
  },
  {
    year: "2020 — 2023",
    title: "SMA — Jurusan MIPA",
    place: "Nama Sekolah",
    description:
      "Aktif di ekstrakurikuler teknologi dan mulai mempelajari dasar-dasar pemrograman.",
  },
];

const certifications = [
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "https://picsum.photos/seed/cert-js/400/300",
  },
  {
    title: "Front-End Web Development",
    issuer: "Udemy",
    year: "2024",
    image: "https://picsum.photos/seed/cert-fe/400/300",
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Skilvul",
    year: "2025",
    image: "https://picsum.photos/seed/cert-uiux/400/300",
  },
];

/* ---------------- Scroll reveal helper ---------------- */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: "800ms",
        transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
      }}
    >
      {children}
    </div>
  );
}

function NeonFrame({
  children,
  className = "",
  rounded = "rounded-3xl",
}: {
  children: React.ReactNode;
  className?: string;
  rounded?: string;
}) {
  return (
    <div className={`relative h-full w-full ${className}`}>
      <div className={`neon-glow pointer-events-none absolute -inset-1 ${rounded} opacity-25 blur-md`} />
      <div className={`neon-border relative h-full w-full p-[2.5px] ${rounded}`}>
        <div className={`relative h-full w-full overflow-hidden bg-[#03030b] ${rounded}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Count-up number ---------------- */

function CountUp({
  target,
  duration = 1400,
}: {
  target: string;
  duration?: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState("0");
  const started = useRef(false);

  // Split the target into a numeric part and a trailing suffix (+, ∞, etc.)
  const match = target.match(/^(\d+)(.*)$/);
  const numeric = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (numeric === null) {
      // Non-numeric target (e.g. "∞") — just fade/scale in instead of counting
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            setDisplay(target);
            observer.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(eased * numeric);
            setDisplay(`${value}${suffix}`);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [numeric, suffix, target, duration]);

  return (
    <p ref={ref} className="text-2xl font-bold text-white tabular-nums">
      {display === "0" && numeric === null ? "0" : display}
    </p>
  );
}

/* ---------------- Cursor aura + trail ---------------- */

function CursorEffects() {
  const auraRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const lastSpawn = useRef(0);
  const idRef = useRef(0);
  const [enabled, setEnabled] = useState(false);
  const [trail, setTrail] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduceMotion) return;
    setEnabled(true);

    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };

      const now = performance.now();
      if (now - lastSpawn.current > 45) {
        lastSpawn.current = now;
        const id = idRef.current++;
        setTrail((prev) => [
          ...prev.slice(-10),
          { id, x: e.clientX, y: e.clientY },
        ]);
        window.setTimeout(() => {
          setTrail((prev) => prev.filter((p) => p.id !== id));
        }, 650);
      }
    };

    const handleDown = (e: MouseEvent) => {
      const id = idRef.current++;
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((p) => p.id !== id));
      }, 600);
    };

    let raf = 0;
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.16;
      pos.current.y += (target.current.y - pos.current.y) * 0.16;
      if (auraRef.current) {
        auraRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={auraRef}
        className="cursor-aura pointer-events-none fixed left-0 top-0 z-[70]"
      />
      {trail.map((p, i) => (
        <span
          key={p.id}
          className="trail-dot pointer-events-none fixed z-[69]"
          style={{
            left: p.x,
            top: p.y,
            // @ts-expect-error custom css var for per-dot color drift
            "--dot-i": i,
          }}
        />
      ))}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="click-ripple pointer-events-none fixed z-[69]"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </>
  );
}

function RotatingRole() {
  const roles = [
    "Software Developer",
    "UI/UX Designer",
    "Frontend Developer",
    "Product Designer",
  ];

  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`
        relative inline-block min-w-[250px]
        bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400
        bg-clip-text text-transparent
        transition-all duration-500
        ${animating
          ? "-translate-y-8 opacity-0 blur-sm"
          : "translate-y-0 opacity-100 blur-0"}
      `}
    >
      {roles[index]}
    </span>
  );
}

function TypingText() {
  const text =
    "Saya membangun pengalaman digital yang menggabungkan teknologi, desain, dan pemecahan masalah menjadi produk yang bermakna.";

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < text.length) {
      // Mengetik
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 35);
    } else if (!isDeleting && displayText.length === text.length) {
      // Jeda setelah selesai mengetik
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && displayText.length > 0) {
      // Menghapus
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, 18);
    } else if (isDeleting && displayText.length === 0) {
      // Mulai mengetik lagi
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text]);

  return (
    <span>
      {displayText}
      <span className="ml-1 inline-block animate-pulse text-violet-400">
        |
      </span>
    </span>
  );
}

/* ---------------- Page ---------------- */

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#03030b] font-sans text-white">
      <GlobalStyles />
      <CursorEffects />

      {/* Scanline overlay (static texture, no motion) */}
      <div className="pointer-events-none fixed inset-0 z-40 scanlines opacity-[0.35] mix-blend-overlay" />

      {/* Animated aurora glow */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="aurora aurora-one absolute -left-40 top-[10%] h-[520px] w-[520px] rounded-full bg-violet-600/15 blur-[140px]" />
        <div className="aurora aurora-two absolute right-[-140px] top-[25%] h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[160px]" />
        <div className="aurora aurora-three absolute left-[35%] top-[55%] h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      {/* Ambient breathing glow (fades in/out, keeps the background alive) */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="glow-breathe absolute left-1/2 top-[8%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[170px]" />
        <div className="glow-breathe glow-breathe-delayed absolute right-[5%] top-[60%] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[160px]" />
        <div className="glow-breathe glow-breathe-slow absolute left-[8%] top-[120%] h-[560px] w-[560px] rounded-full bg-violet-400/10 blur-[170px]" />
      </div>

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-800/15 blur-[130px]" />
        <div className="absolute right-[-120px] top-[520px] h-[520px] w-[520px] rounded-full bg-violet-700/10 blur-[150px]" />
        <div className="absolute left-[38%] top-[1150px] h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />
        <div className="absolute right-[10%] top-[1900px] h-[420px] w-[420px] rounded-full bg-violet-700/10 blur-[140px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      {/* Navbar */}
      <nav className="site-nav fixed left-3/7 top-4 z-[60] mx-auto flex w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 items-center justify-between px-6 py-3.5">
        <a href="#" className="font-mono text-xl font-bold tracking-tight">
          Rifqi<span className="text-violet-400">_</span>
        </a>

        <div className="hidden items-center gap-7 font-mono text-sm text-zinc-400 lg:flex">
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#education">
            Education
          </a>
          <a className="nav-link" href="#experience">
            Experience
          </a>
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-link" href="#skills">
            Skills
          </a>
          <a className="nav-link" href="#certifications">
            Certs
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </div>

        <a href="#contact" className="cta-glow hidden sm:inline-flex">
          <IconSparkles className="h-3.5 w-3.5" />
          <span>Let's Collaborate</span>
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-32">
        <div className="grid w-full items-start gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Hero text */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 font-mono text-sm text-violet-300 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
              status: available_for_projects
            </div>

            <p className="mb-4 font-mono text-lg text-blue-400">
              &gt; const developer = {"{"}
            </p>

            <h1 className="fluid-name max-w-3xl font-bold tracking-tight">
              Muhammad 
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-violet-400 bg-clip-text text-transparent" data-text="Rifqi">
                Rifqi 
              </span>
              <span> Agus Setianto </span>
            </h1>

            <p className="mt-2 font-mono text-lg text-blue-400">{"};"}</p>

            <h2 className="mt-6 text-2xl font-semibold text-zinc-200">
                <RotatingRole />
            </h2>

            <p className="mt-2 max-w-xl text-md leading-relaxed text-zinc-400">
            <TypingText />
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group rounded-full bg-gradient-to-r from-violet-600 to-violet-700 px-7 py-3 font-medium shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-violet-500/40"
              >
                Lihat Project
                <span className="ml-2 transition group-hover:ml-3">→</span>
              </a>
            {/* hubungi saya */}
            <a
              href="#contact"
              className="
                group relative isolate inline-flex
                overflow-hidden rounded-full
                border border-zinc-700
                px-7 py-3
                font-medium text-zinc-300
                transition-all duration-300
                hover:border-violet-400/70
                hover:text-white
              "
            >
              {/* WATER */}
              <span
                className="
                  pointer-events-none absolute
                  inset-0 -z-10
                  translate-y-full
                  transition-transform duration-[2200ms]
                  ease-[cubic-bezier(0.65,0,0.35,1)]
                  group-hover:translate-y-0
                "
              >
                {/* Wave 1 */}
                <svg
                  className="
                    absolute -top-[1px] left-0
                    h-full w-[200%]
                    opacity-40
                    animate-[wave1_7s_linear_infinite]
                  "
                  viewBox="0 0 1200 200"
                  preserveAspectRatio="none"
                >
                  <path
                    d="
                      M0 80
                      C50 40 100 40 150 80
                      C200 120 250 120 300 80
                      C350 40 400 40 450 80
                      C500 120 550 120 600 80
                      C650 40 700 40 750 80
                      C800 120 850 120 900 80
                      C950 40 1000 40 1050 80
                      C1100 120 1150 120 1200 80
                      L1200 200
                      L0 200
                      Z
                    "
                    fill="#3b82f6"
                  />
                </svg>

                {/* Wave 2 */}
                <svg
                  className="
                    absolute -top-[4px] left-0
                    h-full w-[200%]
                    opacity-45
                    animate-[wave2_9s_linear_infinite]
                  "
                  viewBox="0 0 1200 200"
                  preserveAspectRatio="none"
                >
                  <path
                    d="
                      M0 90
                      C60 135 120 135 180 90
                      C240 45 300 45 360 90
                      C420 135 480 135 540 90
                      C600 45 660 45 720 90
                      C780 135 840 135 900 90
                      C960 45 1020 45 1080 90
                      C1140 135 1170 135 1200 110
                      L1200 200
                      L0 200
                      Z
                    "
                    fill="#6366f1"
                  />
                </svg>

                {/* Wave 3 */}
                <svg
                  className="
                    absolute -top-[2px] left-0
                    h-full w-[200%]
                    opacity-55
                    animate-[wave3_6s_linear_infinite]
                  "
                  viewBox="0 0 1200 200"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="waveGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>

                  <path
                    d="
                      M0 75
                      C40 25 80 25 120 75
                      C160 125 200 125 240 75
                      C280 25 320 25 360 75
                      C400 125 440 125 480 75
                      C520 25 560 25 600 75
                      C640 125 680 125 720 75
                      C760 25 800 25 840 75
                      C880 125 920 125 960 75
                      C1000 25 1040 25 1080 75
                      C1120 125 1160 125 1200 75
                      L1200 200
                      L0 200
                      Z
                    "
                    fill="url(#waveGradient)"
                  />
                </svg>

                {/* Wave 4 — front */}
                <svg
                  className="
                    absolute -top-[1px] left-0
                    h-full w-[200%]
                    opacity-90
                    animate-[wave4_8s_linear_infinite]
                  "
                  viewBox="0 0 1200 200"
                  preserveAspectRatio="none"
                >
                  <path
                    d="
                      M0 85
                      C50 55 100 55 150 85
                      C200 115 250 115 300 85
                      C350 55 400 55 450 85
                      C500 115 550 115 600 85
                      C650 55 700 55 750 85
                      C800 115 850 115 900 85
                      C950 55 1000 55 1050 85
                      C1100 115 1150 115 1200 85
                      L1200 200
                      L0 200
                      Z
                    "
                    fill="#8b5cf6"
                  />
                </svg>
              </span>

              {/* Soft neon glow */}
              <span
                className="
                  pointer-events-none absolute inset-0 -z-10
                  bg-violet-500/20
                  opacity-0 blur-xl
                  transition-opacity duration-1000
                  group-hover:opacity-100
                "
              />

              {/* Text */}
              <span className="relative z-10">
                Hubungi Saya
              </span>
            </a>
            </div>

            {/* Social */}
            <div className="mt-10 flex gap-5 font-mono text-sm text-zinc-500">
              <a
                className="transition hover:text-blue-400"
                href={contactChannels[3].href}
              >
                GitHub
              </a>
              <a
                className="transition hover:text-blue-400"
                href={contactChannels[2].href}
              >
                LinkedIn
              </a>
              <a
                className="transition hover:text-blue-400"
                href={contactChannels[1].href}
              >
                Instagram
              </a>
            </div>
          </div>

          {/* hero img */}
          <div className="relative mx-auto w-full max-w-sm mt-12">
            <div className="aspect-square w-full">
              <NeonFrame rounded="rounded-[28px]">
                <img
                  src="https://picsum.photos/seed/rifqi-hero/500/500"
                  alt="Foto Muhammad Rifqi Setianto"
                  className="block h-full w-full object-cover object-[center_80%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03030b]/70 via-violet-950/10 to-blue-500/10" />
              </NeonFrame>
            </div>

            {/* Floating cards  */}
            <div className="float-slow absolute -left-6 top-1/4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-xl backdrop-blur-xl">
              <p className="font-mono text-xs text-blue-200">focus</p>
              <p className="mt-1 font-medium">Web & UI/UX</p>
            </div>

            <div className="float-slow-delayed absolute -right-6 bottom-1/4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-xl backdrop-blur-xl">
              <p className="font-mono text-xs text-purple-400">currently</p>
              <p className="mt-1 font-medium">Building things</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <div className="relative z-10 border-y border-white/5 bg-white/[0.02] py-4">
        <div className="marquee flex whitespace-nowrap font-mono text-sm text-zinc-500">
          {[...skillNames, ...skillNames].map((name, i) => (
            <span key={i} className="mx-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="relative z-10 border-t border-white/5">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-28 lg:grid-cols-[0.55fr_1fr]">
          <Reveal>
            <div className="mx-auto aspect-[4/5] w-full max-w-sm">
              <NeonFrame rounded="rounded-3xl">
                <img
                  src="https://i.pravatar.cc/600?img=68"
                  alt="Foto placeholder Muhammad Rifqi Setianto"
                  className="block h-full w-full object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03030b] via-transparent to-violet-900/20" />
                <div className="absolute bottom-4 left-4 rounded-full border border-blue-400/30 bg-black/50 px-3 py-1 font-mono text-xs text-blue-300 backdrop-blur">
                  id: rifqi.dev
                </div>
              </NeonFrame>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="font-mono text-sm font-medium text-violet-400">
                01 — <span className="text-blue-400">ABOUT</span>
                <span className="cursor" />
              </p>
              <h2 className="fluid-h2 mt-4 font-bold">Tentang Saya</h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-8 text-xl font-semibold leading-relaxed text-zinc-200">
                Saya adalah mahasiswa Informatika yang tertarik pada
                pengembangan web, UI/UX design, dan teknologi kreatif.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-4 leading-relaxed text-zinc-500">
                Saya menikmati proses mengubah ide yang masih abstrak menjadi
                sesuatu yang bisa digunakan. Mulai dari riset masalah, membuat
                desain, hingga membangun produk menggunakan teknologi modern.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 grid grid-cols-3 gap-4">
                <Stat number="10+" label="Projects" />
                <Stat number="5+" label="Technologies" />
                <Stat number="∞" label="Ideas" accent="idea" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <p className="font-mono text-sm font-medium text-violet-400">
              02 — EDUCATION
              <span className="cursor" />
            </p>
            <h2 className="fluid-h2 mt-4 font-bold">Riwayat Pendidikan</h2>
          </Reveal>

          <div className="relative mt-16 space-y-10 border-l border-white/10 pl-8">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 120}>
                <div className="relative">
                  <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_12px_4px_rgba(59,130,246,0.5)]" />
                  <p className="font-mono text-xs uppercase tracking-widest text-violet-400">
                    {e.year}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{e.title}</h3>
                  <p className="mt-1 text-sm text-blue-300/80">{e.place}</p>
                  <p className="mt-3 max-w-2xl leading-relaxed text-zinc-500">
                    {e.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Timeline */}
      <section id="experience" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <p className="font-mono text-sm font-medium text-blue-400">
              03 — EXPERIENCE<span className="cursor" />
            </p>
            <h2 className="fluid-h2 mt-4 font-bold">Riwayat Pengalaman</h2>
          </Reveal>

          <div className="relative mt-16 space-y-10 border-l border-white/10 pl-8">
            {experience.map((e, i) => (
              <Reveal key={e.title} delay={i * 120}>
                <div className="relative">
                  <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_12px_4px_rgba(139,92,246,0.5)]" />
                  <p className="font-mono text-xs uppercase tracking-widest text-blue-400">
                    {e.year}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{e.title}</h3>
                  <p className="mt-1 text-sm text-violet-300/80">{e.place}</p>
                  <p className="mt-3 max-w-2xl leading-relaxed text-zinc-500">
                    {e.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-sm font-medium text-violet-400">
                  04 — PROJECTS<span className="cursor" />
                </p>
                <h2 className="fluid-h2 mt-4 font-bold">Projek Portofolio</h2>
              </div>
              <span className="hidden font-mono text-sm text-zinc-500 md:block">
                selected_works ↗
              </span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 90}>
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <p className="font-mono text-sm font-medium text-blue-400">
              05 — SKILLS<span className="cursor" />
            </p>
            <h2 className="fluid-h2 mt-4 font-bold">Tools & Skill</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {skillCategories.map((cat, ci) => (
              <Reveal key={cat.category} delay={ci * 100}>
                <SkillPanel category={cat} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sertifikasi */}
      <section
        id="certifications"
        className="relative z-10 border-t border-white/5"
      >
        <div className="mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <p className="font-mono text-sm font-medium text-violet-400">
              06 — CERTIFICATIONS
              <span className="cursor" />
            </p>
            <h2 className="fluid-h2 mt-4 font-bold">
              Sertifikasi & Pencapaian
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => {
              const accents = [
                { text: "text-violet-300", from: "from-violet-500", border: "hover:border-violet-400/40" },
                { text: "text-blue-300", from: "from-blue-500", border: "hover:border-blue-400/40" },
                { text: "text-emerald-300", from: "from-emerald-500", border: "hover:border-emerald-400/40" },
              ];
              const a = accents[i % accents.length];
              return (
                <Reveal key={cert.title} delay={i * 100}>
                  <div
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 ${a.border}`}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <img
                        src={cert.image}
                        alt={`Sertifikat ${cert.title}`}
                        className="block h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#03030b] via-[#03030b]/15 to-transparent" />
                      <span className={`absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${a.text} backdrop-blur`}>
                        Certificate
                      </span>
                      <span className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[11px] text-zinc-300 backdrop-blur">
                        {cert.year}
                      </span>
                    </div>

                    <div className={`h-[3px] w-full bg-gradient-to-r ${a.from} to-transparent opacity-70`} />

                    <div className="flex flex-1 flex-col justify-center p-6">
                      <h3 className="font-semibold leading-snug text-zinc-100">
                        {cert.title}
                      </h3>
                      <p className={`mt-2 font-mono text-xs uppercase tracking-widest ${a.text}`}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* kontak */}
      <section id="contact" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-32">
          <Reveal>
            <p className="font-mono text-sm font-medium text-blue-400">
              07 — CONTACT
              <span className="cursor" />
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <h2 className="fluid-h2 font-bold">Punya ide menarik?</h2>

            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative mt-12 grid gap-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl md:grid-cols-2 md:p-14">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-600/15 blur-[110px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-blue-600/10 blur-[110px]" />

              <div className="relative flex flex-col justify-between gap-10">
                <p className="max-w-md text-lg leading-relaxed text-zinc-400">
                  Saya selalu terbuka untuk berdiskusi mengenai project,
                  kolaborasi, atau sekadar bertukar ide. Kirim pesan dan
                  saya akan balas secepatnya.
                </p>

                <a href={contactChannels[0].href} className="cta-glow w-fit">
                  <IconSparkles className="h-3.5 w-3.5" />
                  <span>Let's Collaborate</span>
                </a>
              </div>

              <div className="relative flex flex-col gap-3">
                {contactChannels.map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:border-violet-500/40 hover:bg-violet-500/5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-blue-500/10 text-violet-300 transition duration-300 group-hover:scale-110 group-hover:text-blue-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-mono text-[11px] uppercase tracking-widest text-blue-400">
                          {c.label}
                        </p>
                        <p className="mt-1 text-sm text-zinc-300">{c.value}</p>
                      </div>
                      <IconArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-violet-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a href="#" className="font-mono text-xl font-bold tracking-tight">
                Rifqi<span className="text-violet-400">_</span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
                Developer & designer yang senang mengubah ide menjadi produk
                digital yang bermakna.
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
                <a className="transition hover:text-white" href="#about">
                  About
                </a>
                <a className="transition hover:text-white" href="#education">
                  Education
                </a>
                <a className="transition hover:text-white" href="#projects">
                  Projects
                </a>
                <a className="transition hover:text-white" href="#contact">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-violet-400">
                Terhubung
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-500">
                {contactChannels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="transition hover:text-white"
                  >
                    {c.label} — {c.value}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-6 font-mono text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Rifqi Setianto. Seluruh hak cipta dilindungi.</span>
            <span>Dibangun dengan Next.js & Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------------- Components ---------------- */

function Stat({
  number,
  label,
  accent = "default",
}: {
  number: string;
  label: string;
  accent?: "default" | "idea";
}) {
  return (
    <div
      className={`rounded-2xl border p-5 transition duration-300 ${
        accent === "idea"
          ? "border-blue-400/25 bg-blue-400/[0.06] hover:border-blue-400/50"
          : "border-white/10 bg-white/[0.03] hover:border-violet-400/30"
      }`}
    >
      <CountUp target={number} />
      <p
        className={`mt-1 text-sm ${
          accent === "idea" ? "text-blue-300/80" : "text-zinc-500"
        }`}
      >
        {label}
      </p>
    </div>
  );
}

function SkillPanel({
  category,
}: {
  category: {
    category: string;
    accent: string;
    items: { name: string; badge: string }[];
  };
}) {
  const accentMap: Record<string, { text: string; border: string; bg: string; glow: string }> = {
    violet: {
      text: "text-violet-300",
      border: "border-violet-400/30",
      bg: "bg-violet-400/10",
      glow: "hover:border-violet-400/40 hover:bg-violet-500/[0.04]",
    },
    blue: {
      text: "text-blue-300",
      border: "border-blue-400/30",
      bg: "bg-blue-400/10",
      glow: "hover:border-blue-400/40 hover:bg-blue-500/[0.04]",
    },
    emerald: {
      text: "text-emerald-300",
      border: "border-emerald-400/30",
      bg: "bg-emerald-400/10",
      glow: "hover:border-emerald-400/40 hover:bg-emerald-500/[0.04]",
    },
  };
  const a = accentMap[category.accent] ?? accentMap.violet;

  return (
    <div className={`relative h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl transition duration-300 ${a.glow}`}>
      <div className={`absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-40 ${a.text}`} />
      <p className={`font-mono text-xs uppercase tracking-[0.3em] ${a.text}`}>
        {category.category}
      </p>
      <div className="mt-6 flex flex-col gap-2.5">
        {category.items.map((skill) => (
          <div
            key={skill.name}
            className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2.5 transition duration-300 hover:translate-x-1 hover:border-white/10"
          >
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border font-mono text-[11px] font-bold ${a.border} ${a.bg} ${a.text}`}
            >
              {skill.badge}
            </span>
            <p className="text-sm font-medium text-zinc-300 group-hover:text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: {
    title: string;
    description: string;
    tags: string[];
    image: string;
    year: string;
  };
  index: number;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-[0_20px_80px_rgba(139,92,246,0.12)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={`Preview project ${project.title}`}
          className="block h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03030b] via-[#03030b]/40 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 font-mono text-xs text-zinc-300 backdrop-blur">
          0{index + 1} · {project.year}
        </span>
        <span className="absolute right-4 top-4 text-xl text-zinc-300 transition group-hover:text-blue-300">
          ↗
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold">{project.title}</h3>

        <p className="mt-3 min-h-16 flex-1 text-sm leading-relaxed text-zinc-500">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ---------------- Global animation styles ---------------- */

function GlobalStyles() {
  return (
    <style>{`
      .aurora {
        animation: auroraFloat 12s ease-in-out infinite alternate;
      }

      .aurora-two {
        animation-delay: -4s;
        animation-duration: 15s;
      }

      .aurora-three {
        animation-delay: -8s;
        animation-duration: 18s;
      }

      @keyframes auroraFloat {
        0% {
          transform: translate3d(-30px, -20px, 0) scale(1);
        }
        50% {
          transform: translate3d(45px, 35px, 0) scale(1.12);
        }
        100% {
          transform: translate3d(-10px, 70px, 0) scale(0.96);
        }
      }

      .glow-breathe {
        animation: breathe 9s ease-in-out infinite;
      }
      .glow-breathe-delayed {
        animation-duration: 11s;
        animation-delay: -3s;
      }
      .glow-breathe-slow {
        animation-duration: 14s;
        animation-delay: -6s;
      }
      @keyframes breathe {
        0%, 100% { opacity: 0.35; transform: scale(0.92); }
        50% { opacity: 0.85; transform: scale(1.08); }
      }

      .scanlines {
        background: repeating-linear-gradient(
          to bottom,
          rgba(255,255,255,0.025) 0px,
          rgba(255,255,255,0.025) 1px,
          transparent 1px,
          transparent 3px
        );
      }

      .cursor {
        display: inline-block;
        width: 7px;
        height: 12px;
        margin-left: 4px;
        background: currentColor;
        animation: blink 1s steps(1) infinite;
        vertical-align: -1px;
      }
      @keyframes blink { 50% { opacity: 0; } }

      .float-slow {
        animation: floaty 6s ease-in-out infinite;
      }
      .float-slow-delayed {
        animation: floaty 6s ease-in-out infinite;
        animation-delay: 1.5s;
      }
      @keyframes floaty {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      .marquee {
        animation: marquee 22s linear infinite;
        width: max-content;
      }
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      /* Site navbar — solid dark bar, fixed at all times (see JSX: fixed
         instead of sticky, since the page has an overflow-hidden
         ancestor that broke sticky positioning). Neon now wraps the whole
         border via ::before instead of a single line under the bar. */
      .site-nav {
        position: relative;
        border-radius: 1.1rem;
        border: 1px solid rgba(255,255,255,0.09);
        background: #0a0a12e6;
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,0.06),
          0 16px 40px rgba(0,0,0,0.5);
      }
      .site-nav::before {
        content: "";
        position: absolute;
        inset: -1.5px;
        border-radius: inherit;
        padding: 1.5px;
        background: conic-gradient(from var(--angle), #8b5cf6, #3b82f6, #c084fc, #8b5cf6);
        -webkit-mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        animation: neonRotate 6s linear infinite;
        opacity: 0.55;
        pointer-events: none;
      }
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
        background: linear-gradient(90deg, #8b5cf6, #3b82f6);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 250ms cubic-bezier(0.16,1,0.3,1);
      }
      .nav-link:hover {
        color: #fff;
      }
      .nav-link:hover::after {
        transform: scaleX(1);
      }

      /* Distinct "Let's Collaborate" CTA — legible at rest, shine only on hover */
      .cta-glow {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: 9999px;
        padding: 0.65rem 1.5rem;
        font-family: var(--font-mono, monospace);
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.01em;
        color: #ffffff;
        background: linear-gradient(135deg, #8b5cf6, #3b82f6);
        box-shadow: 0 8px 24px rgba(139,92,246,0.35);
        overflow: hidden;
        animation: ctaPulse 2.8s ease-in-out infinite;
        transition: transform 300ms cubic-bezier(0.16,1,0.3,1), box-shadow 300ms;
      }
      .cta-glow svg {
        color: #ede9fe;
        flex-shrink: 0;
      }
      .cta-glow::before {
        content: "";
        position: absolute;
        top: 0;
        left: -60%;
        width: 35%;
        height: 100%;
        background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
        transform: skewX(-20deg);
        transition: left 650ms ease;
        pointer-events: none;
      }
      .cta-glow:hover::before {
        left: 140%;
      }
      .cta-glow:hover {
        transform: translateY(-2px) scale(1.03);
        box-shadow: 0 12px 32px rgba(139,92,246,0.55);
      }
      @keyframes ctaPulse {
        0%, 100% { box-shadow: 0 8px 24px rgba(139,92,246,0.32); }
        50% { box-shadow: 0 8px 32px rgba(139,92,246,0.55); }
      }

      /* Neon rotating frame — used around photos. Toned down (opacity/blur
         reduced in the component itself) since it was glowing too strong. */
      @property --angle {
        syntax: '<angle>';
        inherits: false;
        initial-value: 0deg;
      }
      .neon-glow {
        background: conic-gradient(from var(--angle), #8b5cf6, #3b82f6, #c084fc, #8b5cf6);
        animation: neonRotate 5s linear infinite;
      }
      .neon-border {
        background: conic-gradient(from var(--angle), #a855f7, #60a5fa, #c084fc, #a855f7);
        animation: neonRotate 5s linear infinite;
      }
      @keyframes neonRotate {
        to { --angle: 360deg; }
      }

      /* Fluid typography — scales down smoothly on narrow screens instead
         of jumping between fixed breakpoints. Applied to the hero name and
         all section headings. */
      .fluid-name {
        font-size: clamp(2.25rem, 7vw + 0.5rem, 4.75rem);
        line-height: 1.05;
      }
      .fluid-h2 {
        font-size: clamp(1.65rem, 3.2vw + 0.6rem, 2.5rem);
        line-height: 1.15;
      }

      /* Cursor aura + trail — solid gradient, not glassy */
      .cursor-aura {
        width: 26px;
        height: 26px;
        margin-left: -13px;
        margin-top: -13px;
        border-radius: 9999px;
        background: linear-gradient(135deg, #a855f7, #7c3aed);
        box-shadow: 0 0 22px 6px rgba(139,92,246,0.55);
        transition: transform 0.02s linear;
      }

      .trail-dot {
        width: 9px;
        height: 9px;
        margin-left: -4.5px;
        margin-top: -4.5px;
        border-radius: 9999px;
        background: linear-gradient(135deg, #a855f7, #7c3aed);
        box-shadow: 0 0 12px 3px rgba(139,92,246,0.6);
        animation: trailFade 650ms ease-out forwards;
      }
      @keyframes trailFade {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0.15); }
      }

      .click-ripple {
        width: 40px;
        height: 40px;
        margin-left: -20px;
        margin-top: -20px;
        border-radius: 9999px;
        border: 1px solid rgba(139,92,246,0.6);
        animation: rippleOut 600ms ease-out forwards;
      }
      @keyframes rippleOut {
        0% { opacity: 0.8; transform: scale(0.3); }
        100% { opacity: 0; transform: scale(1.8); }
      }

      @media (prefers-reduced-motion: reduce) {
        .marquee, .float-slow, .float-slow-delayed, .aurora, .glow-breathe,
        .glitch::before, .glitch::after,
        .cursor-aura, .trail-dot, .click-ripple, .cta-glow::before,
        .site-nav::before, .neon-glow, .neon-border {
          animation: none !important;
        }
      }
        @keyframes wave1 {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@keyframes wave2 {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes wave3 {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@keyframes wave4 {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0);
  }
}
    `}</style>
  );
}