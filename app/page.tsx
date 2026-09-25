"use client";

import {
  ArrowDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Code2,
  Layers3,
  Mail,
  MapPin,
  Palette,
  Sparkles,
  Star,
  Terminal,
  WandSparkles,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   CUSTOM BRAND ICONS (SVG)
========================================================= */

function Figma({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  );
}

function GithubIcon({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsappIcon({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.05 7.15C8.86 7.15 8.55 7.22 8.29 7.5C8.03 7.78 7.31 8.46 7.31 9.85C7.31 11.24 8.32 12.58 8.46 12.77C8.6 12.96 10.4 15.74 13.17 16.93C13.83 17.21 14.34 17.38 14.75 17.51C15.41 17.72 16.01 17.69 16.49 17.62C17.02 17.54 18.13 16.95 18.36 16.3C18.6 15.65 18.6 15.09 18.53 14.98C18.46 14.86 18.27 14.8 17.99 14.66C17.71 14.52 16.33 13.84 16.07 13.75C15.82 13.65 15.63 13.61 15.45 13.89C15.26 14.17 14.73 14.8 14.57 14.98C14.41 15.17 14.25 15.19 13.97 15.05C13.69 14.91 12.79 14.62 11.73 13.67C10.9 12.93 10.34 12.02 10.2 11.74C10.06 11.46 10.19 11.31 10.33 11.17C10.45 11.05 10.6 10.85 10.74 10.69C10.88 10.53 10.93 10.41 11.02 10.23C11.11 10.05 11.07 9.88 11 9.74C10.93 9.6 10.37 8.23 10.14 7.67C9.91 7.13 9.68 7.21 9.51 7.2C9.36 7.19 9.17 7.15 9.05 7.15Z" />
    </svg>
  );
}

/* =========================================================
   DATA
========================================================= */

const skills = [
  {
    name: "UI/UX Design",
    description: "Designing interfaces that feel simple, clear and intentional.",
    icon: Palette,
    number: "01",
  },
  {
    name: "Frontend",
    description: "Turning designs and ideas into responsive web experiences.",
    icon: Code2,
    number: "02",
  },
  {
    name: "Figma",
    description: "Wireframes, interfaces, prototypes and visual systems.",
    icon: Figma,
    number: "03",
  },
  {
    name: "Next.js",
    description: "Building modern web applications with React and Next.js.",
    icon: Layers3,
    number: "04",
  },
  {
    name: "Tailwind CSS",
    description: "Creating flexible visual systems directly in the interface.",
    icon: WandSparkles,
    number: "05",
  },
  {
    name: "AI / ML",
    description: "Currently exploring machine learning and intelligent systems.",
    icon: Zap,
    number: "06",
  },
];

const programmingProjects = [
  {
    number: "01",
    title: "OpenNova",
    category: "WEB APPLICATION",
    description:
      "A platform connecting organizations with people who want to solve real-world innovation challenges.",
    tags: ["Next.js", "Supabase", "Tailwind"],
    images: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=85",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=85",
    ],
  },
  {
    number: "02",
    title: "Daycare System",
    category: "UI/UX + AI",
    description:
      "An information system concept for daycare management, child identification and monitoring.",
    tags: ["UI/UX", "System Design", "AI"],
    images: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=600&q=85",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=85",
    ],
  },
  {
    number: "03",
    title: "Air Quality",
    category: "MACHINE LEARNING",
    description:
      "A machine learning project for classifying Jakarta air quality based on pollutant parameters.",
    tags: ["Python", "KNN", "Machine Learning"],
    images: [
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=85",
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=600&q=85",
    ],
  },
];

const uiuxProjects = [
  {
    number: "01",
    title: "MedCare Mobile",
    category: "HEALTHCARE APP",
    description:
      "Doctor consultation and telemedicine mobile experience designed with accessibility and clarity in mind.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
    tags: ["Figma", "User Research", "Wireframing"],
  },
  {
    number: "02",
    title: "Lumina Dashboard",
    category: "FINTECH UI",
    description:
      "Minimalist financial analytics platform dashboard with intuitive charts and clean information architecture.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
    tags: ["UI Design", "Design System", "Prototyping"],
  },
  {
    number: "03",
    title: "EduLearn Portal",
    category: "EDTECH PLATFORM",
    description:
      "Interactive e-learning space designed for collaborative university student assignments and study resources.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=85",
    tags: ["Interaction", "UX Flow", "Figma"],
  },
];

const designProjects = [
  {
    number: "01",
    title: "Studio Rebrand",
    category: "BRAND IDENTITY",
    description:
      "Visual identity system featuring bold typography, dynamic color palette, and geometric brand guidelines.",
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=85",
    tags: ["Brand Identity", "Typography", "Print"],
  },
  {
    number: "02",
    title: "Kinetic Posters",
    category: "GRAPHIC DESIGN",
    description:
      "Series of experimental visual posters exploring swiss style layout, typography rhythm, and texture.",
    image:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=85",
    tags: ["Poster", "Typography", "Editorial"],
  },
  {
    number: "03",
    title: "Spatial 3D Forms",
    category: "3D EXPERIMENTS",
    description:
      "Exploration of lighting, glass textures, abstract geometry, and fluid 3D compositions for web headers.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=85",
    tags: ["3D Art", "Spline", "Visual"],
  },
];

const projects = programmingProjects;

const educationImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=85",
];

const experienceImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85",
];

/* =========================================================
   REVEAL ON SCROLL
========================================================= */

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
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* =========================================================
   GLOBAL ADAPTIVE DYNAMIC CURSOR
   - Active across the whole page
   - Automatically adapts colors:
     * Grid sections (#home, #skills, #education) -> Sunset Orange
     * Non-grid sections (#about, #projects, #experience) -> Electric Blue
     * Dark/Collab sections (#collab, footer) -> Glowing Gold/White
========================================================= */

function GlobalCursor() {
  const mouse = useRef({ x: -100, y: -100 });
  const points = useRef(
    Array.from({ length: 6 }, () => ({ x: -100, y: -100 }))
  );

  const [visible, setVisible] = useState(false);
  const [theme, setTheme] = useState<"blue" | "orange" | "light">("orange");
  const [isInteractive, setIsInteractive] = useState(false);
  const [, forceRender] = useState(0);

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      points.current.forEach((point, index) => {
        const target =
          index === 0 ? mouse.current : points.current[index - 1];

        point.x += (target.x - point.x) * (0.38 - index * 0.035);
        point.y += (target.y - point.y) * (0.38 - index * 0.035);
      });

      forceRender((v) => v + 1);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const targetSection = el.closest("[data-cursor-theme]");
        if (targetSection) {
          const themeAttr = targetSection.getAttribute("data-cursor-theme") as "blue" | "orange" | "light";
          if (themeAttr && themeAttr !== theme) {
            setTheme(themeAttr);
          }
        } else {
          const isDark = el.closest("#collab, footer");
          const isGrid = el.closest("#home, #skills, #education");
          if (isDark && theme !== "light") setTheme("light");
          else if (isGrid && theme !== "orange") setTheme("orange");
          else if (!isDark && !isGrid && theme !== "blue") setTheme("blue");
        }

        const interactive = el.closest("a, button, [role='button'], input, .group, article");
        setIsInteractive(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
      mouse.current = { x: -100, y: -100 };
      points.current.forEach((p) => {
        p.x = -100;
        p.y = -100;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [visible, theme]);

  if (!visible) return null;

  const validPoints = points.current.filter((p) => p.x > 0 && p.y > 0);
  const follower = validPoints[1] || validPoints[0];

  const themeColors = {
    blue: {
      border: "border-[#1677ff]",
      bgAura: "bg-[#1677ff]/12",
      shadowAura: "0 0 18px rgba(22, 119, 255, 0.45)",
      dotBg: "bg-[#1677ff]",
      dotShadow: "0 0 10px rgba(22, 119, 255, 0.8)",
    },
    orange: {
      border: "border-[#ff5e00]",
      bgAura: "bg-[#ff5e00]/15",
      shadowAura: "0 0 20px rgba(255, 94, 0, 0.5)",
      dotBg: "bg-[#ff5e00]",
      dotShadow: "0 0 12px rgba(255, 94, 0, 0.85)",
    },
    light: {
      border: "border-[#ffd166]",
      bgAura: "bg-[#ffd166]/20",
      shadowAura: "0 0 22px rgba(255, 209, 102, 0.6)",
      dotBg: "bg-[#ffd166]",
      dotShadow: "0 0 12px rgba(255, 209, 102, 0.9)",
    },
  };

  const currentTheme = themeColors[theme];

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden">
      {/* Outer Magnetic Aura Ring */}
      {follower && (
        <span
          className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-[width,height,transform,background-color,border-color] duration-200 ease-out ${currentTheme.border} ${currentTheme.bgAura}`}
          style={{
            left: follower.x,
            top: follower.y,
            width: isInteractive ? "52px" : "36px",
            height: isInteractive ? "52px" : "36px",
            boxShadow: currentTheme.shadowAura,
          }}
        />
      )}

      {/* Trailing Dots */}
      {validPoints.map((point, index) => (
        <span
          key={index}
          className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-200 ${currentTheme.dotBg}`}
          style={{
            left: point.x,
            top: point.y,
            width: `${Math.max(3, 11 - index * 1.5)}px`,
            height: `${Math.max(3, 11 - index * 1.5)}px`,
            opacity: Math.max(0.12, 0.9 - index * 0.14),
            boxShadow: currentTheme.dotShadow,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   ANIMATED IMAGE SLIDESHOW
========================================================= */

function ImageSlideshow({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const handlePrev = () => {
    setActive((curr) => (curr - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActive((curr) => (curr + 1) % images.length);
  };

  return (
    <div
      className="relative flex h-[360px] sm:h-[400px] w-full items-center justify-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative star */}
      <div className="absolute -left-2 -top-2 z-40 flex h-12 w-12 rotate-[-12deg] items-center justify-center rounded-full border-2 border-[#102a43] bg-white shadow-[4px_4px_0_#102a43]">
        <Star size={19} fill="currentColor" />
      </div>

      {/* Stacked Animated Cards */}
      <div className="relative h-[290px] sm:h-[330px] w-full max-w-[460px]">
        {images.map((img, index) => {
          const diff = (index - active + images.length) % images.length;
          const isCenter = diff === 0;
          const isRight = diff === 1;
          const isLeft = diff === images.length - 1;

          let styleTransform = "translate(-50%, 40px) scale(0.7)";
          let zIndex = 0;
          let opacity = 0;
          let shadow = "none";
          let rotate = "0deg";

          if (isCenter) {
            styleTransform = "translate(-50%, 0) scale(1)";
            zIndex = 30;
            opacity = 1;
            shadow = "8px 8px 0 #102a43";
            rotate = "0deg";
          } else if (isRight) {
            styleTransform = "translate(-10%, 25px) scale(0.85)";
            zIndex = 20;
            opacity = 0.85;
            shadow = "5px 5px 0 #102a43";
            rotate = "7deg";
          } else if (isLeft) {
            styleTransform = "translate(-90%, 25px) scale(0.85)";
            zIndex = 20;
            opacity = 0.85;
            shadow = "6px 6px 0 #1677ff";
            rotate = "-7deg";
          }

          return (
            <div
              key={img}
              className="absolute left-1/2 top-0 h-full w-[82%] overflow-hidden rounded-[28px] border-2 border-[#102a43] bg-white transition-all duration-700 ease-out"
              style={{
                transform: `${styleTransform} rotate(${rotate})`,
                zIndex,
                opacity,
                boxShadow: shadow,
              }}
            >
              <img
                src={img}
                alt="Slideshow item"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102a43]/30 via-transparent to-transparent" />
            </div>
          );
        })}
      </div>

      {/* Floating Controls & Dots */}
      <div className="absolute -bottom-3 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border-2 border-[#102a43] bg-white px-3 py-1.5 shadow-[4px_4px_0_#102a43]">
        <button
          onClick={handlePrev}
          type="button"
          aria-label="Previous"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-[#edf6ff] text-[#102a43] transition hover:bg-[#1677ff] hover:text-white"
        >
          <ChevronLeft size={15} />
        </button>

        <div className="flex items-center gap-1.5 px-1">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              type="button"
              aria-label={`Slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === active
                  ? "w-5 bg-[#1677ff]"
                  : "w-2 bg-[#b5c8d9] hover:bg-[#829ab1]"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          type="button"
          aria-label="Next"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-[#edf6ff] text-[#102a43] transition hover:bg-[#1677ff] hover:text-white"
        >
          <ChevronRight size={15} />
        </button>

        <span className="border-l border-[#102a43]/20 pl-2 text-xs font-black text-[#102a43]">
          0{active + 1}/0{images.length}
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   GRID BACKGROUND
========================================================= */

function GridBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-80"
      style={{
        backgroundImage:
          "linear-gradient(#d8e5f1 1px, transparent 1px), linear-gradient(90deg, #d8e5f1 1px, transparent 1px)",
        backgroundSize: "42px 42px",
      }}
    />
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<"Programming" | "UI/UX" | "Design">("Programming");

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative overflow-hidden bg-[#faf9f5] text-[#102a43]">
      {/* Global Adaptive Dynamic Cursor */}
      <GlobalCursor />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="fixed left-1/2 top-5 z-[70] w-[92%] max-w-6xl -translate-x-1/2">
        <div className="flex items-center justify-between rounded-full border border-[#102a43]/10 bg-white/90 px-5 py-3 shadow-[0_10px_40px_rgba(16,42,67,0.08)] backdrop-blur-xl">

          <a
            href="#home"
            onClick={scrollTo("home")}
            className="group flex items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1677ff] font-black text-white transition duration-300 group-hover:rotate-12">
              S
            </span>

            <span className="text-lg font-black tracking-tight">
              seant.
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a
              href="#about"
              onClick={scrollTo("about")}
              className="transition hover:text-[#1677ff]"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={scrollTo("skills")}
              className="transition hover:text-[#1677ff]"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={scrollTo("projects")}
              className="transition hover:text-[#1677ff]"
            >
              Works
            </a>
            <a
              href="#education"
              onClick={scrollTo("education")}
              className="transition hover:text-[#1677ff]"
            >
              Education
            </a>
            <a
              href="#experience"
              onClick={scrollTo("experience")}
              className="transition hover:text-[#1677ff]"
            >
              Experience
            </a>
          </div>

          <a
            href="#collab"
            onClick={scrollTo("collab")}
            className="rounded-full bg-[#1677ff] px-5 py-2.5 text-sm font-black text-white shadow-[3px_3px_0_#102a43] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            Let's talk ↗
          </a>
        </div>
      </nav>


      {/* =====================================================
          HERO — GRID (Cursor Theme: Orange)
      ===================================================== */}

      <section
        id="home"
        data-cursor-theme="orange"
        className="relative flex min-h-[90vh] items-center px-6 py-24 lg:px-12 lg:py-28 scroll-mt-24"
      >
        <GridBackground />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">

          <div>

            <Reveal>
              <div className="mb-7 inline-flex rotate-[-2deg] items-center gap-2 rounded-full border-2 border-[#102a43] bg-white px-4 py-2 text-xs font-black shadow-[4px_4px_0_#1677ff] animate-float">
                <Sparkles size={14} className="text-[#1677ff]" />
                INFORMATICS STUDENT × DESIGNER
              </div>

              <h1 className="text-[4.5rem] font-black leading-[.82] tracking-[-.07em] sm:text-[6rem] lg:text-[8rem]">
                I BUILD
                <br />

                <span className="relative inline-block text-[#1677ff]">
                  DIGITAL
                  <span className="absolute -right-5 -top-5 text-3xl text-[#102a43] animate-spin-slow">
                    ✦
                  </span>
                </span>

                <br />

                <span className="font-serif italic">
                  things.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-9 max-w-xl text-lg leading-8 text-[#627d98]">
                Hi, I'm{" "}
                <span className="font-black text-[#102a43]">
                  Seant
                </span>
                . I explore the space between{" "}
                <span className="font-serif text-xl italic text-[#1677ff]">
                  design
                </span>
                , code, and technology to create digital experiences.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="#projects"
                  onClick={scrollTo("projects")}
                  className="group flex items-center gap-3 rounded-full bg-[#1677ff] px-6 py-3.5 font-black text-white shadow-[5px_5px_0_#102a43] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  Explore my work

                  <ArrowUpRight
                    size={18}
                    className="transition group-hover:rotate-45"
                  />
                </a>

                <a
                  href="#about"
                  onClick={scrollTo("about")}
                  className="flex items-center gap-2 rounded-full border-2 border-[#102a43] bg-white px-6 py-3.5 font-black shadow-[4px_4px_0_#102a43] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[#edf6ff]"
                >
                  Who am I?
                </a>

              </div>
            </Reveal>

          </div>


          {/* HERO VISUAL */}

          <div className="relative mx-auto h-[500px] w-full max-w-[500px]">

            <div className="absolute right-4 top-12 h-[380px] w-[78%] rotate-[8deg] rounded-[42px] border-2 border-[#102a43] bg-[#d9ebff] transition duration-500 hover:rotate-6" />

            <div className="absolute left-5 top-8 h-[400px] w-[78%] rotate-[-5deg] overflow-hidden rounded-[42px] border-2 border-[#102a43] bg-[#1677ff] shadow-[10px_10px_0_#102a43] transition duration-500 hover:rotate-[-2deg]">

              <img
                src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=85"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-screen transition duration-700 hover:scale-105"
              />

              <div className="relative z-10 flex h-full flex-col justify-between p-7">

                <div className="flex justify-between text-xs font-black text-white">
                  <span>PORTFOLIO</span>
                  <span>2026</span>
                </div>

                <div>
                  <p className="font-serif text-2xl italic text-white">
                    design × code
                  </p>

                  <p className="mt-1 text-6xl font-black tracking-[-.07em] text-white">
                    SEANT.
                  </p>
                </div>

              </div>
            </div>

            <div className="absolute -right-2 top-1/2 flex h-24 w-24 -translate-y-1/2 rotate-12 items-center justify-center rounded-full border-2 border-[#102a43] bg-white text-center text-xs font-black shadow-[5px_5px_0_#102a43] animate-float">
              LET'S
              <br />
              CREATE
              <br />
              ✦
            </div>

            <div className="absolute bottom-4 left-0 rotate-[-7deg] rounded-2xl border-2 border-[#102a43] bg-white px-4 py-3 shadow-[4px_4px_0_#1677ff] animate-float-delayed">
              <div className="flex items-center gap-2 text-sm font-black">
                <MapPin size={15} className="text-[#1677ff]" />
                Indonesia
              </div>
            </div>

          </div>

        </div>

        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-black text-[#829ab1] md:flex">
          SCROLL
          <ArrowDown size={15} className="animate-bounce" />
        </div>

      </section>


      {/* =====================================================
          ABOUT — NO GRID (Cursor Theme: Blue)
      ===================================================== */}

      <section
        id="about"
        data-cursor-theme="blue"
        className="relative bg-[#faf9f5] px-6 py-16 lg:px-12 lg:py-20 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">

            <Reveal>
              <div>
                <p className="text-xs font-black uppercase tracking-[.3em] text-[#1677ff]">
                  01 — About me
                </p>

                <h2 className="mt-4 text-5xl font-black leading-[.9] tracking-[-.06em] md:text-6xl">
                  A LITTLE
                  <br />
                  <span className="font-serif font-normal italic">
                    bit
                  </span>
                  <br />
                  about me.
                </h2>
              </div>
            </Reveal>

            <div className="pt-3">

              <Reveal delay={100}>
                <p className="max-w-4xl text-2xl font-semibold leading-[1.3] tracking-tight sm:text-3xl md:text-4xl">
                  I like making things that are{" "}
                  <span className="font-serif italic text-[#1677ff]">
                    useful,
                  </span>{" "}
                  <span className="text-[#1677ff]">
                    visual,
                  </span>{" "}
                  and a little bit{" "}
                  <span className="font-serif italic">
                    unexpected.
                  </span>
                </p>
              </Reveal>

              <Reveal delay={180}>
                <p className="mt-6 max-w-2xl text-base leading-7 text-[#627d98] sm:text-lg sm:leading-8">
                  I'm an Informatics student interested in UI/UX, frontend
                  development and artificial intelligence. I enjoy understanding
                  how things work from the fundamentals and then turning those
                  ideas into something people can actually use.
                </p>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-9 flex flex-wrap gap-3">

                  {[
                    "Design systems",
                    "Component architecture",
                    "Creative coding",
                    "Interaction design",
                    "Exploratory AI",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border-2 border-[#102a43] bg-white px-5 py-2.5 text-xs font-black shadow-[3px_3px_0_#102a43] transition hover:-translate-y-1 hover:bg-[#edf6ff]"
                    >
                      {item}
                    </span>
                  ))}

                </div>
              </Reveal>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SKILLS — GRID (Cursor Theme: Orange)
      ===================================================== */}

      <section
        id="skills"
        data-cursor-theme="orange"
        className="relative overflow-hidden bg-[#edf6ff] px-6 py-16 lg:px-12 lg:py-20 scroll-mt-24"
      >
        <GridBackground />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <Reveal>
              <div>
                <p className="text-xs font-black uppercase tracking-[.3em] text-[#1677ff]">
                  02 — Stack & skills
                </p>

                <h2 className="mt-4 text-5xl font-black leading-[.9] tracking-[-.06em] md:text-6xl">
                  TOOLS
                  <br />
                  <span className="font-serif font-normal italic">
                    I use.
                  </span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="max-w-md text-base leading-7 text-[#627d98]">
                A collection of technologies, design tools and frameworks that I
                currently work with and continue to explore.
              </p>
            </Reveal>

          </div>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <Reveal key={skill.name} delay={index * 80}>
                  <div className="group relative rounded-[28px] border-2 border-[#102a43] bg-white p-7 shadow-[6px_6px_0_#102a43] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[10px_10px_0_#1677ff]">

                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6ff] text-[#1677ff] transition duration-300 group-hover:bg-[#1677ff] group-hover:text-white group-hover:rotate-12 group-hover:scale-110">
                        <Icon size={22} />
                      </div>

                      <span className="font-mono text-xs font-black text-[#829ab1]">
                        {skill.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-black">
                      {skill.name}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#627d98]">
                      {skill.description}
                    </p>

                  </div>
                </Reveal>
              );
            })}

          </div>


          <Reveal delay={200}>
            <div className="mt-12 rounded-[30px] border-2 border-[#102a43] bg-white p-8 shadow-[6px_6px_0_#102a43]">

              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1677ff] text-white animate-float">
                    <Terminal size={26} />
                  </div>

                  <div>
                    <h3 className="text-xl font-black">
                      Always exploring new technologies
                    </h3>

                    <p className="text-sm text-[#627d98]">
                      Currently diving deeper into machine learning models, system
                      architecture and modern interface design.
                    </p>
                  </div>

                </div>

                <a
                  href="#collab"
                  onClick={scrollTo("collab")}
                  className="rounded-full bg-[#1677ff] px-6 py-3 text-sm font-black text-white shadow-[4px_4px_0_#102a43] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                >
                  Start a conversation ↗
                </a>

              </div>

            </div>
          </Reveal>

        </div>
      </section>


      {/* =====================================================
          PROJECTS — NO GRID (Cursor Theme: Blue)
      ===================================================== */}

      <section
        id="projects"
        data-cursor-theme="blue"
        className="relative bg-[#faf9f5] px-6 py-16 lg:px-12 lg:py-20 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-start">

            <Reveal>
              <div>
                <p className="text-xs font-black uppercase tracking-[.3em] text-[#1677ff]">
                  03 — Selected works
                </p>

                <h2 className="mt-4 text-5xl font-black leading-[.9] tracking-[-.06em] md:text-6xl lg:text-7xl">
                  THINGS I'VE
                  <br />
                  <span className="font-serif font-normal italic text-[#1677ff]">
                    made.
                  </span>
                </h2>

                {/* Category Filter Tabs */}
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {(["Programming", "UI/UX", "Design"] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      type="button"
                      className={`rounded-full px-5 py-2.5 text-xs font-black transition-all duration-200 ${
                        selectedCategory === cat
                          ? "bg-[#1677ff] text-white shadow-[3px_3px_0_#102a43] -translate-y-0.5"
                          : "border-2 border-[#102a43] bg-white text-[#102a43] hover:bg-[#edf6ff] shadow-[2px_2px_0_#102a43]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Elevated "Lihat Semua Projek" Button */}
            <Reveal delay={150}>
              <div className="sm:pt-1">
                <a
                  href="/project"
                  className="group inline-flex items-center gap-2.5 rounded-full border-2 border-[#102a43] bg-white px-5 py-3 text-sm font-black text-[#102a43] shadow-[4px_4px_0_#1677ff] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none hover:bg-[#edf6ff]"
                >
                  <span>Lihat Semua Projek</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1677ff] text-white transition duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={15} />
                  </span>
                </a>
              </div>
            </Reveal>

          </div>


          {/* PROGRAMMING CATEGORY — BENTO GRID CARDS */}
          {selectedCategory === "Programming" && (
            <div className="space-y-16">
              {programmingProjects.map((project, index) => (
                <article
                  key={project.title}
                  className="group grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]"
                >
                  {/* BENTO GRID IMAGES CONTAINER — UKURAN ORIGINAL (h-[390px]) */}
                  <div
                    className={`relative h-[390px] w-full overflow-hidden rounded-[35px] border-2 border-[#102a43] bg-white shadow-[8px_8px_0_#102a43] ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    {/* BENTO IMAGE TANPA MARGIN / GAP — TIAP GAMBAR NEMPEL */}
                    <div className="grid h-full w-full grid-cols-12 gap-0">
                      {/* Tile Kiri / Utama */}
                      <div className="relative col-span-7 h-full overflow-hidden border-r-2 border-[#102a43]">
                        <img
                          src={project.images[0]}
                          alt={`${project.title} 1`}
                          className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                        />
                      </div>

                      {/* Tile Kanan / Stacked */}
                      <div className="col-span-5 grid h-full grid-rows-2 gap-0">
                        <div className="relative h-full overflow-hidden border-b-2 border-[#102a43]">
                          <img
                            src={project.images[1]}
                            alt={`${project.title} 2`}
                            className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                          />
                        </div>
                        <div className="relative h-full overflow-hidden">
                          <img
                            src={project.images[2]}
                            alt={`${project.title} 3`}
                            className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Floating Badges */}
                    <div className="absolute left-5 top-5 rounded-full border-2 border-[#102a43] bg-white px-4 py-2 text-xs font-black shadow-[2px_2px_0_#102a43]">
                      {project.number}
                    </div>

                    <div className="absolute bottom-5 left-5 rounded-full bg-[#1677ff] px-4 py-2 text-xs font-black text-white shadow-[2px_2px_0_#102a43]">
                      {project.category}
                    </div>
                  </div>

                  {/* PROJECT INFO */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Reveal delay={index * 60 + 80}>
                      <div className="mb-5 flex h-14 w-14 rotate-[-8deg] items-center justify-center rounded-2xl border-2 border-[#102a43] bg-white shadow-[4px_4px_0_#1677ff]">
                        {index === 0 ? (
                          <Layers3 size={23} />
                        ) : index === 1 ? (
                          <Sparkles size={23} />
                        ) : (
                          <Zap size={23} />
                        )}
                      </div>

                      <h3 className="text-4xl font-black tracking-[-.05em] sm:text-5xl">
                        {project.title}
                      </h3>

                      <p className="mt-5 max-w-lg text-lg leading-8 text-[#627d98]">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border-2 border-[#102a43] bg-white px-4 py-2 text-xs font-black shadow-[2px_2px_0_#102a43]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href="/project"
                        className="group/btn mt-8 inline-flex items-center gap-3 font-black text-[#102a43] transition hover:text-[#1677ff]"
                      >
                        <span>View project</span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1677ff] text-white transition group-hover/btn:rotate-45">
                          <ArrowUpRight size={18} />
                        </span>
                      </a>
                    </Reveal>
                  </div>
                </article>
              ))}
            </div>
          )}


          {/* UI/UX & DESIGN CATEGORIES — SIMPLE CLEAN CARDS */}
          {selectedCategory !== "Programming" && (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {(selectedCategory === "UI/UX" ? uiuxProjects : designProjects).map((item, idx) => (
                <Reveal key={item.title} delay={idx * 90}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-[28px] border-2 border-[#102a43] bg-white shadow-[6px_6px_0_#102a43] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[8px_8px_0_#1677ff]">
                    {/* Featured Mockup Preview */}
                    <div className="relative h-56 w-full overflow-hidden border-b-2 border-[#102a43] bg-[#edf6ff]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-4 top-4 rounded-full border-2 border-[#102a43] bg-white px-3 py-1 text-xs font-black shadow-[2px_2px_0_#102a43]">
                        {item.number}
                      </div>
                      <div className="absolute bottom-4 left-4 rounded-full bg-[#1677ff] px-3 py-1 text-[11px] font-black text-white shadow-[2px_2px_0_#102a43]">
                        {item.category}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h3 className="text-2xl font-black tracking-tight group-hover:text-[#1677ff] transition">
                          {item.title}
                        </h3>
                        <p className="mt-2.5 text-sm leading-6 text-[#627d98]">
                          {item.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {item.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-[#102a43]/20 bg-[#edf6ff] px-3 py-1 text-[11px] font-bold text-[#102a43]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href="/project"
                        className="mt-6 inline-flex items-center gap-2 text-xs font-black text-[#102a43] transition hover:text-[#1677ff]"
                      >
                        <span>View project details</span>
                        <ArrowUpRight size={15} className="transition duration-300 group-hover:rotate-45" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

        </div>
      </section>


      {/* =====================================================
          EDUCATION — GRID (Cursor Theme: Orange)
      ===================================================== */}

      <section
        id="education"
        data-cursor-theme="orange"
        className="relative overflow-hidden bg-[#edf6ff] px-6 py-16 lg:px-12 lg:py-20 scroll-mt-24"
      >
        <GridBackground />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">

            <div>

              <Reveal>
                <div>
                  <p className="text-xs font-black uppercase tracking-[.3em] text-[#1677ff]">
                    04 — Education
                  </p>

                  <h2 className="mt-4 text-5xl font-black leading-[.85] tracking-[-.06em] md:text-6xl">
                    WHERE
                    <br />
                    I{" "}
                    <span className="font-serif font-normal italic">
                      learn.
                    </span>
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-8 border-l-2 border-[#1677ff] pl-5">

                  <p className="text-[11px] font-black tracking-[.2em] text-[#1677ff]">
                    2025 — PRESENT
                  </p>

                  <h3 className="mt-2 text-xl font-black sm:text-2xl">
                    Informatics
                  </h3>

                  <p className="mt-1 text-sm font-bold text-[#486581] sm:text-base">
                    Universitas Jenderal Soedirman
                  </p>

                  <p className="mt-3 max-w-md text-sm leading-6 text-[#627d98]">
                    Exploring software development, system analysis, artificial
                    intelligence, UI/UX, databases and computer fundamentals.
                  </p>

                </div>
              </Reveal>

            </div>

            <ImageSlideshow images={educationImages} />

          </div>

        </div>
      </section>


      {/* =====================================================
          EXPERIENCE — NO GRID (Cursor Theme: Blue)
      ===================================================== */}

      <section
        id="experience"
        data-cursor-theme="blue"
        className="bg-[#faf9f5] px-6 py-16 lg:px-12 lg:py-20 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">

            <ImageSlideshow images={experienceImages} />

            <div>

              <Reveal>
                <div>
                  <p className="text-xs font-black uppercase tracking-[.3em] text-[#1677ff]">
                    05 — Experience
                  </p>

                  <h2 className="mt-4 text-5xl font-black leading-[.85] tracking-[-.06em] md:text-6xl">
                    WHAT
                    <br />
                    I'VE{" "}
                    <span className="font-serif font-normal italic text-[#1677ff]">
                      been
                    </span>
                    <br />
                    doing.
                  </h2>
                </div>
              </Reveal>

              <div className="mt-8 space-y-6">

                <Reveal delay={120}>
                  <div className="relative border-l-2 border-[#b9d9ff] pl-5">

                    <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-[#1677ff] bg-white" />

                    <p className="text-[11px] font-black tracking-[.2em] text-[#1677ff]">
                      2026 — NOW
                    </p>

                    <h3 className="mt-1 text-lg font-black sm:text-xl">
                      Media Communication & Information
                    </h3>

                    <p className="text-xs font-bold text-[#486581] sm:text-sm">
                      HMIF UNSOED
                    </p>

                    <p className="mt-2 text-xs leading-5 text-[#627d98] sm:text-sm sm:leading-6">
                      Working on visual communication, digital content and
                      creative media for Informatics students.
                    </p>

                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <div className="relative border-l-2 border-[#b9d9ff] pl-5">

                    <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-[#1677ff] bg-white" />

                    <p className="text-[11px] font-black tracking-[.2em] text-[#1677ff]">
                      2026
                    </p>

                    <h3 className="mt-1 text-lg font-black sm:text-xl">
                      UI/UX Designer
                    </h3>

                    <p className="text-xs font-bold text-[#486581] sm:text-sm">
                      BSO Catalyst
                    </p>

                    <p className="mt-2 text-xs leading-5 text-[#627d98] sm:text-sm sm:leading-6">
                      Exploring user interface and experience design while
                      developing practical digital products.
                    </p>

                  </div>
                </Reveal>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          LET'S COLLAB — FULL FLOWING DYNAMIC WHITE RIBBONS & ENGAGING LAYOUT
      ===================================================== */}

      <section
        id="collab"
        data-cursor-theme="light"
        className="relative overflow-hidden bg-[#1677ff] px-6 py-20 lg:px-12 lg:py-28 scroll-mt-24"
      >
        {/* Subtle grid pattern background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Dynamic Full-Canvas Flowing Solid White Ribbons (Bold, fluid, no collision) */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-20 animate-ribbon"
          viewBox="0 0 1440 700"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Upper flowing wave ribbon across canvas */}
          <path
            d="M -80 180 C 260 320, 520 80, 840 240 C 1120 380, 1320 120, 1520 180"
            stroke="#ffffff"
            strokeWidth="62"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Lower flowing wave ribbon across canvas */}
          <path
            d="M -80 540 C 280 400, 620 620, 960 440 C 1220 320, 1380 580, 1520 500"
            stroke="#ffffff"
            strokeWidth="54"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Top-Right accent ribbon curl */}
          <path
            d="M 1120 -60 C 1260 140, 1420 80, 1520 -40"
            stroke="#ffffff"
            strokeWidth="44"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="relative mx-auto max-w-4xl text-center">

          {/* Top Pill / Badge */}
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-black tracking-wide text-white backdrop-blur-md shadow-[3px_3px_0_rgba(16,42,67,0.15)]">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>06 — AVAILABLE FOR FREELANCE & COLLABORATIONS</span>
            </div>
          </Reveal>

          {/* Main Headline */}
          <Reveal delay={100}>
            <h2 className="text-5xl font-black leading-[.9] tracking-[-.06em] text-white sm:text-7xl md:text-8xl">
              HAVE AN
              <br />
              <span className="relative inline-block font-serif font-normal italic">
                idea?
                {/* Hand-drawn smooth white wave underline */}
                <svg
                  className="absolute -bottom-3.5 left-0 w-full overflow-visible"
                  height="18"
                  viewBox="0 0 160 18"
                  fill="none"
                >
                  <path
                    d="M 4 13 Q 40 2, 80 12 T 156 9"
                    stroke="#ffffff"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </Reveal>

          {/* Description */}
          <Reveal delay={180}>
            <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Whether you need an intuitive website, responsive product interface,
              interactive design experiment, or custom frontend development — let's build something memorable together.
            </p>
          </Reveal>

          {/* Capability Grid / Pills */}
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {[
                "✦ UI/UX Design",
                "✦ Frontend Engineering",
                "✦ Interactive Websites",
                "✦ Design Systems",
                "✦ AI & Machine Learning",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20 hover:-translate-y-0.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Action Button at the very bottom */}
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@example.com"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-[#102a43] bg-white px-8 py-4 text-base font-black text-[#102a43] shadow-[6px_6px_0_#102a43] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-[#edf6ff]"
              >
                <Mail size={19} />
                <span>Let's talk</span>
                <ArrowUpRight size={19} className="transition duration-300 group-hover:rotate-45" />
              </a>

              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur-md transition hover:bg-white/20 hover:border-white"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          FOOTER — CLEAN, CONCISE & COMPACT (NO GRID, NOT TOO LONG)
      ===================================================== */}

      <footer
        data-cursor-theme="light"
        className="border-t-2 border-[#102a43] bg-[#0c1f38] px-6 py-12 text-white lg:px-12"
      >
        <div className="mx-auto max-w-7xl">

          {/* Main Footer Row */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

            {/* Brand & Tagline */}
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1677ff] text-lg font-black text-white shadow-[3px_3px_0_#ffffff]">
                  S
                </span>
                <span className="text-3xl font-black tracking-tight">seant.</span>
              </div>
              <p className="mt-2 text-xs text-white/60">
                Informatics Student, UI/UX & Frontend Developer · Indonesia 🇮🇩
              </p>
            </div>

            {/* Quick Navigation Links */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-white/80">
              <a href="#about" onClick={scrollTo("about")} className="transition hover:text-[#69b1ff]">About</a>
              <a href="#skills" onClick={scrollTo("skills")} className="transition hover:text-[#69b1ff]">Skills</a>
              <a href="#projects" onClick={scrollTo("projects")} className="transition hover:text-[#69b1ff]">Works</a>
              <a href="#education" onClick={scrollTo("education")} className="transition hover:text-[#69b1ff]">Education</a>
              <a href="#experience" onClick={scrollTo("experience")} className="transition hover:text-[#69b1ff]">Experience</a>
              <a href="/project" className="transition hover:text-[#69b1ff]">All Projects ↗</a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {[
                { name: "GitHub", href: "https://github.com", icon: GithubIcon },
                { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
                { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
                { name: "Figma", href: "https://figma.com", icon: Figma },
                { name: "WhatsApp", href: "https://wa.me", icon: WhatsappIcon },
              ].map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={soc.name}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition hover:border-[#1677ff] hover:bg-[#1677ff] hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>

          </div>

          {/* Bottom Bar: Copyright & Back to Top */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
            <p>© 2026 Muhammad Rifqi (Seant). All rights reserved.</p>

            <button
              onClick={scrollTo("home")}
              type="button"
              className="group inline-flex items-center gap-1.5 font-bold text-white/70 transition hover:text-white"
            >
              <span>Back to Top</span>
              <ChevronUp size={14} className="transition group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>
      </footer>

    </main>
  );
}