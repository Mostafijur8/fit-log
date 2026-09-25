import Link from "next/link";
import { Dumbbell } from "lucide-react";

const EmptyPlan = () => {
  return (
    <div className="mt-10 flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#15171d] px-6 py-12 text-center">
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#c2f800]/10">
        <Dumbbell className="h-7 w-7 text-[#c2f800]" />
      </div>

      {/* Title */}
      <h2 className="mt-5 text-lg font-bold uppercase text-white">
        No Workouts Yet
      </h2>

      {/* Description */}
      <p className="mt-2 max-w-md text-sm leading-6 text-[#9ca3af]">
        You haven't added any workouts to your plan yet. Start exploring
        workouts and build your personal plan.
      </p>

      {/* Button */}
      <Link
        href="/#library"
        className="mt-6 rounded-lg bg-[#c2f800] px-5 py-3 text-xs font-bold uppercase text-black transition hover:bg-[#d4ff33]"
      >
        Explore Workouts
      </Link>
    </div>
  );
};

export default EmptyPlan;
