import { motion } from "motion/react";
import { Server, Terminal, Network, Database } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Expertise in building scalable server-side applications and RESTful APIs",
    },
    {
      icon: Terminal,
      title: "Systems Programming",
      description: "Low-level programming in C/C++ with focus on performance and efficiency",
    },
    {
      icon: Network,
      title: "Linux & Networking",
      description: "Deep understanding of Linux systems, sockets, and network protocols",
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Proficient in SQL databases and data structure optimization",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h1 className="mb-4 text-4xl font-bold text-[#E5E7EB] sm:text-5xl md:text-6xl">
            About Me
          </h1>
          <div className="mx-auto mb-6 h-1 w-20 bg-[linear-gradient(90deg,#EC4899,#8B5CF6)]" />
          <p className="mx-auto max-w-3xl text-base text-[#9CA3AF] sm:text-lg md:text-xl">
            Computer Science student focused on backend development and systems programming
          </p>
        </motion.div>

        {/* Main Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-12 max-w-4xl text-center sm:mb-16"
        >
          <div className="space-y-4 text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
            <p>
              I&apos;m Rama Alshamasneh, a Computer Science student and graduate of the 42
              Amman software engineering program. My work centers on backend development
              and systems programming, with a strong focus on understanding how software
              behaves at the system level.
            </p>
            <p>
              I have experience building backend services and APIs, working with HTTP,
              networking protocols, and SQL databases, and developing software using C,
              C++, C#, and Python. Much of my learning has come from building systems from
              scratch and working directly with Linux environments, networking concepts,
              and low-level programming.
            </p>
            <p>
              I&apos;m particularly interested in designing reliable backend systems, where
              performance, scalability, and clear architecture matter. I enjoy solving
              complex technical problems and building software that is efficient,
              maintainable, and well understood.
            </p>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group rounded-xl border border-white/10 bg-[#141427] p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#EC4899]/30 hover:bg-[#141427]/80 sm:p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[linear-gradient(135deg,rgba(139,92,246,0.18),rgba(236,72,153,0.16))] transition-transform group-hover:scale-110">
                  <Icon className="w-6 h-6 text-[#F5D0FE]" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-[#E5E7EB] sm:text-lg">
                  {highlight.title}
                </h3>
                <p className="text-sm text-[#9CA3AF]">{highlight.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
