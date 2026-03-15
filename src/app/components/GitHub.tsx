import { motion } from "motion/react";
import {
  ArrowUpRight,
  Clock3,
  Code2,
  FolderGit2,
  Github,
  GitCommit,
  GitFork,
  Star,
} from "lucide-react";

const stats = [
  { label: "Public Repos", value: "12", icon: FolderGit2 },
  { label: "Source Repos", value: "11", icon: Code2 },
  { label: "Stars", value: "1", icon: Star },
  { label: "Forks", value: "1", icon: GitFork },
];

const topLanguages = [
  { name: "C", percentage: 55, color: "#8B5CF6", countLabel: "6 repos" },
  { name: "C++", percentage: 9, color: "#A78BFA", countLabel: "1 repo" },
  { name: "Dockerfile", percentage: 9, color: "#7C3AED", countLabel: "1 repo" },
  { name: "HTML", percentage: 9, color: "#C4B5FD", countLabel: "1 repo" },
  { name: "C#", percentage: 9, color: "#6D28D9", countLabel: "1 repo" },
];

const recentActivity = [
  {
    repo: "42_Inception",
    message: "Update README.md",
    date: "2026-03-11T06:49:59Z",
    url: "https://github.com/ramasham/42_Inception/commit/9f665faeb696ced98a8da9d60485656cdc742125",
  },
  {
    repo: "42_webserve",
    message: "Update README.md",
    date: "2026-03-11T06:44:43Z",
    url: "https://github.com/ramasham/42_webserve/commit/0be7746269e125358e1945588073167cdcf73826",
  },
  {
    repo: "GameStore",
    message: "simple GameStore",
    date: "2026-03-08T00:18:52Z",
    url: "https://github.com/ramasham/GameStore/commit/1d428fffb3adf9f236ff67f2e015ef66422a2e84",
  },
  {
    repo: "Andary",
    message: "Merge pull request #62 from Tawjihi-Gaming/61-add-the-wss-to-the-signalr",
    date: "2026-03-02T13:36:57Z",
    url: "https://github.com/ramasham/Andary/commit/01918110e3238747ffc37507a435c5f2ea4c1bee",
  },
  {
    repo: "minishell",
    message: "Update README.md",
    date: "2025-07-09T08:41:25Z",
    url: "https://github.com/ramasham/minishell/commit/5329e1c8559a79cab8bfc399a52cd63b3c29f4e6",
  },
];

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

export function GitHub() {
  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4 text-5xl font-bold text-[#E5E7EB] md:text-6xl">
            GitHub Activity
          </h1>
          <div className="mx-auto mb-6 h-1 w-20 bg-[#8B5CF6]" />
          <p className="mx-auto max-w-3xl text-xl text-[#9CA3AF]">
            A current snapshot of my public repositories, dominant languages, and latest commits.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-[#141427] p-6 text-center transition-colors duration-300 hover:border-[#8B5CF6]/35 hover:bg-[#141427]/85"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B5CF6]/15">
                  <Icon className="h-6 w-6 text-[#A78BFA]" />
                </div>
                <div className="mb-1 text-3xl font-bold text-[#E5E7EB]">{stat.value}</div>
                <div className="text-sm text-[#9CA3AF]">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[24px] border border-white/10 bg-[#141427] p-8"
          >
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[#E5E7EB]">
              <Code2 className="h-6 w-6 text-[#A78BFA]" />
              Top Languages
            </h2>

            <div className="space-y-5">
              {topLanguages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.08 }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium text-[#E5E7EB]">{language.name}</span>
                    <span className="text-sm text-[#9CA3AF]">{language.countLabel}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${language.percentage}%` }}
                      transition={{ delay: 0.38 + index * 0.08, duration: 0.8 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: language.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="rounded-[24px] border border-white/10 bg-[#141427] p-8"
          >
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[#E5E7EB]">
              <GitCommit className="h-6 w-6 text-[#A78BFA]" />
              Recent Activity
            </h2>

            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.a
                  key={`${activity.repo}-${activity.date}`}
                  href={activity.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + index * 0.08 }}
                  className="block rounded-xl border border-white/6 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-[#8B5CF6]/25 hover:bg-white/[0.05]"
                >
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="font-mono text-sm text-[#A78BFA]">{activity.repo}</span>
                    <span className="flex items-center gap-2 text-xs text-[#6B7280]">
                      <Clock3 className="h-3.5 w-3.5" />
                      {formatDate(activity.date)}
                    </span>
                  </div>
                  <p className="pr-6 leading-relaxed text-[#9CA3AF]">{activity.message}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/ramasham"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 px-6 py-3 text-base font-semibold text-[#E5E7EB] transition-colors hover:bg-[#8B5CF6]/15"
          >
            <Github className="h-5 w-5 text-[#A78BFA]" />
            View Full GitHub Profile
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
