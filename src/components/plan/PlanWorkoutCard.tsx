"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { toast } from "react-toastify";

import { useFitlog } from "@/context/FitlogProvider";
import type { IWorkout } from "@/types/workout";

type PlanWorkoutCardProps = {
  workout: IWorkout;
  activeTab: "plan" | "saved";
};

const PlanWorkoutCard = ({ workout, activeTab }: PlanWorkoutCardProps) => {
  const { removeFromPlan, removeFromSaved, completedWorkoutIds, markAsDone } =
    useFitlog();

  const isCompleted = completedWorkoutIds.includes(workout.id);

  const handleMarkAsDone = () => {
    markAsDone(workout.id);
    toast.success("Workout completed!");
  };

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
    <div
      className={`flex w-full overflow-hidden rounded-xl border bg-[#15171d] transition sm:rounded-2xl ${
        isCompleted
          ? "border-[#c2f800]/40"
          : "border-white/10 hover:border-[#c2f800]/30"
      }`}
    >
      {/* Image */}
      <div className="relative w-20 shrink-0 sm:w-40 md:w-52 lg:w-64">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full min-h-[125px] w-full object-cover sm:min-h-[190px]"
        />

        {/* Rating */}
        <div className="absolute right-1.5 top-1.5 rounded-full bg-[#c2f800] px-1.5 py-0.5 text-[8px] font-bold text-black shadow-lg sm:right-3 sm:top-3 sm:px-3 sm:py-1 sm:text-xs">
          ★ {workout.rating}
        </div>

        {/* Done Badge */}
        {isCompleted && (
          <div className="absolute bottom-1.5 left-1.5 flex items-center gap-0.5 rounded-full bg-[#c2f800] px-1.5 py-0.5 text-[7px] font-bold text-black sm:bottom-3 sm:left-3 sm:gap-1 sm:px-3 sm:py-1 sm:text-xs">
            <Check className="h-2.5 w-2.5 sm:h-4 sm:w-4" />
            Done
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col justify-center p-2.5 sm:p-5 md:p-6">
        {/* Name */}
        <h2
          className={`truncate text-[11px] font-bold uppercase sm:text-lg md:text-xl ${
            isCompleted ? "text-[#c2f800]" : "text-white"
          }`}
        >
          {workout.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 truncate text-[8px] text-[#9ca3af] sm:mt-2 sm:text-xs">
          Equipment: <span className="text-white">{workout.equipment}</span>
        </p>

        {/* Info */}
        <div className="mt-2 flex gap-1.5 sm:mt-4 sm:gap-2">
          {/* Duration */}
          <div className="rounded-md border border-white/10 bg-white/5 px-2 py-1.5 sm:rounded-lg sm:px-3 sm:py-2">
            <p className="text-[7px] font-bold uppercase text-[#9ca3af] sm:text-[9px]">
              Duration
            </p>

            <p className="mt-0.5 text-[9px] font-bold text-white sm:mt-1 sm:text-sm">
              {workout.duration} min
            </p>
          </div>

          {/* Calories */}
          <div className="rounded-md border border-white/10 bg-white/5 px-2 py-1.5 sm:rounded-lg sm:px-3 sm:py-2">
            <p className="text-[7px] font-bold uppercase text-[#9ca3af] sm:text-[9px]">
              Calories
            </p>

            <p className="mt-0.5 text-[9px] font-bold text-white sm:mt-1 sm:text-sm">
              {workout.caloriesBurned} kcal
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex w-[82px] shrink-0 flex-col justify-center gap-1.5 p-2 sm:w-36 sm:gap-2 sm:p-4 md:w-44">
        {/* View Details */}
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-md bg-[#c2f800] px-1.5 py-1.5 text-center text-[7px] font-bold uppercase text-black transition hover:bg-[#d4ff33] sm:rounded-lg sm:px-2 sm:py-2.5 sm:text-[10px]"
        >
          View Details
        </Link>

        {/* Mark as Done */}
        {activeTab === "plan" && (
          <button
            type="button"
            onClick={handleMarkAsDone}
            disabled={isCompleted}
            className={`flex items-center justify-center gap-0.5 rounded-md px-1 py-1.5 text-[7px] font-bold uppercase transition sm:gap-1 sm:rounded-lg sm:px-2 sm:py-2.5 sm:text-[10px] ${
              isCompleted
                ? "cursor-default bg-[#c2f800] text-black"
                : "border border-[#c2f800]/30 text-[#c2f800] hover:bg-[#c2f800] hover:text-black"
            }`}
          >
            <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" />

            {isCompleted ? "Completed" : "Mark as Done"}
          </button>
        )}

        {/* Remove */}
        <button
          type="button"
          onClick={handleRemove}
          className="rounded-md border border-white/10 px-1.5 py-1.5 text-[7px] font-bold uppercase text-[#9ca3af] transition hover:border-red-500/40 hover:text-red-400 sm:rounded-lg sm:px-2 sm:py-2.5 sm:text-[10px]"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default PlanWorkoutCard;
