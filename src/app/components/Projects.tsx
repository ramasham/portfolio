import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  FileCode2,
  FolderOpen,
  Github,
} from "lucide-react";

type Project = {
  name: string;
  owner: string;
  repoUrl: string;
  description: string;
  updatedAt: string;
  primaryLanguage: string;
  tags: string[];
  visibilityLabel: string;
  buttonLabel: string;
};

type RepositoryListItem = {
  name: string;
  owner: string;
  repoUrl: string;
  updatedAt: string;
  primaryLanguage: string;
  visibilityLabel: string;
};

type GitHubRepoResponse = {
  name: string;
  owner: {
    login: string;
  };
  html_url: string;
  updated_at: string;
  language: string | null;
  fork: boolean;
  visibility?: string;
};

const githubProfileUrl = "https://github.com/ramasham";

const projects: Project[] = [
  {
    name: "Andary",
    owner: "ramasham",
    repoUrl: "https://github.com/ramasham/Andary",
    description:
      "A collaborative application forked from Tawjihi-Gaming/Andary, focused on full-stack product work and recent realtime transport updates.",
    updatedAt: "2026-03-07T21:15:44Z",
    primaryLanguage: "JavaScript",
    tags: ["JavaScript", "Team Project", "Realtime", "Fork"],
    visibilityLabel: "Fork",
    buttonLabel: "Repo",
  },
  {
    name: "42_Inception",
    owner: "ramasham",
    repoUrl: "https://github.com/ramasham/42_Inception",
    description:
      "A 42 infrastructure project centered on containerized services, Docker orchestration, and production-style environment setup.",
    updatedAt: "2026-03-11T06:50:03Z",
    primaryLanguage: "Docker",
    tags: ["Docker", "Infrastructure", "Nginx", "WordPress", "MariaDB"],
    visibilityLabel: "Public",
    buttonLabel: "Repo",
  },
  {
    name: "42_webserve",
    owner: "ramasham",
    repoUrl: "https://github.com/ramasham/42_webserve",
    description:
      "A web server project built around low-level HTTP handling, request parsing, configuration-driven routing, and CGI-oriented backend behavior.",
    updatedAt: "2026-03-11T06:44:47Z",
    primaryLanguage: "C++",
    tags: ["C++", "HTTP", "CGI", "HTML", "CSS"],
    visibilityLabel: "Public",
    buttonLabel: "Repo",
  },
  {
    name: "minishell",
    owner: "ramasham",
    repoUrl: "https://github.com/ramasham/minishell",
    description:
      "A Unix shell recreation in C with command parsing, environment handling, pipes, redirections, and built-in command execution.",
    updatedAt: "2025-07-09T08:41:29Z",
    primaryLanguage: "C",
    tags: ["C", "Shell", "Parsing", "Pipes", "Redirections"],
    visibilityLabel: "Public",
    buttonLabel: "Repo",
  },
  {
    name: "GameStore",
    owner: "ramasham",
    repoUrl: "https://github.com/ramasham/GameStore",
    description:
      "A storefront experiment built while learning .NET 10, combining backend-focused application structure with a polished product UI.",
    updatedAt: "2026-03-08T00:19:25Z",
    primaryLanguage: "C#",
    tags: ["C#", ".NET 10", "TypeScript", "SCSS"],
    visibilityLabel: "Public",
    buttonLabel: "Repo",
  },
];

