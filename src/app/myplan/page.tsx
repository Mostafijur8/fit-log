"use client";

import Link from "next/link";
import { useState } from "react";
import { useFitlog } from "@/context/FitlogProvider";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState<
    "plan" | "saved"
  >("plan");

  const {
    planWorkouts,
    savedWorkouts,
    removeFromPlan,
    removeFromSaved,
  } = useFitlog();

  const workouts =
    activeTab === "plan"
      ? planWorkouts
      : savedWorkouts;

  return (
    <main className="min-h-screen bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#c2f800]">
            YOUR WORKOUTS
          </p>

          <h1 className="mt-2 text-3xl font-extrabold uppercase text-white sm:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-3 text-sm text-[#9ca3af]">
            Manage your planned and saved workouts.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex gap-2 border-b border-white/10 pb-3">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`rounded-lg px-4 py-2 text-xs font-bold uppercase transition ${
              activeTab === "plan"
                ? "bg-[#c2f800] text-black"
                : "bg-white/5 text-[#9ca3af] hover:text-white"
            }`}
          >
            Today's Plan ({planWorkouts.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`rounded-lg px-4 py-2 text-xs font-bold uppercase transition ${
              activeTab === "saved"
                ? "bg-[#c2f800] text-black"
                : "bg-white/5 text-[#9ca3af] hover:text-white"
            }`}
          >
            Saved ({savedWorkouts.length})
          </button>
        </div>

        {/* Workout Grid */}
        {workouts.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-[#15171d] p-10 text-center">
            <p className="text-sm text-[#9ca3af]">
              {activeTab === "plan"
                ? "No workouts added to today's plan yet."
                : "No saved workouts yet."}
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <div
                key={workout.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#15171d]"
              >
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <h2 className="text-lg font-bold uppercase text-white">
                    {workout.name}
                  </h2>

                  <p className="mt-2 text-xs text-[#9ca3af]">
                    {workout.duration} min · {workout.reps} reps ·{" "}
                    {workout.rating} ★
                  </p>

                  <div className="mt-5 flex gap-2">
                    <Link
                      href={`/workout/${workout.id}`}
                      className="flex-1 rounded-lg bg-[#c2f800] px-3 py-2 text-center text-[10px] font-bold uppercase text-black transition hover:bg-[#d4ff33]"
                    >
                      View Details
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        activeTab === "plan"
                          ? removeFromPlan(workout.id)
                          : removeFromSaved(workout.id)
                      }
                      className="rounded-lg border border-white/10 px-3 py-2 text-[10px] font-bold uppercase text-[#9ca3af] transition hover:border-red-500/40 hover:text-red-400"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;