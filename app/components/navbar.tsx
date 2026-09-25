"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  Home,
  User,
  FolderKanban,
  Sun,
  Moon,
  Globe,
  ChevronDown,
  Mail,
} from "lucide-react";

/**
 * ─────────────────────────────────────────────────────────────
 *  NAVBAR — 3 zona: Profil (kiri) · Menu glass (tengah) · Contact (kanan)
 * ─────────────────────────────────────────────────────────────
 *  Cara pakai:
 *  1. npm install lucide-react
 *  2. Pastikan tailwind.config.ts punya `darkMode: "class"`
 *  3. Import <Navbar /> di app/layout.tsx, taruh di dalam <body>
 *     sebelum {children}
 */

const NAV_LINKS = [
  { id: "home", label: "Home", icon: Home, href: "#home" },
  { id: "about", label: "About", icon: User, href: "#about" },
  { id: "project", label: "Project", icon: FolderKanban, href: "#project" },
] as const;

const LANGUAGES = [
  { code: "ID", label: "Indonesia" },
  { code: "EN", label: "English" },
] as const;

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [isDark, setIsDark] = useState<boolean>(false);
  const [langOpen, setLangOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]>(
    LANGUAGES[0]
  );
  const langRef = useRef<HTMLDivElement>(null);

  // Terapkan class "dark" ke <html> setiap kali isDark berubah
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  // Tutup dropdown bahasa saat klik di luar area
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex items-center justify-center px-6">
      {/* Satu grup berisi ketiga bagian, saling berdekatan & center sebagai unit */}
      <div className="flex items-center gap-3">
        {/* ───────── KIRI: Foto profil ───────── */}
        <button
          type="button"
          className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white/40 dark:ring-white/20 shadow-md transition-transform hover:scale-105"
          aria-label="Profil"
        >
          <Image
            src="https://i.pravatar.cc/150?img=12"
            alt="Foto profil"
            fill
            sizes="48px"
            className="object-cover"
            priority
          />
        </button>

        {/* ───────── TENGAH: Menu glass ───────── */}
        <nav
          className="
            flex h-12 items-center gap-1
            rounded-full border border-white/30 dark:border-white/10
            bg-white/20 dark:bg-white/5
            px-2
            shadow-lg shadow-black/5
            backdrop-blur-xl backdrop-saturate-150
          "
        >
        {NAV_LINKS.map(({ id, label, icon: Icon, href }) => {
          const isActive = activeLink === id;
          const isIconOnly = id === "home";

          return (
            <a
              key={id}
              href={href}
              onClick={() => setActiveLink(id)}
              className={`
                flex items-center gap-2 rounded-full text-sm font-medium
                transition-colors duration-200
                ${isIconOnly ? "px-3 py-2" : "px-4 py-2"}
                ${
                  isActive
                    ? "bg-white/60 dark:bg-white/15 text-gray-900 dark:text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-white/10"
                }
              `}
            >
              <Icon size={18} strokeWidth={2} />
              {!isIconOnly && <span>{label}</span>}
            </a>
          );
        })}

        {/* Garis pemisah */}
        <div className="mx-1 h-6 w-px bg-gray-400/30 dark:bg-white/15" />

        {/* Switch dark / light mode */}
        <button
          type="button"
          onClick={() => setIsDark((prev) => !prev)}
          aria-label="Ganti tema gelap/terang"
          className="
            relative flex h-8 w-14 items-center rounded-full
            bg-white/40 dark:bg-white/10
            px-1 transition-colors
          "
        >
          <span
            className={`
              flex h-6 w-6 items-center justify-center rounded-full
              bg-white dark:bg-gray-900
              shadow-sm transition-transform duration-300 ease-out
              ${isDark ? "translate-x-6" : "translate-x-0"}
            `}
          >
            {isDark ? (
              <Moon size={14} className="text-gray-200" />
            ) : (
              <Sun size={14} className="text-yellow-500" />
            )}
          </span>
        </button>

        {/* Garis pemisah */}
        <div className="mx-1 h-6 w-px bg-gray-400/30 dark:bg-white/15" />

        {/* Pilihan bahasa */}
        <div className="relative" ref={langRef}>
          <button
            type="button"
            onClick={() => setLangOpen((prev) => !prev)}
            className="
              flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium
              text-gray-700 dark:text-gray-300
              hover:bg-white/30 dark:hover:bg-white/10
              transition-colors
            "
          >
            <Globe size={18} strokeWidth={2} />
            <span>{language.code}</span>
            <ChevronDown
              size={14}
              className={`transition-transform ${langOpen ? "rotate-180" : ""}`}
            />
          </button>

          {langOpen && (
            <div
              className="
                absolute left-1/2 top-12 -translate-x-1/2
                min-w-[140px] overflow-hidden rounded-2xl
                border border-white/30 dark:border-white/10
                bg-white/70 dark:bg-gray-900/70
                backdrop-blur-xl shadow-lg
              "
            >
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setLanguage(lang);
                    setLangOpen(false);
                  }}
                  className={`
                    flex w-full items-center justify-between px-4 py-2 text-sm
                    transition-colors
                    ${
                      language.code === lang.code
                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-white/10"
                    }
                  `}
                >
                  <span>{lang.label}</span>
                  <span className="text-xs text-gray-400">{lang.code}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        </nav>

        {/* ───────── KANAN: Tombol Contact ───────── */}
        <a
          href="#contact"
          className="
            flex h-12 shrink-0 items-center gap-2 rounded-full
            bg-blue-600 px-5 text-sm font-semibold text-white
            shadow-md shadow-blue-600/20
            transition-all duration-200
            hover:bg-blue-700 hover:shadow-blue-600/30
            active:scale-95
          "
        >
          <Mail size={18} strokeWidth={2} />
          <span>Contact</span>
        </a>
      </div>
    </header>
  );
}