function formatProjectDate(dateString: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

function toRepositoryListItem(repo: GitHubRepoResponse): RepositoryListItem {
  return {
    name: repo.name,
    owner: repo.owner.login,
    repoUrl: repo.html_url,
    updatedAt: repo.updated_at,
    primaryLanguage: repo.language ?? "Code",
    visibilityLabel: repo.fork ? "Fork" : repo.visibility === "public" ? "Public" : "Repo",
  };
}

export function Projects() {
  const fallbackRepositories = useMemo(
    () =>
      [...projects]
        .sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt))
        .map((project) => ({
          name: project.name,
          owner: project.owner,
          repoUrl: project.repoUrl,
          updatedAt: project.updatedAt,
          primaryLanguage: project.primaryLanguage,
          visibilityLabel: project.visibilityLabel,
        })),
    [],
  );
  const [repositories, setRepositories] = useState<RepositoryListItem[]>(fallbackRepositories);

  useEffect(() => {
    let cancelled = false;

    async function loadRepositories() {
      try {
        const response = await fetch(
          "https://api.github.com/users/ramasham/repos?per_page=100&sort=updated",
        );

        if (!response.ok) {
          throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const data = (await response.json()) as GitHubRepoResponse[];
        const nextRepositories = data
          .sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at))
          .map(toRepositoryListItem);

        if (!cancelled && nextRepositories.length > 0) {
          setRepositories(nextRepositories);
        }
      } catch {
        if (!cancelled) {
          setRepositories(fallbackRepositories);
        }
      }
    }

    loadRepositories();

    return () => {
      cancelled = true;
    };
  }, [fallbackRepositories]);

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:62px_62px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.14),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(236,72,153,0.10),transparent_22%),linear-gradient(180deg,rgba(15,15,26,0.2),rgba(15,15,26,0.92))]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-[#E5E7EB] md:text-5xl">Projects</h1>
          <div className="mx-auto mt-4 h-1 w-20 bg-[linear-gradient(90deg,#EC4899,#8B5CF6)]" />
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-[0.80fr_1.20fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="self-start overflow-hidden rounded-[28px] border border-white/10 bg-[#161622]/90 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-6 py-5">
              <div className="flex items-center gap-3 text-[#E5E7EB]">
                <FileCode2 className="h-5 w-5 text-[#A78BFA]" />
                <span className="text-xl font-semibold">Repositories</span>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-sm font-medium text-[#9CA3AF]">
                {repositories.length}
              </span>
            </div>

            <div className="h-[22rem] overflow-y-auto pr-2 lg:h-[26rem] xl:h-[31rem] [scrollbar-color:rgba(255,255,255,0.78)_rgba(255,255,255,0.08)] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/[0.08] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-[2px] [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-white/75">
              {repositories.map((project, index) => (
                <a
                  key={project.name}
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-b border-white/6 px-6 py-5 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.03]"
                >
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-[#E5E7EB] transition-colors group-hover:text-[#C4B5FD]">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm text-[#6B7280]">{project.owner}</p>
                      <p className="mt-2 text-sm text-[#6B7280]">
                        Updated {formatProjectDate(project.updatedAt)}
                      </p>
                    </div>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-[#F0ABFC]">
                        {project.visibilityLabel}
                      </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />
                    <span>{project.primaryLanguage}</span>
                    <span className="text-[#4B5563]">•</span>
                    <span>#{index + 1}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6B7280]">
                Pinned Projects
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                  className="flex h-full flex-col rounded-[24px] border border-white/10 bg-[#161622]/92 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition-colors duration-300 hover:border-[#8B5CF6]/30"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-lg border border-white/10 bg-white/[0.03] p-2">
                        <FileCode2 className="h-4 w-4 text-[#A78BFA]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-[#E5E7EB]">
                          {project.name}
                        </h3>
                        <p className="mt-1 flex items-center gap-2 text-sm text-[#6B7280]">
                          <Clock3 className="h-3.5 w-3.5" />
                          Updated {formatProjectDate(project.updatedAt)}
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-[#9CA3AF]">
                      {project.visibilityLabel}
                    </span>
                  </div>

                  <p className="mb-6 flex-1 leading-relaxed text-[#9CA3AF]">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-xl border border-[#EC4899]/18 bg-[linear-gradient(135deg,rgba(139,92,246,0.10),rgba(236,72,153,0.08))] px-3 py-1 text-xs font-mono text-[#F5D0FE]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/6 pt-5">
                    <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                      <span className="inline-flex h-3 w-3 rounded-full bg-[#8B5CF6]" />
                      <span>{project.primaryLanguage}</span>
                    </div>

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-[#E5E7EB] transition-colors duration-300 hover:border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/10"
                    >
                      {project.buttonLabel}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-12 text-center"
        >
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-lg font-semibold text-[#E5E7EB] transition-colors hover:text-[#C4B5FD]"
          >
            <Github className="h-5 w-5 text-[#8B5CF6]" />
            View all repositories
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
