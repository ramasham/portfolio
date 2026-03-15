import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0F0F1A]">
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0F0F1A]/70 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="text-center font-mono text-[#D1D5DB]">
            <p className="mb-2 flex flex-wrap items-center justify-center gap-2 text-base font-semibold sm:text-xl">
              <span className="text-sm tracking-[-0.18em] text-[#EC4899] sm:text-base">&gt;_</span>
              <span>Rama Alshamasneh</span>
              <span className="text-[#9CA3AF]">|</span>
              <span>Backend Engineer</span>
            </p>
            <p className="mb-1 text-xs text-[#D1D5DB] sm:text-sm">
              Built with React, TypeScript &amp; Tailwind
            </p>
            <p className="text-[11px] text-[#9CA3AF] sm:text-xs">
              © {new Date().getFullYear()} Rama Alshamasneh. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
