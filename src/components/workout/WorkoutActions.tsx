"use client";

import { Bookmark, Plus } from "lucide-react";
import toast from "react-hot-toast";

import type { IWorkout } from "@/types/workout";
import { useFitlog } from "@/context/FitlogProvider";

interface WorkoutActionsProps {
  workout: IWorkout;
}

const WorkoutActions = ({
  workout,
}: WorkoutActionsProps) => {
  const {
    planWorkouts,
    savedWorkouts,
    addToPlan,
    saveForLater,
  } = useFitlog();

  const isInPlan = planWorkouts.some(
    (item) => item.id === workout.id,
  );

  const isSaved = savedWorkouts.some(
    (item) => item.id === workout.id,
  );

  const handleAddToPlan = () => {
    if (isInPlan) {
      toast("Already added to today's plan");
      return;
    }

    addToPlan(workout);

    toast.success("Added to today's plan");
  };

  const handleSaveForLater = () => {
    if (isSaved) {
      toast("Already saved for later");
      return;
    }

    saveForLater(workout);

    toast.success("Saved for later");
  };

  return (
    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {/* Add To Plan */}
      <button
        type="button"
        onClick={handleAddToPlan}
        className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wide transition ${
          isInPlan
            ? "cursor-default bg-[#c2f800]/20 text-[#c2f800]"
            : "bg-[#c2f800] text-black hover:bg-[#d4ff33]"
        }`}
      >
        <Plus size={16} strokeWidth={2.5} />

        {isInPlan
          ? "Added to today's plan"
          : "Add to today's plan"}
      </button>

      {/* Save */}
      <button
        type="button"
        onClick={handleSaveForLater}
        className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-xs font-bold uppercase tracking-wide transition ${
          isSaved
            ? "border-[#c2f800]/40 bg-[#c2f800]/10 text-[#c2f800]"
            : "border-white/10 bg-black/20 text-white hover:border-[#c2f800]/40 hover:text-[#c2f800]"
        }`}
      >
        <Bookmark
          size={16}
          strokeWidth={2}
          fill={isSaved ? "currentColor" : "none"}
        />

        {isSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
};

export default WorkoutActions;