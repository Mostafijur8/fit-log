"use client";

import { useState } from "react";

import PlanHeader from "@/components/plan/PlanHeader";
import PlanMetrics from "@/components/plan/PlanMetrics";
import PlanTabs from "@/components/plan/PlanTabs";
import PlanWorkoutCard from "@/components/plan/PlanWorkoutCard";
import EmptyPlan from "@/components/plan/EmptyPlan";

import { useFitlog } from "@/context/FitlogProvider";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const [sortBy, setSortBy] = useState("default");

  const {
    planWorkouts,
    savedWorkouts,
  } = useFitlog();

  // Current tab workouts
  const currentWorkouts =
    activeTab === "plan"
      ? planWorkouts
      : savedWorkouts;

  // Sort workouts
  const workouts = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <main className="min-h-screen bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <PlanHeader />

        {/* Metrics */}
        <PlanMetrics
          workouts={currentWorkouts}
        />

        {/* Tabs + Dropdown */}
        <PlanTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          planCount={planWorkouts.length}
          savedCount={savedWorkouts.length}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Workouts */}
        {workouts.length === 0 ? (
          <EmptyPlan />
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-5">
            {workouts.map((workout) => (
              <PlanWorkoutCard
                key={workout.id}
                workout={workout}
                activeTab={activeTab}
              />
            ))}
          </div>
        )}

      </div>
    </main>
  );
};

export default MyPlanPage;