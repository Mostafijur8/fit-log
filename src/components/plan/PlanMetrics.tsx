
import type { IWorkout } from "@/types/workout";

interface PlanMetricsProps {
  workouts: IWorkout[];
}

const PlanMetrics = ({ workouts }: PlanMetricsProps) => {
  const exercises = workouts.length;

  const minutes = workouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const calories = workouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
      <div className="rounded-xl border border-white/10 bg-[#15171d] p-3 sm:p-5">
        <p className="text-[9px] uppercase text-[#9ca3af] sm:text-xs">
          Exercises
        </p>

        <p className="mt-1 text-xl font-bold text-white sm:mt-2 sm:text-3xl">
          {exercises}
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-[#15171d] p-3 sm:p-5">
        <p className="text-[9px] uppercase text-[#9ca3af] sm:text-xs">
          Minutes
        </p>

        <p className="mt-1 text-xl font-bold text-white sm:mt-2 sm:text-3xl">
          {minutes}
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-[#15171d] p-3 sm:p-5">
        <p className="text-[9px] uppercase text-[#9ca3af] sm:text-xs">
          Calories
        </p>

        <p className="mt-1 text-xl font-bold text-white sm:mt-2 sm:text-3xl">
          {calories}
        </p>
      </div>
    </div>
  );
};

export default PlanMetrics;

