import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="bg-black px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1232px] grid-cols-1 items-center gap-10 rounded-2xl border border-[#222630] bg-[#15171d] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-14">
        {/* Content */}
        <div className="order-2 lg:order-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#c2f800]">
            WORKOUT LIBRARY
          </p>

          <h1 className="mt-4 text-4xl font-extrabold uppercase  text-white  ">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-[150%] text-[#9ca3af] sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          {/* CTA */}
          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c2f800] px-6 py-3 text-xs font-bold uppercase tracking-[0.03em] text-black shadow-[0_8px_30px_rgba(194,248,0,0.25)] transition hover:bg-[#d4ff33] hover:shadow-[0_10px_35px_rgba(194,248,0,0.4)]"
          >
            Browse Workouts
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>

        {/* Image */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <img
            src="/images/banner/banner.png"
            alt="FitLog workout"
            className="w-full max-w-md rounded-2xl object-cover lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;