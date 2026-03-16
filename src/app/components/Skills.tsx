import { motion } from "motion/react";

type SkillItem = {
  name: string;
  iconId?: string;
  fallbackLabel?: string;
  logoSrc?: string;
};

const skills: SkillItem[] = [
  { name: "REST API", iconId: "postman" },
  { name: "MySQL", iconId: "mysql" },
  { name: "PostgreSQL", iconId: "postgres" },
  { name: "ASP.NET", iconId: "dotnet" },
  { name: "Python", iconId: "py" },
  { name: "Java", iconId: "java" },
  { name: "C", iconId: "c" },
  { name: "C++", iconId: "cpp" },
  { name: "C#", iconId: "cs" },
  { name: "SQL", fallbackLabel: "SQL" },
  { name: "Git", iconId: "git" },
  { name: "GitHub", iconId: "github" },
  { name: "Socket.IO", logoSrc: "https://cdn.simpleicons.org/socketdotio/FFFFFF" },
  { name: "VS Code", iconId: "vscode" },
  { name: "Postman", iconId: "postman" },
  { name: "Docker", iconId: "docker" },
  { name: "Linux", iconId: "linux" },
  { name: "Networking", fallbackLabel: "NET" },
  { name: "Nginx", iconId: "nginx" },
];

function buildSkillIconUrl(iconId: string) {
  return `https://skillicons.dev/icons?i=${iconId}&theme=dark`;
}

export function Skills() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:62px_62px]" />
        <div className="absolute left-[16%] top-12 h-64 w-64 rounded-full bg-[#8B5CF6]/12 blur-3xl" />
        <div className="absolute right-[12%] top-[18%] h-64 w-64 rounded-full bg-[#EC4899]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[92rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-[#E5E7EB] md:text-5xl">Tech Stack</h1>
          <div className="mx-auto mt-4 h-1 w-20 bg-[linear-gradient(90deg,#EC4899,#8B5CF6)]" />
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="grid grid-cols-2 justify-items-start gap-x-3 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.02 }}
                  className="flex w-[10.0rem] flex-col items-center gap-2 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-[17px] border border-white/10 bg-[linear-gradient(180deg,#23253A,#1e2032)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    {skill.logoSrc ? (
                      <img
                        src={skill.logoSrc}
                        alt={`${skill.name} icon`}
                        className="h-16 w-16 object-contain"
                        loading="lazy"
                      />
                    ) : skill.iconId ? (
                      <img
                        src={buildSkillIconUrl(skill.iconId)}
                        alt={`${skill.name} icon`}
                        className="h-15 w-15 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C4B5FD]">
                        {skill.fallbackLabel}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-medium leading-tight text-[#E5E7EB]">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}