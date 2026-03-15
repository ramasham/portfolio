import { motion } from "motion/react";
import {
  ArrowRight,
  Braces,
  Code2,
  Cpu,
  ExternalLink,
  FolderOpen,
  Github,
  House,
  Linkedin,
  Mail,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { TypingEffect } from "./TypingEffect";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

const timelineItems = [
  { id: "home", label: "Home", icon: House },
  { id: "about", label: "About", icon: Code2 },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
] as const;

type ScrollSectionProps = {
  id: (typeof timelineItems)[number]["id"];
  isActive: boolean;
  className: string;
  children: ReactNode;
};

function ScrollSection({ id, isActive, className, children }: ScrollSectionProps) {
  return (
    <motion.section
      id={id}
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0.18,
        y: isActive ? 0 : 52,
        scale: isActive ? 1 : 0.985,
      }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`${className} scroll-mt-24 will-change-transform`}
    >
      {children}
    </motion.section>
  );
}

export function Home() {
  const githubUrl = "https://github.com/ramasham";
  const gmailComposeUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=alshamasnehrama%40gmail.com";
  const linkedInUrl = "https://linkedin.com/in/ramasham";
  const [activeSection, setActiveSection] = useState<(typeof timelineItems)[number]["id"]>(
    "home",
  );
  const codePreview = [
    {
      line: "01",
      content: (
        <>
          <span className="text-[#8B5CF6]">const</span>{" "}
          <span className="text-[#E5E7EB]">engineer</span>{" "}
          <span className="text-[#F59E0B]">=</span>{" "}
          <span className="text-[#E5E7EB]">{"{"}</span>
        </>
      ),
    },
    {
      line: "02",
      content: (
        <>
          <span className="text-[#60A5FA]">name</span>
          <span className="text-[#E5E7EB]">: </span>
          <span className="text-[#C4B5FD]">'Rama Alshamasneh'</span>
          <span className="text-[#E5E7EB]">,</span>
        </>
      ),
    },
    {
      line: "03",
      content: (
        <>
          <span className="text-[#60A5FA]">role</span>
          <span className="text-[#E5E7EB]">: </span>
          <span className="text-[#C4B5FD]">'Backend Engineer'</span>
          <span className="text-[#E5E7EB]">,</span>
        </>
      ),
    },
    {
      line: "04",
      content: (
        <>
          <span className="text-[#60A5FA]">focus</span>
          <span className="text-[#E5E7EB]">: </span>
          <span className="text-[#C4B5FD]">'Systems + APIs + Linux'</span>
          <span className="text-[#E5E7EB]">,</span>
        </>
      ),
    },
    {
      line: "05",
      content: (
        <>
          <span className="text-[#60A5FA]">stack</span>
          <span className="text-[#E5E7EB]">: [</span>
          <span className="text-[#C4B5FD]">'C'</span>
          <span className="text-[#E5E7EB]">, </span>
          <span className="text-[#C4B5FD]">'C++'</span>
          <span className="text-[#E5E7EB]">, </span>
          <span className="text-[#C4B5FD]">'ASP.NET'</span>
          <span className="text-[#E5E7EB]">, </span>
          <span className="text-[#C4B5FD]">'Docker'</span>
          <span className="text-[#E5E7EB]">],</span>
        </>
      ),
    },
    {
      line: "06",
      content: (
        <>
          <span className="text-[#60A5FA]">mindset</span>
          <span className="text-[#E5E7EB]">: </span>
          <span className="text-[#C4B5FD]">'Build with precision'</span>
          <span className="text-[#E5E7EB]">,</span>
        </>
      ),
    },
    {
      line: "07",
      content: <span className="text-[#E5E7EB]">{"};"}</span>,
    },
    { line: "08", content: <span>&nbsp;</span> },
    {
      line: "09",
      content: (
        <>
          <span className="text-[#E5E7EB]">engineer</span>
          <span className="text-[#A78BFA]">.ship</span>
          <span className="text-[#E5E7EB]">();</span>
        </>
      ),
    },
  ];

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollThreshold = window.innerHeight * 0.4;
      let currentSection: (typeof timelineItems)[number]["id"] = "home";

      for (const item of timelineItems) {
        const section = document.getElementById(item.id);
        if (!section) {
          continue;
        }

        const { top } = section.getBoundingClientRect();
        if (top <= scrollThreshold) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <div>
      <div className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block 2xl:right-8">
        <div className="pointer-events-auto relative flex flex-col items-center py-3">
          <div className="absolute bottom-7 top-7 w-px bg-[linear-gradient(180deg,rgba(236,72,153,0.08),rgba(139,92,246,0.4),rgba(236,72,153,0.14))]" />
          {timelineItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                aria-label={`Jump to ${item.label}`}
                className="group relative flex h-18 w-18 items-center justify-center"
                title={item.label}
              >
                <span
                  className="pointer-events-none absolute right-full mr-3 translate-x-2 rounded-full border border-white/10 bg-[#09090f]/90 px-3 py-1 text-[11px] font-medium text-[#E5E7EB] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                >
                  {item.label}
                </span>

                {isActive ? (
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#F9A8D4]/70 bg-[#11111A] shadow-[0_0_26px_rgba(236,72,153,0.18)]">
                    <span className="absolute inset-[-6px] rounded-full border border-dashed border-[#F9A8D4]/45" />
                    <span className="absolute inset-[-12px] rounded-full border border-[#EC4899]/12" />
                    <Icon className="relative z-10 h-4 w-4 text-[#F9A8D4]" />
                  </span>
                ) : (
                  <span className="relative h-3.5 w-3.5 rounded-full border border-white/12 bg-[#181823] transition-all duration-300 group-hover:border-[#EC4899]/35 group-hover:bg-[#2a2234]" />
                )}
              </a>
            );
          })}
        </div>
      </div>

      <ScrollSection
        id="home"
        isActive={activeSection === "home"}
        className="relative min-h-screen overflow-hidden px-4 pb-8 pt-8 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(236,72,153,0.14),transparent_24%),radial-gradient(circle_at_76%_72%,rgba(167,139,250,0.12),transparent_26%),linear-gradient(180deg,#120f1f_0%,#0f0f1a_52%,#090910_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40" />
          <div className="absolute left-[-10%] top-24 h-80 w-80 rounded-full bg-[#8B5CF6]/18 blur-3xl" />
          <div className="absolute bottom-4 right-[8%] h-80 w-80 rounded-full bg-[#EC4899]/12 blur-3xl" />
          <div className="absolute bottom-0 right-[-8%] h-96 w-96 rounded-full bg-[#A78BFA]/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center">
          <div className="w-full -translate-y-8 px-6 py-4 sm:px-8 lg:-translate-y-10 lg:px-12 lg:py-6">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.8 }}
                  className="mb-8"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <span className="font-mono text-5xl font-bold tracking-[-0.18em] text-[#F0ABFC]">
                      &gt;_
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#6B7280]">
                        Backend Engineer
                      </p>
                    </div>
                  </div>

                  <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                    Building Software{" "}
                    <span className="bg-gradient-to-r from-[#F0ABFC] via-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent">
                      From Strong
                    </span>
                    <br />
                    <span className="text-[#E5E7EB]/92">Foundations</span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="mb-8 max-w-2xl space-y-4"
                >
                  <div className="text-xl font-mono text-[#F5D0FE] sm:text-2xl">
                    <TypingEffect
                      texts={[
                        "Backend Engineer",
                        "Systems Programmer",
                        "Linux Enthusiast",
                        "Problem Solver",
                      ]}
                    />
                  </div>
                  <p className="text-lg leading-relaxed text-[#9CA3AF] sm:text-xl">
                    I'm <span className="font-semibold text-white">Rama Alshamasneh</span>, a
                    backend engineer focused on performant APIs, Linux systems, and clean,
                    production-ready architecture.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.8 }}
                  className="mb-8 flex flex-wrap gap-4"
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899] px-7 py-4 text-base font-semibold text-white shadow-[0_12px_35px_rgba(236,72,153,0.28)] transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_16px_45px_rgba(236,72,153,0.38)]"
                  >
                    Let's Collaborate
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-base font-semibold text-[#E5E7EB] transition-colors duration-300 hover:border-[#EC4899]/30 hover:bg-[linear-gradient(135deg,rgba(139,92,246,0.1),rgba(236,72,153,0.08))]"
                  >
                    View Projects
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-wrap gap-3"
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#E5E7EB] transition-all duration-300 hover:border-[#EC4899]/35 hover:bg-[linear-gradient(135deg,rgba(139,92,246,0.14),rgba(236,72,153,0.12))] hover:text-[#F5D0FE]"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#E5E7EB] transition-all duration-300 hover:border-[#EC4899]/35 hover:bg-[linear-gradient(135deg,rgba(139,92,246,0.14),rgba(236,72,153,0.12))] hover:text-[#F5D0FE]"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#E5E7EB] transition-all duration-300 hover:border-[#EC4899]/35 hover:bg-[linear-gradient(135deg,rgba(139,92,246,0.14),rgba(236,72,153,0.12))] hover:text-[#F5D0FE]"
                    aria-label="Email"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.85 }}
                className="relative"
              >
                <div className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle,rgba(236,72,153,0.18),transparent_55%),radial-gradient(circle_at_35%_40%,rgba(139,92,246,0.2),transparent_64%)] blur-2xl" />
                <div className="relative -translate-y-2 mb-4 flex justify-center">
                  <div className="inline-flex items-center gap-3 rounded-full border border-[#EC4899]/20 bg-[linear-gradient(135deg,rgba(139,92,246,0.1),rgba(236,72,153,0.1))] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#F5D0FE]">
                    <span className="h-2 w-2 rounded-full bg-[#F9A8D4]" />
                    Welcome to my universe
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a12] shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
                  <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#8B5CF6]" />
                      <span className="h-3 w-3 rounded-full bg-[#EC4899]/85" />
                      <span className="h-3 w-3 rounded-full bg-[#C4B5FD]/40" />
                    </div>
                    <div className="flex items-center gap-2 text-sm font-mono text-[#6B7280]">
                      <Braces className="h-4 w-4 text-[#8B5CF6]" />
                      <span>portfolio.ts</span>
                    </div>
                  </div>

                  <div className="space-y-3 px-5 py-8 font-mono text-[15px] leading-8 sm:px-8 sm:text-lg">
                    {codePreview.map((row) => (
                      <div key={row.line} className="grid grid-cols-[44px_1fr] gap-4">
                        <span className="text-[#4B5563]">{row.line}</span>
                        <span className="text-[#E5E7EB]">{row.content}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{
                opacity: { delay: 1 },
                y: { duration: 1.5, repeat: Infinity },
              }}
              className="mt-10 flex justify-center lg:mt-12"
            >
              <a
                href="#about"
                aria-label="Scroll to About section"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EC4899]/25 bg-[linear-gradient(135deg,rgba(139,92,246,0.08),rgba(236,72,153,0.08))]"
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-[#F9A8D4]"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection id="about" isActive={activeSection === "about"} className="relative">
        <About />
      </ScrollSection>
      <ScrollSection id="skills" isActive={activeSection === "skills"} className="relative">
        <Skills />
      </ScrollSection>
      <ScrollSection id="projects" isActive={activeSection === "projects"} className="relative">
        <Projects />
      </ScrollSection>
      <ScrollSection id="contact" isActive={activeSection === "contact"} className="relative">
        <Contact />
      </ScrollSection>
    </div>
  );
}
