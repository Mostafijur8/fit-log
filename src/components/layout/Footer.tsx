const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">

        {/* Left - Logo & Brand */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logo/logo.png"
            alt="FitLog Logo"
            className="h-8 w-8 object-contain"
          />

          <span className="text-lg font-extrabold tracking-wide text-white">
            FITLOG
          </span>
        </div>

        {/* Right - Copyright */}
        <p className="text-center text-xs text-[#9ca3af] sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;