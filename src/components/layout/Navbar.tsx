"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/95 shadow-[0_4px_20px_rgba(0,0,0,0.55)] backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between gap-2 px-3 py-3 sm:px-4 sm:py-4">
        {/* Logo */}
        <div className="flex shrink-0 items-center gap-1.5 font-bold text-white sm:gap-2">
          <img
            src="/images/logo/logo.png"
            alt="FITLOG logo"
            className="h-8 w-8 object-contain sm:h-10 sm:w-10"
          />

          <p className="text-base tracking-wider sm:text-xl">FITLOG</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-1 sm:gap-3">
          <Link
            href="/"
            className={`rounded-full px-2 py-1.5 text-xs transition-all sm:px-4 sm:py-2 sm:text-base ${
              pathname === "/"
                ? "bg-[#1a2312] text-[#ccff00]"
                : "text-white hover:bg-white/5 hover:text-[#ccff00]"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-2 py-1.5 text-xs transition-all sm:px-4 sm:py-2 sm:text-base ${
              pathname === "/my-plan"
                ? "bg-[#1a2312] text-[#ccff00]"
                : "text-[#9ca3af] hover:bg-white/5 hover:text-[#ccff00]"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Status Badges */}
        <div className="flex shrink-0 items-center gap-0.5 sm:gap-2">
          <Link
            href="/my-plan"
            className="flex items-center gap-1 rounded-full px-1.5 py-1.5 text-[11px] font-bold text-white hover:bg-white/5 sm:gap-2 sm:px-3 sm:py-2 sm:text-sm"
          >
            <span>Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[10px] font-extrabold text-black sm:h-6 sm:min-w-6 sm:px-2 sm:text-xs">
              0
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1 rounded-full px-1.5 py-1.5 text-[11px] font-bold text-white hover:bg-white/5 sm:gap-2 sm:px-3 sm:py-2 sm:text-sm"
          >
            <span>Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-white/20 bg-white/5 px-1.5 text-[10px] font-bold text-white/80 sm:h-6 sm:min-w-6 sm:px-2 sm:text-xs">
              0
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
