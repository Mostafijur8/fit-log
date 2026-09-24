"use client";

import Link from "next/link";
import { toast } from "react-toastify";
import { useFitlog } from "@/context/FitlogProvider";
import type { IWorkout } from "@/types/workout";

type PlanWorkoutCardProps = {
  workout: IWorkout;
  activeTab: "plan" | "saved";
};

const PlanWorkoutCard = ({ workout, activeTab }: PlanWorkoutCardProps) => {
  const { removeFromPlan, removeFromSaved } = useFitlog();

  // Mark as Done
  const handleMarkAsDone = () => {
    removeFromPlan(workout.id);

    toast.success("Workout marked as done");
  };

  // Remove
  const handleRemove = () => {
    if (activeTab === "plan") {
      removeFromPlan(workout.id);

      toast.success("Workout removed from today's plan");
    } else {
      removeFromSaved(workout.id);

      toast.success("Workout removed from saved");
    }
  };

  return (
    <div className="flex w-full overflow-hidden rounded-2xl border border-white/10 bg-[#15171d] transition hover:border-[#c2f800]/30">
      {/* Image */}
      <div className="relative w-28 shrink-0 sm:w-40 md:w-52 lg:w-64">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full min-h-[190px] w-full object-cover"
        />

        {/* Rating */}
        <div className="absolute right-2 top-2 rounded-full bg-[#c2f800] px-2 py-1 text-[10px] font-bold text-black shadow-lg sm:right-3 sm:top-3 sm:px-3 sm:text-xs">
          ★ {workout.rating}
        </div>
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5 md:p-6">
        {/* Name */}
        <h2 className="text-base font-bold uppercase text-white sm:text-lg md:text-xl">
          {workout.name}
        </h2>

        {/* Equipment */}
        <p className="mt-2 text-[10px] text-[#9ca3af] sm:text-xs">
          Equipment: <span className="text-white">{workout.equipment}</span>
        </p>

        {/* Workout Info */}
        <div className="mt-4 flex flex-wrap gap-2">
          {/* Duration */}
          <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
            <p className="text-[9px] font-bold uppercase text-[#9ca3af]">
              Duration
            </p>

            <p className="mt-1 text-xs font-bold text-white sm:text-sm">
              {workout.duration} min
            </p>
          </div>

          {/* Calories */}
          <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
            <p className="text-[9px] font-bold uppercase text-[#9ca3af]">
              Calories
            </p>

            <p className="mt-1 text-xs font-bold text-white sm:text-sm">
              {workout.caloriesBurned} kcal
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex w-28 shrink-0 flex-col justify-center gap-2 p-3 sm:w-36 sm:p-4 md:w-44">
        {/* View Details */}
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-lg bg-[#c2f800] px-2 py-2.5 text-center text-[9px] font-bold uppercase text-black transition hover:bg-[#d4ff33] sm:text-[10px]"
        >
          View Details
        </Link>

        {/* Mark as Done */}
        {activeTab === "plan" && (
          <button
            type="button"
            onClick={handleMarkAsDone}
            className="rounded-lg border border-[#c2f800]/30 px-2 py-2.5 text-[9px] font-bold uppercase text-[#c2f800] transition hover:bg-[#c2f800] hover:text-black sm:text-[10px]"
          >
            Mark as Done
          </button>
        )}

        {/* Remove */}
        <button
          type="button"
          onClick={handleRemove}
          className="rounded-lg border border-white/10 px-2 py-2.5 text-[9px] font-bold uppercase text-[#9ca3af] transition hover:border-red-500/40 hover:text-red-400 sm:text-[10px]"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default PlanWorkoutCard;
